// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35769){
var map__35794 = p__35769;
var map__35794__$1 = ((((!((map__35794 == null)))?((((map__35794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794):map__35794);
var m = map__35794__$1;
var n = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35794__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35796_35818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35797_35819 = null;
var count__35798_35820 = (0);
var i__35799_35821 = (0);
while(true){
if((i__35799_35821 < count__35798_35820)){
var f_35822 = cljs.core._nth.call(null,chunk__35797_35819,i__35799_35821);
cljs.core.println.call(null,"  ",f_35822);

var G__35823 = seq__35796_35818;
var G__35824 = chunk__35797_35819;
var G__35825 = count__35798_35820;
var G__35826 = (i__35799_35821 + (1));
seq__35796_35818 = G__35823;
chunk__35797_35819 = G__35824;
count__35798_35820 = G__35825;
i__35799_35821 = G__35826;
continue;
} else {
var temp__4657__auto___35827 = cljs.core.seq.call(null,seq__35796_35818);
if(temp__4657__auto___35827){
var seq__35796_35828__$1 = temp__4657__auto___35827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35796_35828__$1)){
var c__26790__auto___35829 = cljs.core.chunk_first.call(null,seq__35796_35828__$1);
var G__35830 = cljs.core.chunk_rest.call(null,seq__35796_35828__$1);
var G__35831 = c__26790__auto___35829;
var G__35832 = cljs.core.count.call(null,c__26790__auto___35829);
var G__35833 = (0);
seq__35796_35818 = G__35830;
chunk__35797_35819 = G__35831;
count__35798_35820 = G__35832;
i__35799_35821 = G__35833;
continue;
} else {
var f_35834 = cljs.core.first.call(null,seq__35796_35828__$1);
cljs.core.println.call(null,"  ",f_35834);

var G__35835 = cljs.core.next.call(null,seq__35796_35828__$1);
var G__35836 = null;
var G__35837 = (0);
var G__35838 = (0);
seq__35796_35818 = G__35835;
chunk__35797_35819 = G__35836;
count__35798_35820 = G__35837;
i__35799_35821 = G__35838;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35839 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35839);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35839)))?cljs.core.second.call(null,arglists_35839):arglists_35839));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35800_35840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35801_35841 = null;
var count__35802_35842 = (0);
var i__35803_35843 = (0);
while(true){
if((i__35803_35843 < count__35802_35842)){
var vec__35804_35844 = cljs.core._nth.call(null,chunk__35801_35841,i__35803_35843);
var name_35845 = cljs.core.nth.call(null,vec__35804_35844,(0),null);
var map__35807_35846 = cljs.core.nth.call(null,vec__35804_35844,(1),null);
var map__35807_35847__$1 = ((((!((map__35807_35846 == null)))?((((map__35807_35846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35807_35846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807_35846):map__35807_35846);
var doc_35848 = cljs.core.get.call(null,map__35807_35847__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35849 = cljs.core.get.call(null,map__35807_35847__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35845);

cljs.core.println.call(null," ",arglists_35849);

if(cljs.core.truth_(doc_35848)){
cljs.core.println.call(null," ",doc_35848);
} else {
}

var G__35850 = seq__35800_35840;
var G__35851 = chunk__35801_35841;
var G__35852 = count__35802_35842;
var G__35853 = (i__35803_35843 + (1));
seq__35800_35840 = G__35850;
chunk__35801_35841 = G__35851;
count__35802_35842 = G__35852;
i__35803_35843 = G__35853;
continue;
} else {
var temp__4657__auto___35854 = cljs.core.seq.call(null,seq__35800_35840);
if(temp__4657__auto___35854){
var seq__35800_35855__$1 = temp__4657__auto___35854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35800_35855__$1)){
var c__26790__auto___35856 = cljs.core.chunk_first.call(null,seq__35800_35855__$1);
var G__35857 = cljs.core.chunk_rest.call(null,seq__35800_35855__$1);
var G__35858 = c__26790__auto___35856;
var G__35859 = cljs.core.count.call(null,c__26790__auto___35856);
var G__35860 = (0);
seq__35800_35840 = G__35857;
chunk__35801_35841 = G__35858;
count__35802_35842 = G__35859;
i__35803_35843 = G__35860;
continue;
} else {
var vec__35809_35861 = cljs.core.first.call(null,seq__35800_35855__$1);
var name_35862 = cljs.core.nth.call(null,vec__35809_35861,(0),null);
var map__35812_35863 = cljs.core.nth.call(null,vec__35809_35861,(1),null);
var map__35812_35864__$1 = ((((!((map__35812_35863 == null)))?((((map__35812_35863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35812_35863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35812_35863):map__35812_35863);
var doc_35865 = cljs.core.get.call(null,map__35812_35864__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35866 = cljs.core.get.call(null,map__35812_35864__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35862);

cljs.core.println.call(null," ",arglists_35866);

if(cljs.core.truth_(doc_35865)){
cljs.core.println.call(null," ",doc_35865);
} else {
}

var G__35867 = cljs.core.next.call(null,seq__35800_35855__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35800_35840 = G__35867;
chunk__35801_35841 = G__35868;
count__35802_35842 = G__35869;
i__35803_35843 = G__35870;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35814 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35815 = null;
var count__35816 = (0);
var i__35817 = (0);
while(true){
if((i__35817 < count__35816)){
var role = cljs.core._nth.call(null,chunk__35815,i__35817);
var temp__4657__auto___35871__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35871__$1)){
var spec_35872 = temp__4657__auto___35871__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35872));
} else {
}

var G__35873 = seq__35814;
var G__35874 = chunk__35815;
var G__35875 = count__35816;
var G__35876 = (i__35817 + (1));
seq__35814 = G__35873;
chunk__35815 = G__35874;
count__35816 = G__35875;
i__35817 = G__35876;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35814);
if(temp__4657__auto____$1){
var seq__35814__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35814__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35814__$1);
var G__35877 = cljs.core.chunk_rest.call(null,seq__35814__$1);
var G__35878 = c__26790__auto__;
var G__35879 = cljs.core.count.call(null,c__26790__auto__);
var G__35880 = (0);
seq__35814 = G__35877;
chunk__35815 = G__35878;
count__35816 = G__35879;
i__35817 = G__35880;
continue;
} else {
var role = cljs.core.first.call(null,seq__35814__$1);
var temp__4657__auto___35881__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35881__$2)){
var spec_35882 = temp__4657__auto___35881__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35882));
} else {
}

var G__35883 = cljs.core.next.call(null,seq__35814__$1);
var G__35884 = null;
var G__35885 = (0);
var G__35886 = (0);
seq__35814 = G__35883;
chunk__35815 = G__35884;
count__35816 = G__35885;
i__35817 = G__35886;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1499781169050