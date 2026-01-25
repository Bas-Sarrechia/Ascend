import { Injectable, signal } from '@angular/core';

export type EquipmentType = 'machine' | 'free-weights';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private readonly storageKey = 'ascend-equipment-type';
  readonly equipmentType = signal<EquipmentType>(this.loadEquipmentType());

  constructor() {}

  private loadEquipmentType(): EquipmentType {
    const stored = localStorage.getItem(this.storageKey);
    return (stored as EquipmentType) || 'machine';
  }

  setEquipmentType(type: EquipmentType): void {
    this.equipmentType.set(type);
    localStorage.setItem(this.storageKey, type);
  }
}

