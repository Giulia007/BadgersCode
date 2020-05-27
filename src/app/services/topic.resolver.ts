import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Topic } from "../model/topic";
import { Observable, of } from 'rxjs';
import { TopicsService } from './topics.service';

@Injectable()
export class TopicResolver implements Resolve<Topic> {

    constructor(private topicsService: TopicsService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<Topic> {
        const topicUrl = route.paramMap.get('topicUrl');
        return this.topicsService.findTopicByUrl(topicUrl);
    }

}
