(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{376:function(e,t,n){"use strict";n.r(t);n(40);var r=n(5),o=n(285),c=n(305),l=n.n(c),d=n(315),f=n(289),m=n(316),w=n(318),h=n(317),_=n(319),v=n(286),T=n(320),D=n(288),x=n.n(D),S=n(321);function P(e){return e.created_at=new Date(e.created_at),e.reply_count=1,e.quote_count=1,e.interaction_count=e.quote_count+e.retweet_count+e.reply_count+e.favorite_count,e}Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this},Date.prototype.addMinutes=function(e){return this.setTime(this.getTime()+60*e*1e3),this},t.default={components:{"sentiment-vis":d.a,correlation:f.a,"bubble-vis":m.a,"volume-vis":w.a,"final-vis":h.a,"twitter-tooltip":_.a,"animate-number":v.a,"progress-tracker":T.a,tooltip:S.a},data:function(){return{allTweets:[],fixedStart:"2020-03-24T12:00:00.000Z",tooltipVisible:!1,finalTooltipVisible:!1,tooltipIndex:0,selectedTweet:"6",aggregateTweets:[],hourAggregateTweets:[],aggregateCandles:[],hourAggregateCandles:[],sentimentListIndex:0,timePeriod:"minute",startPeriod:0,endPeriod:60,followers_count:0,retweet_count:0,reply_count:0,favorite_count:0,sentiment_min:0,verified:!1,grid:!0,stacked_select:"tweets",bars:!1,fixedHeight:!1,curve:!0,offset:0,default:{timePeriod:"minute",startPeriod:0,endPeriod:60,followers_count:0,retweet_count:0,reply_count:0,favorite_count:0,sentiment_min:0,verified:!1,grid:!0,stacked_select:"tweets",bars:!1,fixedHeight:!1,curve:!0,offset:0},filterStates:{timePeriod:!1,startPeriod:!1,endPeriod:!1,followers_count:!1,retweet_count:!1,reply_count:!1,favorite_count:!1,sentiment_min:!1,verified:!1,grid:!1,totalTweets:!0,filteredTweets:!1,minutes:!0,stacked_select:!1,bars:!1,fixedHeight:!1,curve:!1,offset:!1,sentiment:!1},stage:0}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.debounceGetData=x.a.debounce(e.updateData,200),e.updateData(!0),n=e,l.a.get("api/tweets/",{params:{startDate:e.startDate,endDate:new Date(e.fixedStart).addMinutes(e.startPeriod+60)}}).then((function(e){e.data.sort((function(a,b){return new Date(a.timestamp)-new Date(b.timestamp)})).forEach((function(element){n.allTweets.push(P(element.content))}))})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this,t=document.getElementById("volumecontainer").offsetHeight,n=document.getElementById("bubblecontainer").offsetHeight,r=document.getElementById("sentimentcontainer").offsetHeight,o=this.$scrollmagic.scene({triggerElement:"#volumecontainer",duration:t}).on("enter",(function(t){"FORWARD"==t.scrollDirection?e.updateStage(0):e.updateStage(3)}));this.$scrollmagic.addScene(o);var c=this.$scrollmagic.scene({triggerElement:"#bubblecontainer",duration:n}).on("enter",(function(t){"FORWARD"==t.scrollDirection?e.updateStage(4):e.updateStage(8)}));this.$scrollmagic.addScene(c);var l=this.$scrollmagic.scene({triggerElement:"#sentimentcontainer",duration:r}).on("enter",(function(t){"FORWARD"==t.scrollDirection?e.updateStage(9):e.updateStage(14)}));this.$scrollmagic.addScene(l);var d=this.$scrollmagic.scene({triggerElement:"#finalcontainer"}).on("enter",(function(){e.updateStage(15)}));this.$scrollmagic.addScene(d),this.updateStage(0)},watch:{followers_count:function(){return this.debounceGetData()},retweet_count:function(){return this.debounceGetData()},favorite_count:function(){return this.debounceGetData()},sentiment_min:function(){return this.debounceGetData()},verified:function(){return this.debounceGetData()},timePeriod:function(){return this.debounceGetData()},startDate:function(){return this.debounceGetData()},endDate:function(){return this.debounceGetData()}},computed:{tweets:function(){var e=this;return this.allTweets.filter((function(t){return t.created_at>=e.startDate&&t.created_at<=e.endDate}))},startDate:function(){return"minute"==this.timePeriod?new Date(this.fixedStart).addMinutes(this.startPeriod):new Date(this.fixedStart).addHours(this.startPeriod)},endDate:function(){return"minute"==this.timePeriod?new Date(this.fixedStart).addMinutes(this.startPeriod+this.endPeriod):new Date(this.fixedStart).addHours(this.startPeriod+this.endPeriod)},tweetTotals:function(){var e={likes:{},followers:{},retweets:{}};return e.likes.total=o.sum(this.aggregateTweets,(function(e){return e.likeSum})),e.likes.average=o.mean(this.aggregateTweets,(function(e){return e.avgLikes})),e.likes.min=o.min(this.aggregateTweets,(function(e){return e.minLikes})),e.likes.max=o.max(this.aggregateTweets,(function(e){return e.maxLikes})),e.followers.total=o.sum(this.aggregateTweets,(function(e){return e.followerSum})),e.followers.average=o.mean(this.aggregateTweets,(function(e){return e.avgFollowers})),e.followers.min=o.min(this.aggregateTweets,(function(e){return e.minFollowers})),e.followers.max=o.max(this.aggregateTweets,(function(e){return e.maxFollowers})),e.retweets.total=o.sum(this.aggregateTweets,(function(e){return e.retweetSum})),e.retweets.average=o.mean(this.aggregateTweets,(function(e){return e.avgRetweets})),e.retweets.min=o.min(this.aggregateTweets,(function(e){return e.minRetweets})),e.retweets.max=o.max(this.aggregateTweets,(function(e){return e.maxRetweets})),e},filteredTweets:function(){var e=this;return this.allTweets.filter((function(t){return t.user.followers_count>=e.followers_count&&Math.abs(t.sentiment)>=e.sentiment_min&&t.retweet_count>=e.retweet_count&&t.reply_count>=e.reply_count&&t.favorite_count>=e.favorite_count&&(!e.verified||e.verified==t.user.verified)}))},filteredTweetCount:function(){return o.sum(this.aggregateTweets,(function(e){return e.Count}))}},methods:{filterTime:function(e){return"minute"==this.timePeriod?(e.setSeconds(0),e.setMilliseconds(0)):(e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0)),e},processMouseover:function(e){1==e.visible?(this.tooltipVisible=!0,this.selectedTweet=e.id):this.tooltipVisible=!1;o.select("#tooltip").style("left",event.clientX+"px").style("top",event.clientY+"px")},processFinalTooltip:function(e){1==e.visible?(this.finalTooltipVisible=!0,this.tooltipIndex=e.index):this.finalTooltipVisible=!1;o.select("#final-tooltip").style("left",event.clientX+"px").style("top",event.clientY+"px")},updateData:function(e){if(this.stage>5||e){console.log("getting data");var t=this;l.a.get("api",{params:{startDate:this.startDate,endDate:this.endDate,retweet_count:this.retweet_count,favorite_count:this.favorite_count,followers_count:this.followers_count,verified:this.verified,sentiment:this.sentiment_min,period:this.timePeriod}}).then((function(n){var r=n.data.tweets.sort((function(a,b){return new Date(a.date)-new Date(b.date)})),o=n.data.candles.sort((function(a,b){return new Date(a.date)-new Date(b.date)}));t.aggregateCandles=o;var c=[],l=0;if(r.length>0)for(var i in o){var d={_id:{},Count:0,avgRetweets:0,avgFollowers:0,avgLikes:0,avgSentiment:0,maxRetweets:0,maxFollowers:0,maxLikes:0,maxSentiment:0,minRetweets:0,minFollowers:0,minLikes:0,minSentiment:0,likeSum:0,followerSum:0,retweetSum:0,id:[],date:"",likeSentiment:0,followerSentiment:0,retweetSentiment:0};i<r.length&&o[i].date==r[l].date?(c.push(r[l]),l+=1):(d.date=o[i].date,c.push(d))}t.aggregateTweets=c,e&&(t.hourAggregateTweets=r,t.hourAggregateCandles=o)})).catch((function(e){console.log(e)}))}},updateStage:function(e,t){var n=this;this.stage=parseInt(e),t=t||0;var r={0:{timePeriod:"minute",startPeriod:0,endPeriod:60,followers_count:0,retweet_count:0,reply_count:0,favorite_count:0,sentiment_min:0,verified:!1,grid:!0,stacked_select:"tweets",bars:!1,fixedHeight:!1,curve:!0,offset:0},1:{bars:!0},2:{stacked_select:"followers"},3:{stacked_select:"retweets"},5:{followers_count:100},6:{retweet_count:10,favorite_count:10},8:{grid:!1},9:{followers_count:0,retweet_count:0,favorite_count:0,sentiment_min:0,verified:!1},10:{timePeriod:"hour",endPeriod:125},11:{curve:!1},12:{fixedHeight:!0},13:{offset:-2},14:{sentimentListIndex:1}},o={0:{timePeriod:!1,startPeriod:!1,endPeriod:!1,followers_count:!1,retweet_count:!1,reply_count:!1,favorite_count:!1,sentiment_min:!1,verified:!1,grid:!1,totalTweets:!0,filteredTweets:!1,minutes:!0,stacked_select:!1,bars:!1,fixedHeight:!1,curve:!1,offset:!1},1:{bars:!0},2:{minutes:!0,stacked_select:!0},3:{totalTweets:!0},4:{totalTweets:!0,minutes:!0,stacked_select:!1,bars:!1},5:{followers_count:!0,totalTweets:!1,filteredTweets:!0},6:{retweet_count:!0,reply_count:!0,favorite_count:!0},7:{verified:!0},8:{sentiment_min:!0,grid:!0},9:{followers_count:!0,retweet_count:!0,reply_count:!0,favorite_count:!0,sentiment_min:!0,verified:!0,grid:!1,filteredTweets:!0,minutes:!0},10:{timePeriod:!0,startPeriod:!0,endPeriod:!0},11:{curve:!0},12:{fixedHeight:!0},13:{offset:!0},14:{sentiment:!0}};if(o.hasOwnProperty(e))for(var c in o[e])this.filterStates[c]!=o[e][c]&&(this.filterStates[c]=o[e][c]);if(r.hasOwnProperty(e)){var l=function(o){n[o]!=r[e][o]&&setTimeout((function(){n[o]=r[e][o]}),t)};for(var d in r[e])l(d)}}}}}}]);