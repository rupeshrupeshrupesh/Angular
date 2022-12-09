import { Component, OnInit ,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

  constructor( private vcr:ViewContainerRef,
    private cfr:ComponentFactoryResolver,
    private act:ActivatedRoute) { }


    //static data transfer from foute
  ngOnInit(): void {
    this.act.data.subscribe((data:Data)=>{
      console.log(data);
      

    })
  }
  async loadadmin()
  {
      this.vcr.clear();
      const {EventsComponent}= await import('../../app/events/events.component');
      this.vcr.createComponent(
        this.cfr.resolveComponentFactory(EventsComponent)
      )
  }
  loaduser()
  {

  }

}
