import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostPageComponent } from './post.component';

import { PostPageRoutingModule } from './post-page-routing.module';

@NgModule({
  declarations: [PostPageComponent],
  imports: [CommonModule, RouterModule, PostPageRoutingModule],
  exports: [PostPageComponent],
})
export class PostPageModule {}
