/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Note } from '../../models/Note';

// Making Sure EventSource Type is available to avoid compilation issues.
declare var EventSource: any;

/**
 * Api services for the `Note` model.
 */
@Injectable()
export class NoteApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public create(data: any = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Note) => new Note(instance));
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public patchOrCreate(data: any = undefined, options: any = undefined) {
    let method: string = "PATCH";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public replaceOrCreate(data: any = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/replaceOrCreate";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public upsertWithWhere(where: any = undefined, data: any = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/upsertWithWhere";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Note) => new Note(instance));
  }

  /**
   * Check whether a model instance exists in the data source.
   *
   * @param any id Model id
   *
   * @param object options 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `exists` – `{boolean}` - 
   */
  public exists(id: any, options: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/:id/exists";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @param object filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   *
   * @param object options 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public findById(id: any, filter: LoopBackFilter = undefined, options: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Note) => new Note(instance));
  }

  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @param any id Model id
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public replaceById(id: any, data: any = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/:id/replace";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   *
   * @param object options 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public find(filter: LoopBackFilter = undefined, options: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<Note>) =>
        instances.map((instance: Note) => new Note(instance))
    );
  }

  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   *
   * @param object options 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public findOne(filter: LoopBackFilter = undefined, options: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/findOne";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Note) => new Note(instance));
  }

  /**
   * Update instances of the model matched by {{where}} from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Information related to the outcome of the operation
   */
  public updateAll(where: any = undefined, data: any = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/update";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Delete a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @param object options 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public deleteById(id: any, options: any = undefined) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Count instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object options 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public count(where: any = undefined, options: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/count";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param any id Note id
   *
   * @param object data Request data.
   *
   *  - `options` – `{object}` - 
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public patchAttributes(id: any, options: any = undefined, data: any = undefined) {
    let method: string = "PATCH";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      options: options,
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a change stream.
   *
   * @param object data Request data.
   *
   *  - `options` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `changes` – `{ReadableStream}` - 
   */
  public createChangeStream() {
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes/change-stream";
    let subject = new Subject();
    if (typeof EventSource !== 'undefined') {
      let emit   = (msg: any) => subject.next(JSON.parse(msg.data));
      var source = new EventSource(url);
      source.addEventListener('data', emit);
      source.onerror = emit;
    } else {
      console.warn('SDK Builder: EventSource is not supported'); 
    }
    return subject.asObservable();
  }
  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   *  - `options` – `{object}` - 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Note` object.)
   * </em>
   */
  public createMany(data: Array<any> = undefined, options: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/Notes";
    let routeParams: any = {};
    let postBody: any = {
      data: data,
      options: options
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<Note>) =>
        instances.map((instance: Note) => new Note(instance))
    );
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Note`.
   */
  public getModelName() {
    return "Note";
  }
}
