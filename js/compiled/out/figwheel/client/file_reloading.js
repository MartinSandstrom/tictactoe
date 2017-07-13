// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33452_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33452_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33457 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33458 = null;
var count__33459 = (0);
var i__33460 = (0);
while(true){
if((i__33460 < count__33459)){
var n = cljs.core._nth.call(null,chunk__33458,i__33460);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33461 = seq__33457;
var G__33462 = chunk__33458;
var G__33463 = count__33459;
var G__33464 = (i__33460 + (1));
seq__33457 = G__33461;
chunk__33458 = G__33462;
count__33459 = G__33463;
i__33460 = G__33464;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33457);
if(temp__4657__auto__){
var seq__33457__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33457__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33457__$1);
var G__33465 = cljs.core.chunk_rest.call(null,seq__33457__$1);
var G__33466 = c__26790__auto__;
var G__33467 = cljs.core.count.call(null,c__26790__auto__);
var G__33468 = (0);
seq__33457 = G__33465;
chunk__33458 = G__33466;
count__33459 = G__33467;
i__33460 = G__33468;
continue;
} else {
var n = cljs.core.first.call(null,seq__33457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33469 = cljs.core.next.call(null,seq__33457__$1);
var G__33470 = null;
var G__33471 = (0);
var G__33472 = (0);
seq__33457 = G__33469;
chunk__33458 = G__33470;
count__33459 = G__33471;
i__33460 = G__33472;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33523_33534 = cljs.core.seq.call(null,deps);
var chunk__33524_33535 = null;
var count__33525_33536 = (0);
var i__33526_33537 = (0);
while(true){
if((i__33526_33537 < count__33525_33536)){
var dep_33538 = cljs.core._nth.call(null,chunk__33524_33535,i__33526_33537);
topo_sort_helper_STAR_.call(null,dep_33538,(depth + (1)),state);

var G__33539 = seq__33523_33534;
var G__33540 = chunk__33524_33535;
var G__33541 = count__33525_33536;
var G__33542 = (i__33526_33537 + (1));
seq__33523_33534 = G__33539;
chunk__33524_33535 = G__33540;
count__33525_33536 = G__33541;
i__33526_33537 = G__33542;
continue;
} else {
var temp__4657__auto___33543 = cljs.core.seq.call(null,seq__33523_33534);
if(temp__4657__auto___33543){
var seq__33523_33544__$1 = temp__4657__auto___33543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33523_33544__$1)){
var c__26790__auto___33545 = cljs.core.chunk_first.call(null,seq__33523_33544__$1);
var G__33546 = cljs.core.chunk_rest.call(null,seq__33523_33544__$1);
var G__33547 = c__26790__auto___33545;
var G__33548 = cljs.core.count.call(null,c__26790__auto___33545);
var G__33549 = (0);
seq__33523_33534 = G__33546;
chunk__33524_33535 = G__33547;
count__33525_33536 = G__33548;
i__33526_33537 = G__33549;
continue;
} else {
var dep_33550 = cljs.core.first.call(null,seq__33523_33544__$1);
topo_sort_helper_STAR_.call(null,dep_33550,(depth + (1)),state);

var G__33551 = cljs.core.next.call(null,seq__33523_33544__$1);
var G__33552 = null;
var G__33553 = (0);
var G__33554 = (0);
seq__33523_33534 = G__33551;
chunk__33524_33535 = G__33552;
count__33525_33536 = G__33553;
i__33526_33537 = G__33554;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33527){
var vec__33531 = p__33527;
var seq__33532 = cljs.core.seq.call(null,vec__33531);
var first__33533 = cljs.core.first.call(null,seq__33532);
var seq__33532__$1 = cljs.core.next.call(null,seq__33532);
var x = first__33533;
var xs = seq__33532__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33531,seq__33532,first__33533,seq__33532__$1,x,xs,get_deps__$1){
return (function (p1__33473_SHARP_){
return clojure.set.difference.call(null,p1__33473_SHARP_,x);
});})(vec__33531,seq__33532,first__33533,seq__33532__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33567 = cljs.core.seq.call(null,provides);
var chunk__33568 = null;
var count__33569 = (0);
var i__33570 = (0);
while(true){
if((i__33570 < count__33569)){
var prov = cljs.core._nth.call(null,chunk__33568,i__33570);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33571_33579 = cljs.core.seq.call(null,requires);
var chunk__33572_33580 = null;
var count__33573_33581 = (0);
var i__33574_33582 = (0);
while(true){
if((i__33574_33582 < count__33573_33581)){
var req_33583 = cljs.core._nth.call(null,chunk__33572_33580,i__33574_33582);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33583,prov);

var G__33584 = seq__33571_33579;
var G__33585 = chunk__33572_33580;
var G__33586 = count__33573_33581;
var G__33587 = (i__33574_33582 + (1));
seq__33571_33579 = G__33584;
chunk__33572_33580 = G__33585;
count__33573_33581 = G__33586;
i__33574_33582 = G__33587;
continue;
} else {
var temp__4657__auto___33588 = cljs.core.seq.call(null,seq__33571_33579);
if(temp__4657__auto___33588){
var seq__33571_33589__$1 = temp__4657__auto___33588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33571_33589__$1)){
var c__26790__auto___33590 = cljs.core.chunk_first.call(null,seq__33571_33589__$1);
var G__33591 = cljs.core.chunk_rest.call(null,seq__33571_33589__$1);
var G__33592 = c__26790__auto___33590;
var G__33593 = cljs.core.count.call(null,c__26790__auto___33590);
var G__33594 = (0);
seq__33571_33579 = G__33591;
chunk__33572_33580 = G__33592;
count__33573_33581 = G__33593;
i__33574_33582 = G__33594;
continue;
} else {
var req_33595 = cljs.core.first.call(null,seq__33571_33589__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33595,prov);

var G__33596 = cljs.core.next.call(null,seq__33571_33589__$1);
var G__33597 = null;
var G__33598 = (0);
var G__33599 = (0);
seq__33571_33579 = G__33596;
chunk__33572_33580 = G__33597;
count__33573_33581 = G__33598;
i__33574_33582 = G__33599;
continue;
}
} else {
}
}
break;
}

var G__33600 = seq__33567;
var G__33601 = chunk__33568;
var G__33602 = count__33569;
var G__33603 = (i__33570 + (1));
seq__33567 = G__33600;
chunk__33568 = G__33601;
count__33569 = G__33602;
i__33570 = G__33603;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33567);
if(temp__4657__auto__){
var seq__33567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33567__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33567__$1);
var G__33604 = cljs.core.chunk_rest.call(null,seq__33567__$1);
var G__33605 = c__26790__auto__;
var G__33606 = cljs.core.count.call(null,c__26790__auto__);
var G__33607 = (0);
seq__33567 = G__33604;
chunk__33568 = G__33605;
count__33569 = G__33606;
i__33570 = G__33607;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33567__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33575_33608 = cljs.core.seq.call(null,requires);
var chunk__33576_33609 = null;
var count__33577_33610 = (0);
var i__33578_33611 = (0);
while(true){
if((i__33578_33611 < count__33577_33610)){
var req_33612 = cljs.core._nth.call(null,chunk__33576_33609,i__33578_33611);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33612,prov);

var G__33613 = seq__33575_33608;
var G__33614 = chunk__33576_33609;
var G__33615 = count__33577_33610;
var G__33616 = (i__33578_33611 + (1));
seq__33575_33608 = G__33613;
chunk__33576_33609 = G__33614;
count__33577_33610 = G__33615;
i__33578_33611 = G__33616;
continue;
} else {
var temp__4657__auto___33617__$1 = cljs.core.seq.call(null,seq__33575_33608);
if(temp__4657__auto___33617__$1){
var seq__33575_33618__$1 = temp__4657__auto___33617__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33575_33618__$1)){
var c__26790__auto___33619 = cljs.core.chunk_first.call(null,seq__33575_33618__$1);
var G__33620 = cljs.core.chunk_rest.call(null,seq__33575_33618__$1);
var G__33621 = c__26790__auto___33619;
var G__33622 = cljs.core.count.call(null,c__26790__auto___33619);
var G__33623 = (0);
seq__33575_33608 = G__33620;
chunk__33576_33609 = G__33621;
count__33577_33610 = G__33622;
i__33578_33611 = G__33623;
continue;
} else {
var req_33624 = cljs.core.first.call(null,seq__33575_33618__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33624,prov);

var G__33625 = cljs.core.next.call(null,seq__33575_33618__$1);
var G__33626 = null;
var G__33627 = (0);
var G__33628 = (0);
seq__33575_33608 = G__33625;
chunk__33576_33609 = G__33626;
count__33577_33610 = G__33627;
i__33578_33611 = G__33628;
continue;
}
} else {
}
}
break;
}

