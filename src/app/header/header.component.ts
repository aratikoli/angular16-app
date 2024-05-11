import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataStorageService } from '../data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  private userSub:Subscription;
  isAuthenticated=false;
  image='assets/purple.jpg';

  constructor(private dataStorageService:DataStorageService, private authService:AuthService )
  {

  }
  ngOnInit(): void {
    
      this.userSub= this.authService.user.subscribe(user=>{
         this.isAuthenticated=!!user;
       });
     
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    onFetchData()
    {
      this.dataStorageService.fetchData().subscribe((data)=>
      {//console.log(data)

      });
    }
    onSaveData()
    {
      this.dataStorageService.saveData();
    }
    ngOnDestroy(): void {
      this.userSub.unsubscribe;
    }
}
