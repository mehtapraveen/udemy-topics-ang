import { Component, EventEmitter, Output } from '@angular/core'
import { DataStorageService } from '../shared/data-storage-service'
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [],
})

export class HeaderComponent {
    @Output() features = new EventEmitter<string>()

    constructor(private dataser: DataStorageService) { }
    onselect(feature: string) {
        this.features.emit(feature)
    }

    onsavedata() {
        this.dataser.storeRecipes()

    }
    onfetchdata() {
        this.dataser.fetchRecipes().subscribe()
    }
}