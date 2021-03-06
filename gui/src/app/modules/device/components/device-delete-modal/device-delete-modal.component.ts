// Copyright 2019, Pure Storage Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'device-delete-modal',
  templateUrl: './device-delete-modal.component.html',
  styleUrls: ['./device-delete-modal.component.scss']
})
export class DeviceDeleteModalComponent implements OnInit {

  @Input() deviceName: string;
  nameInput = new FormControl('');

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.activeModal.dismiss();
  }

  onSubmitClick(): void {
    this.activeModal.close();
  }
}
