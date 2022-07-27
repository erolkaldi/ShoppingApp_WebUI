import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslocoRootModule,
    AuthModule
  ]
})
export class ToolsModule {
  constructor(
    @Optional() @SkipSelf() parentModule?: ToolsModule
)
{
    // Do not allow multiple injections
    if ( parentModule )
    {
        throw new Error('ToolsModule has already been loaded. Import this module in the AppModule only.');
    }
}
 }
