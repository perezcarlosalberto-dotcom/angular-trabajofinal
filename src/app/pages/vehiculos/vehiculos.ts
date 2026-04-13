import { ChangeDetectionStrategy, Component } from '@angular/core';
import VehiculoList from "../../components/vehiculos/vehiculos-list/vehiculos-list";

@Component({
  selector: 'app-vehiculos',
  imports: [VehiculoList],
  templateUrl: './vehiculos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Vehiculo { }
