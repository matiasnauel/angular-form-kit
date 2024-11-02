import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-name-form',
  standalone: true,
  imports: [],
  templateUrl: './name-form.component.html',
  styleUrl: './name-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameFormComponent {

}
