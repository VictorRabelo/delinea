import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-candidatos-form',
  templateUrl: './candidatos-form.component.html',
  styleUrls: ['./candidatos-form.component.css'],
  providers: [ CrudService ]
})
export class CandidatosFormComponent implements OnInit {

  private sub = new SubSink();

  loading: boolean = false;

  @Input() data: any;
  @Input() crud: string;
  @Input() module: string;

  dados: any = {};
  title: string;

  constructor(
    private activeModal: NgbActiveModal,
    private service: CrudService
  ) {}

  ngOnInit() {
    if (this.module) {
      this.service.setEndPoint(this.module);
      
      if(this.module == 'candidate'){
        this.title = 'candidato';
        if(this.data){
          this.getById(this.data);
        }
      }
    }
  }

  close(params = undefined) {
    this.activeModal.close(params);
  }

  getById(id) {
    this.loading = true;
    this.sub.sink = this.service.getById(id).subscribe(
      (res: any) => {
        this.loading = false;
        this.dados = res;
        
        if(this.module == 'candidatos'){
          this.dados = res;
        }
      },
      error => {
        console.log(error)
      });
  }

  submit(form: NgForm) {
    if (!form.valid) {
      return false;
    }

    if (this.dados.id) {
      this.update();
    } else {
      this.create();
    }

  }

  create() {
    this.loading = true;

    this.service.store(this.dados).subscribe(
      (res: any) => {
        res.message = "Cadastro bem sucedido!"
        this.close(res);
      },
      error => {
        this.loading = false;
        console.log(error)
      }
    )
  }

  update() {
    this.loading = true;

    this.service.update(this.dados).subscribe(
      (res: any) => {
        res.message = "Atualização bem sucedido!"
        this.close(res);
      },
      error => {
        this.loading = false;
        console.log(error)
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
