import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../provider/history.service";
import {History} from "../history";
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  selected: History=new History();

  history:History;

  listaHistory:Array<History> = new Array();

  constructor(  public historyService:HistoryService) {

    this.findCodByUserId();
  }

  ngOnInit() {
  }

  findByCod(cod: string) {
    this.historyService.findByCod(cod).subscribe(data => {
      this.listaHistory = data;
    }, err => {
      console.error(err);
    })
  }


  saveOrUpdateHistory(history) {
    this.historyService.saveOrUpdateHistory(history).subscribe(data => {
      console.log(data);
      history = new History;
    }, err => {
      console.error(err);
    })
  }

  findById(id) {
    this.historyService.findById(id).subscribe(data => {
      this.history = data;
    }, err => {
      console.error(err);
    })
  }

  findCodByUserId() {
      this.historyService.findCodByUser_id().subscribe(data => {
        this.listaHistory = data;
        console.log(data)

      }, err => {
        console.error(err);
      })
    }

  selectedItem(h) {
    this.selected = h;
  }



}
