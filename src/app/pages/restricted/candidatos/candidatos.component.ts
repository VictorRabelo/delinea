import { ControllerBase } from './../../../controller/controller.base';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { SubSink } from 'subsink';
import { CandidatosFormComponent } from '../../../components/candidatos-form/candidatos-form.component';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css'],
  providers: [ MessageService, CrudService ]
})
export class CandidatosComponent extends ControllerBase {

  private sub = new SubSink();

  loading: boolean = false;

  dados: any = [];

  title: string = 'candidatos';
  route: string = 'candidate';
  term: string;
  clienteService
  
  constructor(
    private messageService: MessageService,
    private modalCtrl: NgbModal,
    private service: CrudService
  ) {
    super();
    this.service.setEndPoint(this.route);
  }

  ngOnInit() {
    this.getAll();
  }

  openForm(crud, item = undefined){
    const modalRef = this.modalCtrl.open(CandidatosFormComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.crud = crud;
    modalRef.componentInstance.module = this.route;
    modalRef.result.then(res => {
      if(res.message){
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: res.message});
      }
      this.getAll();
    })
  }

  getAll(){
    this.loading = true;
    this.sub.sink = this.service.getAll().subscribe(
      (res: any) => {
        this.loading = false;
        this.dados = res;
      },error => console.log(error))
  }

  delete(id){
    
    this.loading = true;

    this.service.delete(id).subscribe(
      (res: any) => {
        this.getAll();
      },
      error => console.log(error),
      () => {
        this.messageService.add({key: 'bc', severity:'success', summary: 'Sucesso', detail: 'Excluido com Sucesso!'});
        this.loading = false;
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