var G__33629 = cljs.core.next.call(null,seq__33567__$1);
var G__33630 = null;
var G__33631 = (0);
var G__33632 = (0);
seq__33567 = G__33629;
chunk__33568 = G__33630;
count__33569 = G__33631;
i__33570 = G__33632;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33637_33641 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33638_33642 = null;
var count__33639_33643 = (0);
var i__33640_33644 = (0);
while(true){
if((i__33640_33644 < count__33639_33643)){
var ns_33645 = cljs.core._nth.call(null,chunk__33638_33642,i__33640_33644);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33645);

var G__33646 = seq__33637_33641;
var G__33647 = chunk__33638_33642;
var G__33648 = count__33639_33643;
var G__33649 = (i__33640_33644 + (1));
seq__33637_33641 = G__33646;
chunk__33638_33642 = G__33647;
count__33639_33643 = G__33648;
i__33640_33644 = G__33649;
continue;
} else {
var temp__4657__auto___33650 = cljs.core.seq.call(null,seq__33637_33641);
if(temp__4657__auto___33650){
var seq__33637_33651__$1 = temp__4657__auto___33650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33637_33651__$1)){
var c__26790__auto___33652 = cljs.core.chunk_first.call(null,seq__33637_33651__$1);
var G__33653 = cljs.core.chunk_rest.call(null,seq__33637_33651__$1);
var G__33654 = c__26790__auto___33652;
var G__33655 = cljs.core.count.call(null,c__26790__auto___33652);
var G__33656 = (0);
seq__33637_33641 = G__33653;
chunk__33638_33642 = G__33654;
count__33639_33643 = G__33655;
i__33640_33644 = G__33656;
continue;
} else {
var ns_33657 = cljs.core.first.call(null,seq__33637_33651__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33657);

var G__33658 = cljs.core.next.call(null,seq__33637_33651__$1);
var G__33659 = null;
var G__33660 = (0);
var G__33661 = (0);
seq__33637_33641 = G__33658;
chunk__33638_33642 = G__33659;
count__33639_33643 = G__33660;
i__33640_33644 = G__33661;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33662__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33663__i = 0, G__33663__a = new Array(arguments.length -  0);
while (G__33663__i < G__33663__a.length) {G__33663__a[G__33663__i] = arguments[G__33663__i + 0]; ++G__33663__i;}
  args = new cljs.core.IndexedSeq(G__33663__a,0);
} 
return G__33662__delegate.call(this,args);};
G__33662.cljs$lang$maxFixedArity = 0;
G__33662.cljs$lang$applyTo = (function (arglist__33664){
var args = cljs.core.seq(arglist__33664);
return G__33662__delegate(args);
});
G__33662.cljs$core$IFn$_invoke$arity$variadic = G__33662__delegate;
return G__33662;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33665 = cljs.core._EQ_;
var expr__33666 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33665.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33666))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33665,expr__33666){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33665,expr__33666))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33665,expr__33666){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33668){if((e33668 instanceof Error)){
var e = e33668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33668;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33665,expr__33666))
} else {
if(cljs.core.truth_(pred__33665.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33666))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33665.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33666))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33665.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33666))){
return ((function (pred__33665,expr__33666){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33669){if((e33669 instanceof Error)){
var e = e33669;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33669;

}
}})());
});
;})(pred__33665,expr__33666))
} else {
return ((function (pred__33665,expr__33666){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33665,expr__33666))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33670,callback){
var map__33673 = p__33670;
var map__33673__$1 = ((((!((map__33673 == null)))?((((map__33673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33673):map__33673);
var file_msg = map__33673__$1;
var request_url = cljs.core.get.call(null,map__33673__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33673,map__33673__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33673,map__33673__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__){
return (function (state_33697){
var state_val_33698 = (state_33697[(1)]);
if((state_val_33698 === (7))){
var inst_33693 = (state_33697[(2)]);
var state_33697__$1 = state_33697;
var statearr_33699_33719 = state_33697__$1;
(statearr_33699_33719[(2)] = inst_33693);

(statearr_33699_33719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (1))){
var state_33697__$1 = state_33697;
var statearr_33700_33720 = state_33697__$1;
(statearr_33700_33720[(2)] = null);

(statearr_33700_33720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (4))){
var inst_33677 = (state_33697[(7)]);
var inst_33677__$1 = (state_33697[(2)]);
var state_33697__$1 = (function (){var statearr_33701 = state_33697;
(statearr_33701[(7)] = inst_33677__$1);

return statearr_33701;
})();
if(cljs.core.truth_(inst_33677__$1)){
var statearr_33702_33721 = state_33697__$1;
(statearr_33702_33721[(1)] = (5));

} else {
var statearr_33703_33722 = state_33697__$1;
(statearr_33703_33722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (6))){
var state_33697__$1 = state_33697;
var statearr_33704_33723 = state_33697__$1;
(statearr_33704_33723[(2)] = null);

(statearr_33704_33723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (3))){
var inst_33695 = (state_33697[(2)]);
var state_33697__$1 = state_33697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33697__$1,inst_33695);
} else {
if((state_val_33698 === (2))){
var state_33697__$1 = state_33697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33697__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33698 === (11))){
var inst_33689 = (state_33697[(2)]);
var state_33697__$1 = (function (){var statearr_33705 = state_33697;
(statearr_33705[(8)] = inst_33689);

return statearr_33705;
})();
var statearr_33706_33724 = state_33697__$1;
(statearr_33706_33724[(2)] = null);

(statearr_33706_33724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (9))){
var inst_33681 = (state_33697[(9)]);
var inst_33683 = (state_33697[(10)]);
var inst_33685 = inst_33683.call(null,inst_33681);
var state_33697__$1 = state_33697;
var statearr_33707_33725 = state_33697__$1;
(statearr_33707_33725[(2)] = inst_33685);

(statearr_33707_33725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (5))){
var inst_33677 = (state_33697[(7)]);
var inst_33679 = figwheel.client.file_reloading.blocking_load.call(null,inst_33677);
var state_33697__$1 = state_33697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33697__$1,(8),inst_33679);
} else {
if((state_val_33698 === (10))){
var inst_33681 = (state_33697[(9)]);
var inst_33687 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33681);
var state_33697__$1 = state_33697;
var statearr_33708_33726 = state_33697__$1;
(statearr_33708_33726[(2)] = inst_33687);

(statearr_33708_33726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33698 === (8))){
var inst_33677 = (state_33697[(7)]);
var inst_33683 = (state_33697[(10)]);
var inst_33681 = (state_33697[(2)]);
var inst_33682 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33683__$1 = cljs.core.get.call(null,inst_33682,inst_33677);
var state_33697__$1 = (function (){var statearr_33709 = state_33697;
(statearr_33709[(9)] = inst_33681);

(statearr_33709[(10)] = inst_33683__$1);

return statearr_33709;
})();
if(cljs.core.truth_(inst_33683__$1)){
var statearr_33710_33727 = state_33697__$1;
(statearr_33710_33727[(1)] = (9));

} else {
var statearr_33711_33728 = state_33697__$1;
(statearr_33711_33728[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28840__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28729__auto__ = null;
var figwheel$client$file_reloading$state_machine__28729__auto____0 = (function (){
var statearr_33715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33715[(0)] = figwheel$client$file_reloading$state_machine__28729__auto__);

(statearr_33715[(1)] = (1));

return statearr_33715;
});
var figwheel$client$file_reloading$state_machine__28729__auto____1 = (function (state_33697){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_33697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e33716){if((e33716 instanceof Object)){
var ex__28732__auto__ = e33716;
var statearr_33717_33729 = state_33697;
(statearr_33717_33729[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33730 = state_33697;
state_33697 = G__33730;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28729__auto__ = function(state_33697){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28729__auto____1.call(this,state_33697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28729__auto____0;
figwheel$client$file_reloading$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28729__auto____1;
return figwheel$client$file_reloading$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__))
})();
var state__28842__auto__ = (function (){var statearr_33718 = f__28841__auto__.call(null);
(statearr_33718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_33718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__))
);

return c__28840__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33731,callback){
var map__33734 = p__33731;
var map__33734__$1 = ((((!((map__33734 == null)))?((((map__33734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33734):map__33734);
var file_msg = map__33734__$1;
var namespace = cljs.core.get.call(null,map__33734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33734,map__33734__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33734,map__33734__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33736){
var map__33739 = p__33736;
var map__33739__$1 = ((((!((map__33739 == null)))?((((map__33739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33739):map__33739);
var file_msg = map__33739__$1;
var namespace = cljs.core.get.call(null,map__33739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33741){
var map__33744 = p__33741;
var map__33744__$1 = ((((!((map__33744 == null)))?((((map__33744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33744):map__33744);
var file_msg = map__33744__$1;
var namespace = cljs.core.get.call(null,map__33744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33746,callback){
var map__33749 = p__33746;
var map__33749__$1 = ((((!((map__33749 == null)))?((((map__33749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33749):map__33749);
var file_msg = map__33749__$1;
var request_url = cljs.core.get.call(null,map__33749__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28840__auto___33853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___33853,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___33853,out){
return (function (state_33835){
var state_val_33836 = (state_33835[(1)]);
if((state_val_33836 === (1))){
var inst_33809 = cljs.core.seq.call(null,files);
var inst_33810 = cljs.core.first.call(null,inst_33809);
var inst_33811 = cljs.core.next.call(null,inst_33809);
var inst_33812 = files;
var state_33835__$1 = (function (){var statearr_33837 = state_33835;
(statearr_33837[(7)] = inst_33811);

(statearr_33837[(8)] = inst_33812);

(statearr_33837[(9)] = inst_33810);

return statearr_33837;
})();
var statearr_33838_33854 = state_33835__$1;
(statearr_33838_33854[(2)] = null);

(statearr_33838_33854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (2))){
var inst_33818 = (state_33835[(10)]);
var inst_33812 = (state_33835[(8)]);
var inst_33817 = cljs.core.seq.call(null,inst_33812);
var inst_33818__$1 = cljs.core.first.call(null,inst_33817);
var inst_33819 = cljs.core.next.call(null,inst_33817);
var inst_33820 = (inst_33818__$1 == null);
var inst_33821 = cljs.core.not.call(null,inst_33820);
var state_33835__$1 = (function (){var statearr_33839 = state_33835;
(statearr_33839[(10)] = inst_33818__$1);

(statearr_33839[(11)] = inst_33819);

return statearr_33839;
})();
if(inst_33821){
var statearr_33840_33855 = state_33835__$1;
(statearr_33840_33855[(1)] = (4));

} else {
var statearr_33841_33856 = state_33835__$1;
(statearr_33841_33856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (3))){
var inst_33833 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33835__$1,inst_33833);
} else {
if((state_val_33836 === (4))){
var inst_33818 = (state_33835[(10)]);
var inst_33823 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33818);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33835__$1,(7),inst_33823);
} else {
if((state_val_33836 === (5))){
var inst_33829 = cljs.core.async.close_BANG_.call(null,out);
var state_33835__$1 = state_33835;
var statearr_33842_33857 = state_33835__$1;
(statearr_33842_33857[(2)] = inst_33829);

(statearr_33842_33857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (6))){
var inst_33831 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33843_33858 = state_33835__$1;
(statearr_33843_33858[(2)] = inst_33831);

(statearr_33843_33858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33836 === (7))){
var inst_33819 = (state_33835[(11)]);
var inst_33825 = (state_33835[(2)]);
var inst_33826 = cljs.core.async.put_BANG_.call(null,out,inst_33825);
var inst_33812 = inst_33819;
var state_33835__$1 = (function (){var statearr_33844 = state_33835;
(statearr_33844[(12)] = inst_33826);

(statearr_33844[(8)] = inst_33812);

return statearr_33844;
})();
var statearr_33845_33859 = state_33835__$1;
(statearr_33845_33859[(2)] = null);

(statearr_33845_33859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28840__auto___33853,out))
;
return ((function (switch__28728__auto__,c__28840__auto___33853,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____0 = (function (){
var statearr_33849 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33849[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__);

(statearr_33849[(1)] = (1));

return statearr_33849;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____1 = (function (state_33835){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_33835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e33850){if((e33850 instanceof Object)){
var ex__28732__auto__ = e33850;
var statearr_33851_33860 = state_33835;
(statearr_33851_33860[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33861 = state_33835;
state_33835 = G__33861;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__ = function(state_33835){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____1.call(this,state_33835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___33853,out))
})();
var state__28842__auto__ = (function (){var statearr_33852 = f__28841__auto__.call(null);
(statearr_33852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___33853);

return statearr_33852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___33853,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33862,opts){
var map__33866 = p__33862;
var map__33866__$1 = ((((!((map__33866 == null)))?((((map__33866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33866):map__33866);
var eval_body__$1 = cljs.core.get.call(null,map__33866__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33868){var e = e33868;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33869_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33869_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33878){
var vec__33879 = p__33878;
var k = cljs.core.nth.call(null,vec__33879,(0),null);
var v = cljs.core.nth.call(null,vec__33879,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33882){
var vec__33883 = p__33882;
var k = cljs.core.nth.call(null,vec__33883,(0),null);
var v = cljs.core.nth.call(null,vec__33883,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33889,p__33890){
var map__34137 = p__33889;
var map__34137__$1 = ((((!((map__34137 == null)))?((((map__34137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34137):map__34137);
var opts = map__34137__$1;
var before_jsload = cljs.core.get.call(null,map__34137__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34137__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34137__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34138 = p__33890;
var map__34138__$1 = ((((!((map__34138 == null)))?((((map__34138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34138):map__34138);
var msg = map__34138__$1;
var files = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34291){
var state_val_34292 = (state_34291[(1)]);
if((state_val_34292 === (7))){
var inst_34152 = (state_34291[(7)]);
var inst_34155 = (state_34291[(8)]);
var inst_34154 = (state_34291[(9)]);
var inst_34153 = (state_34291[(10)]);
var inst_34160 = cljs.core._nth.call(null,inst_34153,inst_34155);
var inst_34161 = figwheel.client.file_reloading.eval_body.call(null,inst_34160,opts);
var inst_34162 = (inst_34155 + (1));
var tmp34293 = inst_34152;
var tmp34294 = inst_34154;
var tmp34295 = inst_34153;
var inst_34152__$1 = tmp34293;
var inst_34153__$1 = tmp34295;
var inst_34154__$1 = tmp34294;
var inst_34155__$1 = inst_34162;
var state_34291__$1 = (function (){var statearr_34296 = state_34291;
(statearr_34296[(7)] = inst_34152__$1);

(statearr_34296[(11)] = inst_34161);

(statearr_34296[(8)] = inst_34155__$1);

(statearr_34296[(9)] = inst_34154__$1);

(statearr_34296[(10)] = inst_34153__$1);

return statearr_34296;
})();
var statearr_34297_34383 = state_34291__$1;
(statearr_34297_34383[(2)] = null);

(statearr_34297_34383[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (20))){
var inst_34195 = (state_34291[(12)]);
var inst_34203 = figwheel.client.file_reloading.sort_files.call(null,inst_34195);
var state_34291__$1 = state_34291;
var statearr_34298_34384 = state_34291__$1;
(statearr_34298_34384[(2)] = inst_34203);

(statearr_34298_34384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (27))){
var state_34291__$1 = state_34291;
var statearr_34299_34385 = state_34291__$1;
(statearr_34299_34385[(2)] = null);

(statearr_34299_34385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (1))){
var inst_34144 = (state_34291[(13)]);
var inst_34141 = before_jsload.call(null,files);
var inst_34142 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34143 = (function (){return ((function (inst_34144,inst_34141,inst_34142,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33886_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33886_SHARP_);
});
;})(inst_34144,inst_34141,inst_34142,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34144__$1 = cljs.core.filter.call(null,inst_34143,files);
var inst_34145 = cljs.core.not_empty.call(null,inst_34144__$1);
var state_34291__$1 = (function (){var statearr_34300 = state_34291;
(statearr_34300[(14)] = inst_34142);

(statearr_34300[(13)] = inst_34144__$1);

(statearr_34300[(15)] = inst_34141);

return statearr_34300;
})();
if(cljs.core.truth_(inst_34145)){
var statearr_34301_34386 = state_34291__$1;
(statearr_34301_34386[(1)] = (2));

} else {
var statearr_34302_34387 = state_34291__$1;
(statearr_34302_34387[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (24))){
var state_34291__$1 = state_34291;
var statearr_34303_34388 = state_34291__$1;
(statearr_34303_34388[(2)] = null);

(statearr_34303_34388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (39))){
var inst_34245 = (state_34291[(16)]);
var state_34291__$1 = state_34291;
var statearr_34304_34389 = state_34291__$1;
(statearr_34304_34389[(2)] = inst_34245);

(statearr_34304_34389[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (46))){
var inst_34286 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34305_34390 = state_34291__$1;
(statearr_34305_34390[(2)] = inst_34286);

(statearr_34305_34390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (4))){
var inst_34189 = (state_34291[(2)]);
var inst_34190 = cljs.core.List.EMPTY;
var inst_34191 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34190);
var inst_34192 = (function (){return ((function (inst_34189,inst_34190,inst_34191,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33887_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33887_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33887_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33887_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34189,inst_34190,inst_34191,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34193 = cljs.core.filter.call(null,inst_34192,files);
var inst_34194 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34195 = cljs.core.concat.call(null,inst_34193,inst_34194);
var state_34291__$1 = (function (){var statearr_34306 = state_34291;
(statearr_34306[(12)] = inst_34195);

(statearr_34306[(17)] = inst_34189);

(statearr_34306[(18)] = inst_34191);

return statearr_34306;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34307_34391 = state_34291__$1;
(statearr_34307_34391[(1)] = (16));

} else {
var statearr_34308_34392 = state_34291__$1;
(statearr_34308_34392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (15))){
var inst_34179 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34309_34393 = state_34291__$1;
(statearr_34309_34393[(2)] = inst_34179);

(statearr_34309_34393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (21))){
var inst_34205 = (state_34291[(19)]);
var inst_34205__$1 = (state_34291[(2)]);
var inst_34206 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34205__$1);
var state_34291__$1 = (function (){var statearr_34310 = state_34291;
(statearr_34310[(19)] = inst_34205__$1);

return statearr_34310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34291__$1,(22),inst_34206);
} else {
if((state_val_34292 === (31))){
var inst_34289 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34291__$1,inst_34289);
} else {
if((state_val_34292 === (32))){
var inst_34245 = (state_34291[(16)]);
var inst_34250 = inst_34245.cljs$lang$protocol_mask$partition0$;
var inst_34251 = (inst_34250 & (64));
var inst_34252 = inst_34245.cljs$core$ISeq$;
var inst_34253 = (inst_34251) || (inst_34252);
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34253)){
var statearr_34311_34394 = state_34291__$1;
(statearr_34311_34394[(1)] = (35));

} else {
var statearr_34312_34395 = state_34291__$1;
(statearr_34312_34395[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (40))){
var inst_34266 = (state_34291[(20)]);
var inst_34265 = (state_34291[(2)]);
var inst_34266__$1 = cljs.core.get.call(null,inst_34265,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34267 = cljs.core.get.call(null,inst_34265,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34268 = cljs.core.not_empty.call(null,inst_34266__$1);
var state_34291__$1 = (function (){var statearr_34313 = state_34291;
(statearr_34313[(20)] = inst_34266__$1);

(statearr_34313[(21)] = inst_34267);

return statearr_34313;
})();
if(cljs.core.truth_(inst_34268)){
var statearr_34314_34396 = state_34291__$1;
(statearr_34314_34396[(1)] = (41));

} else {
var statearr_34315_34397 = state_34291__$1;
(statearr_34315_34397[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (33))){
var state_34291__$1 = state_34291;
var statearr_34316_34398 = state_34291__$1;
(statearr_34316_34398[(2)] = false);

(statearr_34316_34398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (13))){
var inst_34165 = (state_34291[(22)]);
var inst_34169 = cljs.core.chunk_first.call(null,inst_34165);
var inst_34170 = cljs.core.chunk_rest.call(null,inst_34165);
var inst_34171 = cljs.core.count.call(null,inst_34169);
var inst_34152 = inst_34170;
var inst_34153 = inst_34169;
var inst_34154 = inst_34171;
var inst_34155 = (0);
var state_34291__$1 = (function (){var statearr_34317 = state_34291;
(statearr_34317[(7)] = inst_34152);

(statearr_34317[(8)] = inst_34155);

(statearr_34317[(9)] = inst_34154);

(statearr_34317[(10)] = inst_34153);

return statearr_34317;
})();
var statearr_34318_34399 = state_34291__$1;
(statearr_34318_34399[(2)] = null);

(statearr_34318_34399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (22))){
var inst_34205 = (state_34291[(19)]);
var inst_34213 = (state_34291[(23)]);
var inst_34208 = (state_34291[(24)]);
var inst_34209 = (state_34291[(25)]);
var inst_34208__$1 = (state_34291[(2)]);
var inst_34209__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34208__$1);
var inst_34210 = (function (){var all_files = inst_34205;
var res_SINGLEQUOTE_ = inst_34208__$1;
var res = inst_34209__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34205,inst_34213,inst_34208,inst_34209,inst_34208__$1,inst_34209__$1,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33888_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33888_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34205,inst_34213,inst_34208,inst_34209,inst_34208__$1,inst_34209__$1,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34211 = cljs.core.filter.call(null,inst_34210,inst_34208__$1);
var inst_34212 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34213__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34212);
var inst_34214 = cljs.core.not_empty.call(null,inst_34213__$1);
var state_34291__$1 = (function (){var statearr_34319 = state_34291;
(statearr_34319[(26)] = inst_34211);

(statearr_34319[(23)] = inst_34213__$1);

(statearr_34319[(24)] = inst_34208__$1);

(statearr_34319[(25)] = inst_34209__$1);

return statearr_34319;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34320_34400 = state_34291__$1;
(statearr_34320_34400[(1)] = (23));

} else {
var statearr_34321_34401 = state_34291__$1;
(statearr_34321_34401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (36))){
var state_34291__$1 = state_34291;
var statearr_34322_34402 = state_34291__$1;
(statearr_34322_34402[(2)] = false);

(statearr_34322_34402[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (41))){
var inst_34266 = (state_34291[(20)]);
var inst_34270 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34271 = cljs.core.map.call(null,inst_34270,inst_34266);
var inst_34272 = cljs.core.pr_str.call(null,inst_34271);
var inst_34273 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34272)].join('');
var inst_34274 = figwheel.client.utils.log.call(null,inst_34273);
var state_34291__$1 = state_34291;
var statearr_34323_34403 = state_34291__$1;
(statearr_34323_34403[(2)] = inst_34274);

(statearr_34323_34403[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (43))){
var inst_34267 = (state_34291[(21)]);
var inst_34277 = (state_34291[(2)]);
var inst_34278 = cljs.core.not_empty.call(null,inst_34267);
var state_34291__$1 = (function (){var statearr_34324 = state_34291;
(statearr_34324[(27)] = inst_34277);

return statearr_34324;
})();
if(cljs.core.truth_(inst_34278)){
var statearr_34325_34404 = state_34291__$1;
(statearr_34325_34404[(1)] = (44));

} else {
var statearr_34326_34405 = state_34291__$1;
(statearr_34326_34405[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (29))){
var inst_34211 = (state_34291[(26)]);
var inst_34205 = (state_34291[(19)]);
var inst_34213 = (state_34291[(23)]);
var inst_34245 = (state_34291[(16)]);
var inst_34208 = (state_34291[(24)]);
var inst_34209 = (state_34291[(25)]);
var inst_34241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34244 = (function (){var all_files = inst_34205;
var res_SINGLEQUOTE_ = inst_34208;
var res = inst_34209;
var files_not_loaded = inst_34211;
var dependencies_that_loaded = inst_34213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34245,inst_34208,inst_34209,inst_34241,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34243){
var map__34327 = p__34243;
var map__34327__$1 = ((((!((map__34327 == null)))?((((map__34327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34327):map__34327);
var namespace = cljs.core.get.call(null,map__34327__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34245,inst_34208,inst_34209,inst_34241,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34245__$1 = cljs.core.group_by.call(null,inst_34244,inst_34211);
var inst_34247 = (inst_34245__$1 == null);
var inst_34248 = cljs.core.not.call(null,inst_34247);
var state_34291__$1 = (function (){var statearr_34329 = state_34291;
(statearr_34329[(28)] = inst_34241);

(statearr_34329[(16)] = inst_34245__$1);

return statearr_34329;
})();
if(inst_34248){
var statearr_34330_34406 = state_34291__$1;
(statearr_34330_34406[(1)] = (32));

} else {
var statearr_34331_34407 = state_34291__$1;
(statearr_34331_34407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (44))){
var inst_34267 = (state_34291[(21)]);
var inst_34280 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34267);
var inst_34281 = cljs.core.pr_str.call(null,inst_34280);
var inst_34282 = [cljs.core.str("not required: "),cljs.core.str(inst_34281)].join('');
var inst_34283 = figwheel.client.utils.log.call(null,inst_34282);
var state_34291__$1 = state_34291;
var statearr_34332_34408 = state_34291__$1;
(statearr_34332_34408[(2)] = inst_34283);

(statearr_34332_34408[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (6))){
var inst_34186 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34333_34409 = state_34291__$1;
(statearr_34333_34409[(2)] = inst_34186);

(statearr_34333_34409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (28))){
var inst_34211 = (state_34291[(26)]);
var inst_34238 = (state_34291[(2)]);
var inst_34239 = cljs.core.not_empty.call(null,inst_34211);
var state_34291__$1 = (function (){var statearr_34334 = state_34291;
(statearr_34334[(29)] = inst_34238);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34239)){
var statearr_34335_34410 = state_34291__$1;
(statearr_34335_34410[(1)] = (29));

} else {
var statearr_34336_34411 = state_34291__$1;
(statearr_34336_34411[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (25))){
var inst_34209 = (state_34291[(25)]);
var inst_34225 = (state_34291[(2)]);
var inst_34226 = cljs.core.not_empty.call(null,inst_34209);
var state_34291__$1 = (function (){var statearr_34337 = state_34291;
(statearr_34337[(30)] = inst_34225);

return statearr_34337;
})();
if(cljs.core.truth_(inst_34226)){
var statearr_34338_34412 = state_34291__$1;
(statearr_34338_34412[(1)] = (26));

} else {
var statearr_34339_34413 = state_34291__$1;
(statearr_34339_34413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (34))){
var inst_34260 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34260)){
var statearr_34340_34414 = state_34291__$1;
(statearr_34340_34414[(1)] = (38));

} else {
var statearr_34341_34415 = state_34291__$1;
(statearr_34341_34415[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (17))){
var state_34291__$1 = state_34291;
var statearr_34342_34416 = state_34291__$1;
(statearr_34342_34416[(2)] = recompile_dependents);

(statearr_34342_34416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (3))){
var state_34291__$1 = state_34291;
var statearr_34343_34417 = state_34291__$1;
(statearr_34343_34417[(2)] = null);

(statearr_34343_34417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (12))){
var inst_34182 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34344_34418 = state_34291__$1;
(statearr_34344_34418[(2)] = inst_34182);

(statearr_34344_34418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (2))){
var inst_34144 = (state_34291[(13)]);
var inst_34151 = cljs.core.seq.call(null,inst_34144);
var inst_34152 = inst_34151;
var inst_34153 = null;
var inst_34154 = (0);
var inst_34155 = (0);
var state_34291__$1 = (function (){var statearr_34345 = state_34291;
(statearr_34345[(7)] = inst_34152);

(statearr_34345[(8)] = inst_34155);

(statearr_34345[(9)] = inst_34154);

(statearr_34345[(10)] = inst_34153);

return statearr_34345;
})();
var statearr_34346_34419 = state_34291__$1;
(statearr_34346_34419[(2)] = null);

(statearr_34346_34419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (23))){
var inst_34211 = (state_34291[(26)]);
var inst_34205 = (state_34291[(19)]);
var inst_34213 = (state_34291[(23)]);
var inst_34208 = (state_34291[(24)]);
var inst_34209 = (state_34291[(25)]);
var inst_34216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34218 = (function (){var all_files = inst_34205;
var res_SINGLEQUOTE_ = inst_34208;
var res = inst_34209;
var files_not_loaded = inst_34211;
var dependencies_that_loaded = inst_34213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34216,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34217){
var map__34347 = p__34217;
var map__34347__$1 = ((((!((map__34347 == null)))?((((map__34347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34347):map__34347);
var request_url = cljs.core.get.call(null,map__34347__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34216,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34219 = cljs.core.reverse.call(null,inst_34213);
var inst_34220 = cljs.core.map.call(null,inst_34218,inst_34219);
var inst_34221 = cljs.core.pr_str.call(null,inst_34220);
var inst_34222 = figwheel.client.utils.log.call(null,inst_34221);
var state_34291__$1 = (function (){var statearr_34349 = state_34291;
(statearr_34349[(31)] = inst_34216);

return statearr_34349;
})();
var statearr_34350_34420 = state_34291__$1;
(statearr_34350_34420[(2)] = inst_34222);

(statearr_34350_34420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (35))){
var state_34291__$1 = state_34291;
var statearr_34351_34421 = state_34291__$1;
(statearr_34351_34421[(2)] = true);

(statearr_34351_34421[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (19))){
var inst_34195 = (state_34291[(12)]);
var inst_34201 = figwheel.client.file_reloading.expand_files.call(null,inst_34195);
var state_34291__$1 = state_34291;
var statearr_34352_34422 = state_34291__$1;
(statearr_34352_34422[(2)] = inst_34201);

(statearr_34352_34422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (11))){
var state_34291__$1 = state_34291;
var statearr_34353_34423 = state_34291__$1;
(statearr_34353_34423[(2)] = null);

(statearr_34353_34423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (9))){
var inst_34184 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34354_34424 = state_34291__$1;
(statearr_34354_34424[(2)] = inst_34184);

(statearr_34354_34424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (5))){
var inst_34155 = (state_34291[(8)]);
var inst_34154 = (state_34291[(9)]);
var inst_34157 = (inst_34155 < inst_34154);
var inst_34158 = inst_34157;
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34158)){
var statearr_34355_34425 = state_34291__$1;
(statearr_34355_34425[(1)] = (7));

} else {
var statearr_34356_34426 = state_34291__$1;
(statearr_34356_34426[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (14))){
var inst_34165 = (state_34291[(22)]);
var inst_34174 = cljs.core.first.call(null,inst_34165);
var inst_34175 = figwheel.client.file_reloading.eval_body.call(null,inst_34174,opts);
var inst_34176 = cljs.core.next.call(null,inst_34165);
var inst_34152 = inst_34176;
var inst_34153 = null;
var inst_34154 = (0);
var inst_34155 = (0);
var state_34291__$1 = (function (){var statearr_34357 = state_34291;
(statearr_34357[(32)] = inst_34175);

(statearr_34357[(7)] = inst_34152);

(statearr_34357[(8)] = inst_34155);

(statearr_34357[(9)] = inst_34154);

(statearr_34357[(10)] = inst_34153);

return statearr_34357;
})();
var statearr_34358_34427 = state_34291__$1;
(statearr_34358_34427[(2)] = null);

(statearr_34358_34427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (45))){
var state_34291__$1 = state_34291;
var statearr_34359_34428 = state_34291__$1;
(statearr_34359_34428[(2)] = null);

(statearr_34359_34428[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (26))){
var inst_34211 = (state_34291[(26)]);
var inst_34205 = (state_34291[(19)]);
var inst_34213 = (state_34291[(23)]);
var inst_34208 = (state_34291[(24)]);
var inst_34209 = (state_34291[(25)]);
var inst_34228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34230 = (function (){var all_files = inst_34205;
var res_SINGLEQUOTE_ = inst_34208;
var res = inst_34209;
var files_not_loaded = inst_34211;
var dependencies_that_loaded = inst_34213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34228,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34229){
var map__34360 = p__34229;
var map__34360__$1 = ((((!((map__34360 == null)))?((((map__34360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34360):map__34360);
var namespace = cljs.core.get.call(null,map__34360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34228,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34231 = cljs.core.map.call(null,inst_34230,inst_34209);
var inst_34232 = cljs.core.pr_str.call(null,inst_34231);
var inst_34233 = figwheel.client.utils.log.call(null,inst_34232);
var inst_34234 = (function (){var all_files = inst_34205;
var res_SINGLEQUOTE_ = inst_34208;
var res = inst_34209;
var files_not_loaded = inst_34211;
var dependencies_that_loaded = inst_34213;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34228,inst_34230,inst_34231,inst_34232,inst_34233,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34211,inst_34205,inst_34213,inst_34208,inst_34209,inst_34228,inst_34230,inst_34231,inst_34232,inst_34233,state_val_34292,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34235 = setTimeout(inst_34234,(10));
var state_34291__$1 = (function (){var statearr_34362 = state_34291;
(statearr_34362[(33)] = inst_34233);

(statearr_34362[(34)] = inst_34228);

return statearr_34362;
})();
var statearr_34363_34429 = state_34291__$1;
(statearr_34363_34429[(2)] = inst_34235);

(statearr_34363_34429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (16))){
var state_34291__$1 = state_34291;
var statearr_34364_34430 = state_34291__$1;
(statearr_34364_34430[(2)] = reload_dependents);

(statearr_34364_34430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (38))){
var inst_34245 = (state_34291[(16)]);
var inst_34262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34245);
var state_34291__$1 = state_34291;
var statearr_34365_34431 = state_34291__$1;
(statearr_34365_34431[(2)] = inst_34262);

(statearr_34365_34431[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (30))){
var state_34291__$1 = state_34291;
var statearr_34366_34432 = state_34291__$1;
(statearr_34366_34432[(2)] = null);

(statearr_34366_34432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (10))){
var inst_34165 = (state_34291[(22)]);
var inst_34167 = cljs.core.chunked_seq_QMARK_.call(null,inst_34165);
var state_34291__$1 = state_34291;
if(inst_34167){
var statearr_34367_34433 = state_34291__$1;
(statearr_34367_34433[(1)] = (13));

} else {
var statearr_34368_34434 = state_34291__$1;
(statearr_34368_34434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (18))){
var inst_34199 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
if(cljs.core.truth_(inst_34199)){
var statearr_34369_34435 = state_34291__$1;
(statearr_34369_34435[(1)] = (19));

} else {
var statearr_34370_34436 = state_34291__$1;
(statearr_34370_34436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (42))){
var state_34291__$1 = state_34291;
var statearr_34371_34437 = state_34291__$1;
(statearr_34371_34437[(2)] = null);

(statearr_34371_34437[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (37))){
var inst_34257 = (state_34291[(2)]);
var state_34291__$1 = state_34291;
var statearr_34372_34438 = state_34291__$1;
(statearr_34372_34438[(2)] = inst_34257);

(statearr_34372_34438[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34292 === (8))){
var inst_34165 = (state_34291[(22)]);
var inst_34152 = (state_34291[(7)]);
var inst_34165__$1 = cljs.core.seq.call(null,inst_34152);
var state_34291__$1 = (function (){var statearr_34373 = state_34291;
(statearr_34373[(22)] = inst_34165__$1);

return statearr_34373;
})();
if(inst_34165__$1){
var statearr_34374_34439 = state_34291__$1;
(statearr_34374_34439[(1)] = (10));

} else {
var statearr_34375_34440 = state_34291__$1;
(statearr_34375_34440[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28728__auto__,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____1 = (function (state_34291){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_34291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object)){
var ex__28732__auto__ = e34380;
var statearr_34381_34441 = state_34291;
(statearr_34381_34441[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34442 = state_34291;
state_34291 = G__34442;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__ = function(state_34291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____1.call(this,state_34291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28842__auto__ = (function (){var statearr_34382 = f__28841__auto__.call(null);
(statearr_34382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__,map__34137,map__34137__$1,opts,before_jsload,on_jsload,reload_dependents,map__34138,map__34138__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28840__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34445,link){
var map__34448 = p__34445;
var map__34448__$1 = ((((!((map__34448 == null)))?((((map__34448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34448):map__34448);
var file = cljs.core.get.call(null,map__34448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34448,map__34448__$1,file){
return (function (p1__34443_SHARP_,p2__34444_SHARP_){
if(cljs.core._EQ_.call(null,p1__34443_SHARP_,p2__34444_SHARP_)){
return p1__34443_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34448,map__34448__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34454){
var map__34455 = p__34454;
var map__34455__$1 = ((((!((map__34455 == null)))?((((map__34455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34455):map__34455);
var match_length = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34450_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34450_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34457_SHARP_,p2__34458_SHARP_){
return cljs.core.assoc.call(null,p1__34457_SHARP_,cljs.core.get.call(null,p2__34458_SHARP_,key),p2__34458_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34459 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34459);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34459);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34460,p__34461){
var map__34466 = p__34460;
var map__34466__$1 = ((((!((map__34466 == null)))?((((map__34466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);
var on_cssload = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34467 = p__34461;
var map__34467__$1 = ((((!((map__34467 == null)))?((((map__34467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34467):map__34467);
var files_msg = map__34467__$1;
var files = cljs.core.get.call(null,map__34467__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1499781167317