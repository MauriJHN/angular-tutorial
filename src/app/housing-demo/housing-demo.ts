import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingService } from '../housing';
import { HousingLocationInfo } from '../housinglocation';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-housing-demo',
  imports: [HousingLocation],
  template: `
    <section class="housing-demo">
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation" />
      }
    </section>
  `,
  styles: ``,
})
export class HousingDemo {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocationInfo[] = [];

  constructor(private ref: ChangeDetectorRef) {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.ref.markForCheck();
      })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
