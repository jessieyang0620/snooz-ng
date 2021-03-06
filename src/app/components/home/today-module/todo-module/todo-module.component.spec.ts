import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoModuleComponent} from './todo-module.component';

describe('TodoModuleComponent', () => {
    let component: TodoModuleComponent;
    let fixture: ComponentFixture<TodoModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TodoModuleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
