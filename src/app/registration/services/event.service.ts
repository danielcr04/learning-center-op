import { Injectable } from '@angular/core';
import  {BaseService} from '../../shared/services/base-api.service';
import {Event} from '../model/event.entity';
import {environment} from '../../../environments/environment';

const eventsResourceEndpointPath = environment.eventsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<Event>{
  constructor() {
    super();
    this.resourceEndpoint=eventsResourceEndpointPath;
  }
}
