// Copyright (c) KaivnD
// Distributed under the terms of the Modified BSD License.
import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
  WidgetModel,
  WidgetView,
} from '@jupyter-widgets/base';
import { MODULE_NAME, MODULE_VERSION } from './version';
// Import the CSS
import '../css/widget.css';
// import { DisplayPortal } from './components/DisplayPortal';
import threedp from '3dp';

export class DisplayPortalModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: DisplayPortalModel.model_name,
      _model_module: DisplayPortalModel.model_module,
      _model_module_version: DisplayPortalModel.model_module_version,
      _view_name: DisplayPortalModel.view_name,
      _view_module: DisplayPortalModel.view_module,
      _view_module_version: DisplayPortalModel.view_module_version,
      meshbuffers: [],
      wirebuffers: [],
      options: {},
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'DisplayPortalModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'DisplayPortalView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}
export class DisplayPortalView extends DOMWidgetView {
  initialize(parameters: WidgetView.InitializeParameters<WidgetModel>): void {
    const backbone = this;
    const model = this.model;

    const container = document.createElement('div');

    container.style.height = `${model.attributes._height}px`;
    container.style.width = '100%';

    container.oncontextmenu = (e) => e.stopPropagation();

    const meshbuffers = this.model.get('meshbuffers');
    const wiresbuffer = this.model.get('wirebuffers');
    const options = this.model.get('options');

    threedp(container, meshbuffers, wiresbuffer, options);

    backbone.el.append(container);
  }
  // render() {
  //   this.el.classList.add('custom-widget');

  //   this.value_changed();
  //   this.model.on('change:value', this.value_changed, this);
  // }

  // value_changed() {
  //   this.el.textContent = this.model.get('value');
  // }
}
