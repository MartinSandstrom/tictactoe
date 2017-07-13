// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
tictactoe.core.new_board = (function tictactoe$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,"B"))));
});
tictactoe.core.board_size = (5);
if(typeof tictactoe.core.app_state !== 'undefined'){
} else {
tictactoe.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"TicTacToe!",new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.core.new_board.call(null,tictactoe.core.board_size),new cljs.core.Keyword(null,"board-size","board-size",140730505),(5)], null));
}
tictactoe.core.computer_move = (function tictactoe$core$computer_move(board){
cljs.core.prn.call(null,board);

var remaining_spots = (function (){var iter__26760__auto__ = (function tictactoe$core$computer_move_$_iter__28784(s__28785){
return (new cljs.core.LazySeq(null,(function (){
var s__28785__$1 = s__28785;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28785__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26756__auto__ = ((function (s__28785__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$core$computer_move_$_iter__28784_$_iter__28786(s__28787){
return (new cljs.core.LazySeq(null,((function (s__28785__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__28787__$1 = s__28787;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28787__$1);
if(temp__4657__auto____$1){
var s__28787__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28787__$2)){
var c__26758__auto__ = cljs.core.chunk_first.call(null,s__28787__$2);
var size__26759__auto__ = cljs.core.count.call(null,c__26758__auto__);
var b__28789 = cljs.core.chunk_buffer.call(null,size__26759__auto__);
if((function (){var i__28788 = (0);
while(true){
if((i__28788 < size__26759__auto__)){
var j = cljs.core._nth.call(null,c__26758__auto__,i__28788);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"B")){
cljs.core.chunk_append.call(null,b__28789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__28790 = (i__28788 + (1));
i__28788 = G__28790;
continue;
} else {
var G__28791 = (i__28788 + (1));
i__28788 = G__28791;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),tictactoe$core$computer_move_$_iter__28784_$_iter__28786.call(null,cljs.core.chunk_rest.call(null,s__28787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),null);
}
} else {
var j = cljs.core.first.call(null,s__28787__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),tictactoe$core$computer_move_$_iter__28784_$_iter__28786.call(null,cljs.core.rest.call(null,s__28787__$2)));
} else {
var G__28792 = cljs.core.rest.call(null,s__28787__$2);
s__28787__$1 = G__28792;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__28785__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__28785__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__26757__auto__ = cljs.core.seq.call(null,iterys__26756__auto__.call(null,cljs.core.range.call(null,tictactoe.core.board_size)));
if(fs__26757__auto__){
return cljs.core.concat.call(null,fs__26757__auto__,tictactoe$core$computer_move_$_iter__28784.call(null,cljs.core.rest.call(null,s__28785__$1)));
} else {
var G__28793 = cljs.core.rest.call(null,s__28785__$1);
s__28785__$1 = G__28793;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26760__auto__.call(null,cljs.core.range.call(null,tictactoe.core.board_size));
})();
var move = ((cljs.core.seq.call(null,remaining_spots))?cljs.core.rand_nth.call(null,remaining_spots):null);
if(cljs.core.truth_(move)){
return cljs.core.assoc_in.call(null,board,move,"C");
} else {
return board;
}
});
tictactoe.core.straight = (function tictactoe$core$straight(owner,board,p__28794,p__28795,n){
var vec__28806 = p__28794;
var x = cljs.core.nth.call(null,vec__28806,(0),null);
var y = cljs.core.nth.call(null,vec__28806,(1),null);
var vec__28809 = p__28795;
var dx = cljs.core.nth.call(null,vec__28809,(0),null);
var dy = cljs.core.nth.call(null,vec__28809,(1),null);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,(function (){var iter__26760__auto__ = ((function (vec__28806,x,y,vec__28809,dx,dy){
return (function tictactoe$core$straight_$_iter__28812(s__28813){
return (new cljs.core.LazySeq(null,((function (vec__28806,x,y,vec__28809,dx,dy){
return (function (){
var s__28813__$1 = s__28813;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28813__$1);
if(temp__4657__auto__){
var s__28813__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28813__$2)){
var c__26758__auto__ = cljs.core.chunk_first.call(null,s__28813__$2);
var size__26759__auto__ = cljs.core.count.call(null,c__26758__auto__);
var b__28815 = cljs.core.chunk_buffer.call(null,size__26759__auto__);
if((function (){var i__28814 = (0);
while(true){
if((i__28814 < size__26759__auto__)){
var i = cljs.core._nth.call(null,c__26758__auto__,i__28814);
cljs.core.chunk_append.call(null,b__28815,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner));

var G__28816 = (i__28814 + (1));
i__28814 = G__28816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28815),tictactoe$core$straight_$_iter__28812.call(null,cljs.core.chunk_rest.call(null,s__28813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28815),null);
}
} else {
var i = cljs.core.first.call(null,s__28813__$2);
return cljs.core.cons.call(null,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner),tictactoe$core$straight_$_iter__28812.call(null,cljs.core.rest.call(null,s__28813__$2)));
}
} else {
return null;
}
break;
}
});})(vec__28806,x,y,vec__28809,dx,dy))
,null,null));
});})(vec__28806,x,y,vec__28809,dx,dy))
;
return iter__26760__auto__.call(null,cljs.core.range.call(null,n));
})());
});
tictactoe.core.win_QMARK_ = (function tictactoe$core$win_QMARK_(owner,board,n){
return cljs.core.some.call(null,cljs.core.true_QMARK_,(function (){var iter__26760__auto__ = (function tictactoe$core$win_QMARK__$_iter__28825(s__28826){
return (new cljs.core.LazySeq(null,(function (){
var s__28826__$1 = s__28826;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28826__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26756__auto__ = ((function (s__28826__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$core$win_QMARK__$_iter__28825_$_iter__28827(s__28828){
return (new cljs.core.LazySeq(null,((function (s__28826__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__28828__$1 = s__28828;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28828__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var j = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__26756__auto__ = ((function (s__28828__$1,s__28826__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$core$win_QMARK__$_iter__28825_$_iter__28827_$_iter__28829(s__28830){
return (new cljs.core.LazySeq(null,((function (s__28828__$1,s__28826__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__28830__$1 = s__28830;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__28830__$1);
if(temp__4657__auto____$2){
var s__28830__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28830__$2)){
var c__26758__auto__ = cljs.core.chunk_first.call(null,s__28830__$2);
var size__26759__auto__ = cljs.core.count.call(null,c__26758__auto__);
var b__28832 = cljs.core.chunk_buffer.call(null,size__26759__auto__);
if((function (){var i__28831 = (0);
while(true){
if((i__28831 < size__26759__auto__)){
var dir = cljs.core._nth.call(null,c__26758__auto__,i__28831);
cljs.core.chunk_append.call(null,b__28832,tictactoe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n));

var G__28833 = (i__28831 + (1));
i__28831 = G__28833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),tictactoe$core$win_QMARK__$_iter__28825_$_iter__28827_$_iter__28829.call(null,cljs.core.chunk_rest.call(null,s__28830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28832),null);
}
} else {
var dir = cljs.core.first.call(null,s__28830__$2);
return cljs.core.cons.call(null,tictactoe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n),tictactoe$core$win_QMARK__$_iter__28825_$_iter__28827_$_iter__28829.call(null,cljs.core.rest.call(null,s__28830__$2)));
}
} else {
return null;
}
break;
}
});})(s__28828__$1,s__28826__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__28828__$1,s__28826__$1,j,xs__5205__auto____$1,temp__4657__auto____$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__26757__auto__ = cljs.core.seq.call(null,iterys__26756__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null)));
if(fs__26757__auto__){
return cljs.core.concat.call(null,fs__26757__auto__,tictactoe$core$win_QMARK__$_iter__28825_$_iter__28827.call(null,cljs.core.rest.call(null,s__28828__$1)));
} else {
var G__28834 = cljs.core.rest.call(null,s__28828__$1);
s__28828__$1 = G__28834;
continue;
}
} else {
return null;
}
break;
}
});})(s__28826__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__28826__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__26757__auto__ = cljs.core.seq.call(null,iterys__26756__auto__.call(null,cljs.core.range.call(null,tictactoe.core.board_size)));
if(fs__26757__auto__){
return cljs.core.concat.call(null,fs__26757__auto__,tictactoe$core$win_QMARK__$_iter__28825.call(null,cljs.core.rest.call(null,s__28826__$1)));
} else {
var G__28835 = cljs.core.rest.call(null,s__28826__$1);
s__28826__$1 = G__28835;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26760__auto__.call(null,cljs.core.range.call(null,tictactoe.core.board_size));
})());
});
tictactoe.core.check_for_winner = (function tictactoe$core$check_for_winner(player){
if(cljs.core.truth_(tictactoe.core.win_QMARK_.call(null,player,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state)),tictactoe.core.board_size))){
return alert(((cljs.core._EQ_.call(null,player,"P"))?"You are the winner":"You lose"));
} else {
return cljs.core.List.EMPTY;
}
});
tictactoe.core.blank = (function tictactoe$core$blank(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tictactoe$core$blank_$_rect_click(e){
cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null),"P");

tictactoe.core.check_for_winner.call(null,"P");

cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),tictactoe.core.computer_move);

return tictactoe.core.check_for_winner.call(null,"C");
})], null)], null);
});
tictactoe.core.circle = (function tictactoe$core$circle(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),0.45,new cljs.core.Keyword(null,"cx","cx",1272694324),(0.5 + i),new cljs.core.Keyword(null,"cy","cy",755331060),(0.5 + j),new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null);
});
tictactoe.core.cross = (function tictactoe$core$cross(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.35,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((0.5 + i)),cljs.core.str(","),cljs.core.str((0.5 + j)),cljs.core.str(") "),cljs.core.str("scale(0.35)")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(-1)], null)], null)], null);
});
tictactoe.core.change_board = (function tictactoe$core$change_board(){
var val = reagent.core.atom.call(null,"");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"New board size",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__28836_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__28836_SHARP_.target.value);
});})(val))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function (){
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.core.new_board.call(null,(cljs.core.deref.call(null,val) | (0)))).call(null,cljs.core.prn.call(null,cljs.core.deref.call(null,val)));
});})(val))
], null),"Update board"], null)], null);
});
;})(val))
});
tictactoe.core.tictactoe = (function tictactoe$core$tictactoe(){
var val = reagent.core.atom.call(null,"test");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),[cljs.core.str("0 0 "),cljs.core.str(tictactoe.core.board_size),cljs.core.str(" "),cljs.core.str(tictactoe.core.board_size)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null),cljs.core.doall.call(null,(function (){var iter__26760__auto__ = ((function (val){
return (function tictactoe$core$tictactoe_$_iter__28851(s__28852){
return (new cljs.core.LazySeq(null,((function (val){
return (function (){
var s__28852__$1 = s__28852;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28852__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26756__auto__ = ((function (s__28852__$1,i,xs__5205__auto__,temp__4657__auto__,val){
return (function tictactoe$core$tictactoe_$_iter__28851_$_iter__28853(s__28854){
return (new cljs.core.LazySeq(null,((function (s__28852__$1,i,xs__5205__auto__,temp__4657__auto__,val){
return (function (){
var s__28854__$1 = s__28854;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28854__$1);
if(temp__4657__auto____$1){
var s__28854__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28854__$2)){
var c__26758__auto__ = cljs.core.chunk_first.call(null,s__28854__$2);
var size__26759__auto__ = cljs.core.count.call(null,c__26758__auto__);
var b__28856 = cljs.core.chunk_buffer.call(null,size__26759__auto__);
if((function (){var i__28855 = (0);
while(true){
if((i__28855 < size__26759__auto__)){
var j = cljs.core._nth.call(null,c__26758__auto__,i__28855);
cljs.core.chunk_append.call(null,b__28856,(function (){var G__28863 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null));
switch (G__28863) {
case "B":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.cross,i,j], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null)))].join('')));

}
})());

var G__28866 = (i__28855 + (1));
i__28855 = G__28866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28856),tictactoe$core$tictactoe_$_iter__28851_$_iter__28853.call(null,cljs.core.chunk_rest.call(null,s__28854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28856),null);
}
} else {
var j = cljs.core.first.call(null,s__28854__$2);
return cljs.core.cons.call(null,(function (){var G__28864 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null));
switch (G__28864) {
case "B":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.cross,i,j], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null)))].join('')));

}
})(),tictactoe$core$tictactoe_$_iter__28851_$_iter__28853.call(null,cljs.core.rest.call(null,s__28854__$2)));
}
} else {
return null;
}
break;
}
});})(s__28852__$1,i,xs__5205__auto__,temp__4657__auto__,val))
,null,null));
});})(s__28852__$1,i,xs__5205__auto__,temp__4657__auto__,val))
;
var fs__26757__auto__ = cljs.core.seq.call(null,iterys__26756__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state))))));
if(fs__26757__auto__){
return cljs.core.concat.call(null,fs__26757__auto__,tictactoe$core$tictactoe_$_iter__28851.call(null,cljs.core.rest.call(null,s__28852__$1)));
} else {
var G__28868 = cljs.core.rest.call(null,s__28852__$1);
s__28852__$1 = G__28868;
continue;
}
} else {
return null;
}
break;
}
});})(val))
,null,null));
});})(val))
;
return iter__26760__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state)))));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (val){
return (function tictactoe$core$tictactoe_$_new_game_click(e){
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.core.new_board.call(null,tictactoe.core.board_size));
});})(val))
], null),"New game"], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.tictactoe], null),document.getElementById("app"));
tictactoe.core.on_js_reload = (function tictactoe$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),"Hellow world from text");
});

//# sourceMappingURL=core.js.map?rel=1499951113806