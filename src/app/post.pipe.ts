import {Pipe, PipeTransform} from '@angular/core';
import {Post} from './post';

@Pipe({
    name: 'matchesPost'
})

export class MatchesPostPipe implements PipeTransform {
    postOut:Post[];

    transform(posts: Post[], id: number): Post[] {
           this.postOut = [];
            posts.forEach(post=>{
                if (post.userId===id) {
                    this.postOut.push(post);
                }
            } )
            return id===-1 ? posts:this.postOut;
        }
    }