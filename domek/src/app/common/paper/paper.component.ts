import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.css'],
})
export class PaperComponent implements OnInit {
  @Input() title: string = 'Przykładowa treść';
  @Input() content: string = 'I. Omnia quae sunt vel in se vel in alio sunt.\n' +
    'II. Id quod per aliud non potest concipi, per se concipi debet.\n' +
    'III. Ex data causa determinata necessario sequitur effectus, et contra si nulla detur determinata causa, impossibile est ut effectus sequatur.\n';
  ngOnInit() {
  }
}
