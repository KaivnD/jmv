// Copyright (c) KaivnD
// Distributed under the terms of the Modified BSD License.
import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
  WidgetModel,
  WidgetView,
} from '@jupyter-widgets/base';
import * as THREE from 'three';
import { MODULE_NAME, MODULE_VERSION } from './version';
console.log(THREE);
// Import the CSS
import '../css/widget.css';
// import { DisplayPortal } from './components/DisplayPortal';

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
      value: 'Hello World',
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

const wiresbuffer: WireBuffer[] = [
  {
    data: [
      8.704402, 23.169317, 0, 12.404402, 23.169317, 0, 12.404402, 21.669317, 0,
      17.004402, 21.669317, 0, 17.004402, 22.869317, 0, 19.004402, 22.869317, 0,
      19.004402, 24.919317, 0, 21.804402, 24.919317, 0, 21.804402, 22.469317, 0,
      24.604402, 22.469317, 0, 24.604402, 17.069317, 0, 24.004402, 17.069317, 0,
      24.004402, 13.969317, 0, 29.004402, 13.969317, 0, 29.004402, 17.069317, 0,
      28.404402, 17.069317, 0, 28.404402, 22.469317, 0, 31.204402, 22.469317, 0,
      31.204402, 24.919317, 0, 34.004402, 24.919317, 0, 34.004402, 22.869317, 0,
      36.004402, 22.869317, 0, 36.004402, 21.669317, 0, 40.604402, 21.669317, 0,
      40.604402, 23.169317, 0, 44.304402, 23.169317, 0, 44.304402, 19.869317, 0,
      45.004402, 19.869317, 0, 45.004402, 18.469317, 0, 45.004402, 18.269317, 0,
      45.004402, 16.669317, 0, 43.804402, 16.669317, 0, 43.804402, 11.119317, 0,
      43.804402, 10.919317, 0, 43.804402, 10.253817, 0, 40.004402, 10.269317, 0,
      40.004402, 11.769317, 0, 36.004402, 11.769317, 0, 36.004402, 9.469317, 0,
      33.504402, 9.469317, 0, 33.504402, 5.533817, 0, 30.004402, 5.533817, 0,
      30.004402, 6.369317, 0, 23.004402, 6.369317, 0, 23.004402, 5.533817, 0,
      19.504402, 5.529817, 0, 19.504402, 9.469317, 0, 17.004402, 9.469317, 0,
      17.004402, 11.769317, 0, 13.004402, 11.769317, 0, 13.004402, 10.269317, 0,
      9.204402, 10.269317, 0, 9.204402, 10.369317, 0, 9.204402, 11.119317, 0,
      9.204402, 16.669317, 0, 8.004402, 16.669317, 0, 8.004402, 18.269317, 0,
      8.004402, 18.469317, 0, 8.004402, 19.869317, 0, 8.704402, 19.869317, 0,
      8.704402, 23.169317, 0,
    ],
  },
];

export class DisplayPortalView extends DOMWidgetView {
  initialize(parameters: WidgetView.InitializeParameters<WidgetModel>): void {
    const backbone = this;
    const model = this.model;

    const container = document.createElement('div');

    container.style.height = `${model.attributes._height}px`;
    container.style.width = '100%';

    // const buffers: GeometryBuffer[] = [];
    // const option: DisplayPortalOption = {};

    const wires: Wire[] = [];

    for (let { data, options } of wiresbuffer) {
      const arr: Vec3Array = [];
      for (let i = 0; i < data.length; i += 3) {
        const x = data[i];
        const y = data[i + 1];
        const z = data[i + 2];

        arr.push([x, y, z]);
      }
      wires.push({ data: arr, options });
    }

    // console.log(buffers, wires);

    // const app = e(StrictMode, null, e('div', null, 'asdfhskja'));
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
