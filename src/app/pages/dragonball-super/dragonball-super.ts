import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterList } from "../../components/dragonball-super/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball-super/character-add/character-add";

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuper { }
