// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36208 = [];
var len__27054__auto___36211 = arguments.length;
var i__27055__auto___36212 = (0);
while(true){
if((i__27055__auto___36212 < len__27054__auto___36211)){
args36208.push((arguments[i__27055__auto___36212]));

var G__36213 = (i__27055__auto___36212 + (1));
i__27055__auto___36212 = G__36213;
continue;
} else {
}
break;
}

var G__36210 = args36208.length;
switch (G__36210) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36208.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36216 = arguments.length;
var i__27055__auto___36217 = (0);
while(true){
if((i__27055__auto___36217 < len__27054__auto___36216)){
args__27061__auto__.push((arguments[i__27055__auto___36217]));

var G__36218 = (i__27055__auto___36217 + (1));
i__27055__auto___36217 = G__36218;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36215){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36215));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36220 = arguments.length;
var i__27055__auto___36221 = (0);
while(true){
if((i__27055__auto___36221 < len__27054__auto___36220)){
args__27061__auto__.push((arguments[i__27055__auto___36221]));

var G__36222 = (i__27055__auto___36221 + (1));
i__27055__auto___36221 = G__36222;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36219){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36219));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36223){
var map__36226 = p__36223;
var map__36226__$1 = ((((!((map__36226 == null)))?((((map__36226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36226):map__36226);
var message = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28840__auto___36388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___36388,ch){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___36388,ch){
return (function (state_36357){
var state_val_36358 = (state_36357[(1)]);
if((state_val_36358 === (7))){
var inst_36353 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36359_36389 = state_36357__$1;
(statearr_36359_36389[(2)] = inst_36353);

(statearr_36359_36389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (1))){
var state_36357__$1 = state_36357;
var statearr_36360_36390 = state_36357__$1;
(statearr_36360_36390[(2)] = null);

(statearr_36360_36390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (4))){
var inst_36310 = (state_36357[(7)]);
var inst_36310__$1 = (state_36357[(2)]);
var state_36357__$1 = (function (){var statearr_36361 = state_36357;
(statearr_36361[(7)] = inst_36310__$1);

return statearr_36361;
})();
if(cljs.core.truth_(inst_36310__$1)){
var statearr_36362_36391 = state_36357__$1;
(statearr_36362_36391[(1)] = (5));

} else {
var statearr_36363_36392 = state_36357__$1;
(statearr_36363_36392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (15))){
var inst_36317 = (state_36357[(8)]);
var inst_36332 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36317);
var inst_36333 = cljs.core.first.call(null,inst_36332);
var inst_36334 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36333);
var inst_36335 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36334)].join('');
var inst_36336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36335);
var state_36357__$1 = state_36357;
var statearr_36364_36393 = state_36357__$1;
(statearr_36364_36393[(2)] = inst_36336);

(statearr_36364_36393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (13))){
var inst_36341 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36365_36394 = state_36357__$1;
(statearr_36365_36394[(2)] = inst_36341);

(statearr_36365_36394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (6))){
var state_36357__$1 = state_36357;
var statearr_36366_36395 = state_36357__$1;
(statearr_36366_36395[(2)] = null);

(statearr_36366_36395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (17))){
var inst_36339 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36367_36396 = state_36357__$1;
(statearr_36367_36396[(2)] = inst_36339);

(statearr_36367_36396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (3))){
var inst_36355 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36357__$1,inst_36355);
} else {
if((state_val_36358 === (12))){
var inst_36316 = (state_36357[(9)]);
var inst_36330 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36316,opts);
var state_36357__$1 = state_36357;
if(cljs.core.truth_(inst_36330)){
var statearr_36368_36397 = state_36357__$1;
(statearr_36368_36397[(1)] = (15));

} else {
var statearr_36369_36398 = state_36357__$1;
(statearr_36369_36398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (2))){
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36357__$1,(4),ch);
} else {
if((state_val_36358 === (11))){
var inst_36317 = (state_36357[(8)]);
var inst_36322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36323 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36317);
var inst_36324 = cljs.core.async.timeout.call(null,(1000));
var inst_36325 = [inst_36323,inst_36324];
var inst_36326 = (new cljs.core.PersistentVector(null,2,(5),inst_36322,inst_36325,null));
var state_36357__$1 = state_36357;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36357__$1,(14),inst_36326);
} else {
if((state_val_36358 === (9))){
var inst_36317 = (state_36357[(8)]);
var inst_36343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36344 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36317);
var inst_36345 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36344);
var inst_36346 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36345)].join('');
var inst_36347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36346);
var state_36357__$1 = (function (){var statearr_36370 = state_36357;
(statearr_36370[(10)] = inst_36343);

return statearr_36370;
})();
var statearr_36371_36399 = state_36357__$1;
(statearr_36371_36399[(2)] = inst_36347);

(statearr_36371_36399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (5))){
var inst_36310 = (state_36357[(7)]);
var inst_36312 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36313 = (new cljs.core.PersistentArrayMap(null,2,inst_36312,null));
var inst_36314 = (new cljs.core.PersistentHashSet(null,inst_36313,null));
var inst_36315 = figwheel.client.focus_msgs.call(null,inst_36314,inst_36310);
var inst_36316 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36315);
var inst_36317 = cljs.core.first.call(null,inst_36315);
var inst_36318 = figwheel.client.autoload_QMARK_.call(null);
var state_36357__$1 = (function (){var statearr_36372 = state_36357;
(statearr_36372[(9)] = inst_36316);

(statearr_36372[(8)] = inst_36317);

return statearr_36372;
})();
if(cljs.core.truth_(inst_36318)){
var statearr_36373_36400 = state_36357__$1;
(statearr_36373_36400[(1)] = (8));

} else {
var statearr_36374_36401 = state_36357__$1;
(statearr_36374_36401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (14))){
var inst_36328 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36375_36402 = state_36357__$1;
(statearr_36375_36402[(2)] = inst_36328);

(statearr_36375_36402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (16))){
var state_36357__$1 = state_36357;
var statearr_36376_36403 = state_36357__$1;
(statearr_36376_36403[(2)] = null);

(statearr_36376_36403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (10))){
var inst_36349 = (state_36357[(2)]);
var state_36357__$1 = (function (){var statearr_36377 = state_36357;
(statearr_36377[(11)] = inst_36349);

return statearr_36377;
})();
var statearr_36378_36404 = state_36357__$1;
(statearr_36378_36404[(2)] = null);

(statearr_36378_36404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (8))){
var inst_36316 = (state_36357[(9)]);
var inst_36320 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36316,opts);
var state_36357__$1 = state_36357;
if(cljs.core.truth_(inst_36320)){
var statearr_36379_36405 = state_36357__$1;
(statearr_36379_36405[(1)] = (11));

} else {
var statearr_36380_36406 = state_36357__$1;
(statearr_36380_36406[(1)] = (12));

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
});})(c__28840__auto___36388,ch))
;
return ((function (switch__28728__auto__,c__28840__auto___36388,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____0 = (function (){
var statearr_36384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36384[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__);

(statearr_36384[(1)] = (1));

return statearr_36384;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____1 = (function (state_36357){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_36357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e36385){if((e36385 instanceof Object)){
var ex__28732__auto__ = e36385;
var statearr_36386_36407 = state_36357;
(statearr_36386_36407[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36408 = state_36357;
state_36357 = G__36408;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__ = function(state_36357){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____1.call(this,state_36357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28729__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___36388,ch))
})();
var state__28842__auto__ = (function (){var statearr_36387 = f__28841__auto__.call(null);
(statearr_36387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___36388);

return statearr_36387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___36388,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36409_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36409_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36411){if((e36411 instanceof Error)){
var e = e36411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36412], null));
} else {
var e = e36411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36412))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36413){
var map__36422 = p__36413;
var map__36422__$1 = ((((!((map__36422 == null)))?((((map__36422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36422):map__36422);
var opts = map__36422__$1;
var build_id = cljs.core.get.call(null,map__36422__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36422,map__36422__$1,opts,build_id){
return (function (p__36424){
var vec__36425 = p__36424;
var seq__36426 = cljs.core.seq.call(null,vec__36425);
var first__36427 = cljs.core.first.call(null,seq__36426);
var seq__36426__$1 = cljs.core.next.call(null,seq__36426);
var map__36428 = first__36427;
var map__36428__$1 = ((((!((map__36428 == null)))?((((map__36428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36428):map__36428);
var msg = map__36428__$1;
var msg_name = cljs.core.get.call(null,map__36428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36426__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36425,seq__36426,first__36427,seq__36426__$1,map__36428,map__36428__$1,msg,msg_name,_,map__36422,map__36422__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36425,seq__36426,first__36427,seq__36426__$1,map__36428,map__36428__$1,msg,msg_name,_,map__36422,map__36422__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36422,map__36422__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36436){
var vec__36437 = p__36436;
var seq__36438 = cljs.core.seq.call(null,vec__36437);
var first__36439 = cljs.core.first.call(null,seq__36438);
var seq__36438__$1 = cljs.core.next.call(null,seq__36438);
var map__36440 = first__36439;
var map__36440__$1 = ((((!((map__36440 == null)))?((((map__36440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36440):map__36440);
var msg = map__36440__$1;
var msg_name = cljs.core.get.call(null,map__36440__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36438__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36442){
var map__36454 = p__36442;
var map__36454__$1 = ((((!((map__36454 == null)))?((((map__36454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36454):map__36454);
var on_compile_warning = cljs.core.get.call(null,map__36454__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36454__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36454,map__36454__$1,on_compile_warning,on_compile_fail){
return (function (p__36456){
var vec__36457 = p__36456;
var seq__36458 = cljs.core.seq.call(null,vec__36457);
var first__36459 = cljs.core.first.call(null,seq__36458);
var seq__36458__$1 = cljs.core.next.call(null,seq__36458);
var map__36460 = first__36459;
var map__36460__$1 = ((((!((map__36460 == null)))?((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36460):map__36460);
var msg = map__36460__$1;
var msg_name = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36458__$1;
var pred__36462 = cljs.core._EQ_;
var expr__36463 = msg_name;
if(cljs.core.truth_(pred__36462.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36463))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36462.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36463))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36454,map__36454__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__,msg_hist,msg_names,msg){
return (function (state_36691){
var state_val_36692 = (state_36691[(1)]);
if((state_val_36692 === (7))){
var inst_36611 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36611)){
var statearr_36693_36743 = state_36691__$1;
(statearr_36693_36743[(1)] = (8));

} else {
var statearr_36694_36744 = state_36691__$1;
(statearr_36694_36744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (20))){
var inst_36685 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36695_36745 = state_36691__$1;
(statearr_36695_36745[(2)] = inst_36685);

(statearr_36695_36745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (27))){
var inst_36681 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36696_36746 = state_36691__$1;
(statearr_36696_36746[(2)] = inst_36681);

(statearr_36696_36746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (1))){
var inst_36604 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36604)){
var statearr_36697_36747 = state_36691__$1;
(statearr_36697_36747[(1)] = (2));

} else {
var statearr_36698_36748 = state_36691__$1;
(statearr_36698_36748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (24))){
var inst_36683 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36699_36749 = state_36691__$1;
(statearr_36699_36749[(2)] = inst_36683);

(statearr_36699_36749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (4))){
var inst_36689 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36691__$1,inst_36689);
} else {
if((state_val_36692 === (15))){
var inst_36687 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36700_36750 = state_36691__$1;
(statearr_36700_36750[(2)] = inst_36687);

(statearr_36700_36750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (21))){
var inst_36640 = (state_36691[(2)]);
var inst_36641 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36642 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36641);
var state_36691__$1 = (function (){var statearr_36701 = state_36691;
(statearr_36701[(7)] = inst_36640);

return statearr_36701;
})();
var statearr_36702_36751 = state_36691__$1;
(statearr_36702_36751[(2)] = inst_36642);

(statearr_36702_36751[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (31))){
var inst_36670 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36670)){
var statearr_36703_36752 = state_36691__$1;
(statearr_36703_36752[(1)] = (34));

} else {
var statearr_36704_36753 = state_36691__$1;
(statearr_36704_36753[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (32))){
var inst_36679 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36705_36754 = state_36691__$1;
(statearr_36705_36754[(2)] = inst_36679);

(statearr_36705_36754[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (33))){
var inst_36666 = (state_36691[(2)]);
var inst_36667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36667);
var state_36691__$1 = (function (){var statearr_36706 = state_36691;
(statearr_36706[(8)] = inst_36666);

return statearr_36706;
})();
var statearr_36707_36755 = state_36691__$1;
(statearr_36707_36755[(2)] = inst_36668);

(statearr_36707_36755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (13))){
var inst_36625 = figwheel.client.heads_up.clear.call(null);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(16),inst_36625);
} else {
if((state_val_36692 === (22))){
var inst_36646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36647 = figwheel.client.heads_up.append_warning_message.call(null,inst_36646);
var state_36691__$1 = state_36691;
var statearr_36708_36756 = state_36691__$1;
(statearr_36708_36756[(2)] = inst_36647);

(statearr_36708_36756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (36))){
var inst_36677 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36709_36757 = state_36691__$1;
(statearr_36709_36757[(2)] = inst_36677);

(statearr_36709_36757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (29))){
var inst_36657 = (state_36691[(2)]);
var inst_36658 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36659 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36658);
var state_36691__$1 = (function (){var statearr_36710 = state_36691;
(statearr_36710[(9)] = inst_36657);

return statearr_36710;
})();
var statearr_36711_36758 = state_36691__$1;
(statearr_36711_36758[(2)] = inst_36659);

(statearr_36711_36758[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (6))){
var inst_36606 = (state_36691[(10)]);
var state_36691__$1 = state_36691;
var statearr_36712_36759 = state_36691__$1;
(statearr_36712_36759[(2)] = inst_36606);

(statearr_36712_36759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (28))){
var inst_36653 = (state_36691[(2)]);
var inst_36654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36655 = figwheel.client.heads_up.display_warning.call(null,inst_36654);
var state_36691__$1 = (function (){var statearr_36713 = state_36691;
(statearr_36713[(11)] = inst_36653);

return statearr_36713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(29),inst_36655);
} else {
if((state_val_36692 === (25))){
var inst_36651 = figwheel.client.heads_up.clear.call(null);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(28),inst_36651);
} else {
if((state_val_36692 === (34))){
var inst_36672 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(37),inst_36672);
} else {
if((state_val_36692 === (17))){
var inst_36631 = (state_36691[(2)]);
var inst_36632 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36633 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36632);
var state_36691__$1 = (function (){var statearr_36714 = state_36691;
(statearr_36714[(12)] = inst_36631);

return statearr_36714;
})();
var statearr_36715_36760 = state_36691__$1;
(statearr_36715_36760[(2)] = inst_36633);

(statearr_36715_36760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (3))){
var inst_36623 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36623)){
var statearr_36716_36761 = state_36691__$1;
(statearr_36716_36761[(1)] = (13));

} else {
var statearr_36717_36762 = state_36691__$1;
(statearr_36717_36762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (12))){
var inst_36619 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36718_36763 = state_36691__$1;
(statearr_36718_36763[(2)] = inst_36619);

(statearr_36718_36763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (2))){
var inst_36606 = (state_36691[(10)]);
var inst_36606__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36691__$1 = (function (){var statearr_36719 = state_36691;
(statearr_36719[(10)] = inst_36606__$1);

return statearr_36719;
})();
if(cljs.core.truth_(inst_36606__$1)){
var statearr_36720_36764 = state_36691__$1;
(statearr_36720_36764[(1)] = (5));

} else {
var statearr_36721_36765 = state_36691__$1;
(statearr_36721_36765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (23))){
var inst_36649 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36649)){
var statearr_36722_36766 = state_36691__$1;
(statearr_36722_36766[(1)] = (25));

} else {
var statearr_36723_36767 = state_36691__$1;
(statearr_36723_36767[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (35))){
var state_36691__$1 = state_36691;
var statearr_36724_36768 = state_36691__$1;
(statearr_36724_36768[(2)] = null);

(statearr_36724_36768[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (19))){
var inst_36644 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36644)){
var statearr_36725_36769 = state_36691__$1;
(statearr_36725_36769[(1)] = (22));

} else {
var statearr_36726_36770 = state_36691__$1;
(statearr_36726_36770[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (11))){
var inst_36615 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36727_36771 = state_36691__$1;
(statearr_36727_36771[(2)] = inst_36615);

(statearr_36727_36771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (9))){
var inst_36617 = figwheel.client.heads_up.clear.call(null);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(12),inst_36617);
} else {
if((state_val_36692 === (5))){
var inst_36608 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36691__$1 = state_36691;
var statearr_36728_36772 = state_36691__$1;
(statearr_36728_36772[(2)] = inst_36608);

(statearr_36728_36772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (14))){
var inst_36635 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36635)){
var statearr_36729_36773 = state_36691__$1;
(statearr_36729_36773[(1)] = (18));

} else {
var statearr_36730_36774 = state_36691__$1;
(statearr_36730_36774[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (26))){
var inst_36661 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36691__$1 = state_36691;
if(cljs.core.truth_(inst_36661)){
var statearr_36731_36775 = state_36691__$1;
(statearr_36731_36775[(1)] = (30));

} else {
var statearr_36732_36776 = state_36691__$1;
(statearr_36732_36776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (16))){
var inst_36627 = (state_36691[(2)]);
var inst_36628 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36629 = figwheel.client.heads_up.display_exception.call(null,inst_36628);
var state_36691__$1 = (function (){var statearr_36733 = state_36691;
(statearr_36733[(13)] = inst_36627);

return statearr_36733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(17),inst_36629);
} else {
if((state_val_36692 === (30))){
var inst_36663 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36664 = figwheel.client.heads_up.display_warning.call(null,inst_36663);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(33),inst_36664);
} else {
if((state_val_36692 === (10))){
var inst_36621 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36734_36777 = state_36691__$1;
(statearr_36734_36777[(2)] = inst_36621);

(statearr_36734_36777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (18))){
var inst_36637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36638 = figwheel.client.heads_up.display_exception.call(null,inst_36637);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(21),inst_36638);
} else {
if((state_val_36692 === (37))){
var inst_36674 = (state_36691[(2)]);
var state_36691__$1 = state_36691;
var statearr_36735_36778 = state_36691__$1;
(statearr_36735_36778[(2)] = inst_36674);

(statearr_36735_36778[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36692 === (8))){
var inst_36613 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36691__$1 = state_36691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36691__$1,(11),inst_36613);
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
});})(c__28840__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28728__auto__,c__28840__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____0 = (function (){
var statearr_36739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36739[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__);

(statearr_36739[(1)] = (1));

return statearr_36739;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____1 = (function (state_36691){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_36691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e36740){if((e36740 instanceof Object)){
var ex__28732__auto__ = e36740;
var statearr_36741_36779 = state_36691;
(statearr_36741_36779[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36780 = state_36691;
state_36691 = G__36780;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__ = function(state_36691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____1.call(this,state_36691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__,msg_hist,msg_names,msg))
})();
var state__28842__auto__ = (function (){var statearr_36742 = f__28841__auto__.call(null);
(statearr_36742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_36742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__,msg_hist,msg_names,msg))
);

return c__28840__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28840__auto___36843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___36843,ch){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___36843,ch){
return (function (state_36826){
var state_val_36827 = (state_36826[(1)]);
if((state_val_36827 === (1))){
var state_36826__$1 = state_36826;
var statearr_36828_36844 = state_36826__$1;
(statearr_36828_36844[(2)] = null);

(statearr_36828_36844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (2))){
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36826__$1,(4),ch);
} else {
if((state_val_36827 === (3))){
var inst_36824 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36826__$1,inst_36824);
} else {
if((state_val_36827 === (4))){
var inst_36814 = (state_36826[(7)]);
var inst_36814__$1 = (state_36826[(2)]);
var state_36826__$1 = (function (){var statearr_36829 = state_36826;
(statearr_36829[(7)] = inst_36814__$1);

return statearr_36829;
})();
if(cljs.core.truth_(inst_36814__$1)){
var statearr_36830_36845 = state_36826__$1;
(statearr_36830_36845[(1)] = (5));

} else {
var statearr_36831_36846 = state_36826__$1;
(statearr_36831_36846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (5))){
var inst_36814 = (state_36826[(7)]);
var inst_36816 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36814);
var state_36826__$1 = state_36826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36826__$1,(8),inst_36816);
} else {
if((state_val_36827 === (6))){
var state_36826__$1 = state_36826;
var statearr_36832_36847 = state_36826__$1;
(statearr_36832_36847[(2)] = null);

(statearr_36832_36847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (7))){
var inst_36822 = (state_36826[(2)]);
var state_36826__$1 = state_36826;
var statearr_36833_36848 = state_36826__$1;
(statearr_36833_36848[(2)] = inst_36822);

(statearr_36833_36848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36827 === (8))){
var inst_36818 = (state_36826[(2)]);
var state_36826__$1 = (function (){var statearr_36834 = state_36826;
(statearr_36834[(8)] = inst_36818);

return statearr_36834;
})();
var statearr_36835_36849 = state_36826__$1;
(statearr_36835_36849[(2)] = null);

(statearr_36835_36849[(1)] = (2));


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
});})(c__28840__auto___36843,ch))
;
return ((function (switch__28728__auto__,c__28840__auto___36843,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28729__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28729__auto____0 = (function (){
var statearr_36839 = [null,null,null,null,null,null,null,null,null];
(statearr_36839[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28729__auto__);

(statearr_36839[(1)] = (1));

return statearr_36839;
});
var figwheel$client$heads_up_plugin_$_state_machine__28729__auto____1 = (function (state_36826){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_36826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e36840){if((e36840 instanceof Object)){
var ex__28732__auto__ = e36840;
var statearr_36841_36850 = state_36826;
(statearr_36841_36850[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36851 = state_36826;
state_36826 = G__36851;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28729__auto__ = function(state_36826){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28729__auto____1.call(this,state_36826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28729__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28729__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___36843,ch))
})();
var state__28842__auto__ = (function (){var statearr_36842 = f__28841__auto__.call(null);
(statearr_36842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___36843);

return statearr_36842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___36843,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__){
return (function (state_36872){
var state_val_36873 = (state_36872[(1)]);
if((state_val_36873 === (1))){
var inst_36867 = cljs.core.async.timeout.call(null,(3000));
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36872__$1,(2),inst_36867);
} else {
if((state_val_36873 === (2))){
var inst_36869 = (state_36872[(2)]);
var inst_36870 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36872__$1 = (function (){var statearr_36874 = state_36872;
(statearr_36874[(7)] = inst_36869);

return statearr_36874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36872__$1,inst_36870);
} else {
return null;
}
}
});})(c__28840__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____0 = (function (){
var statearr_36878 = [null,null,null,null,null,null,null,null];
(statearr_36878[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__);

(statearr_36878[(1)] = (1));

return statearr_36878;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____1 = (function (state_36872){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_36872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e36879){if((e36879 instanceof Object)){
var ex__28732__auto__ = e36879;
var statearr_36880_36882 = state_36872;
(statearr_36880_36882[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_36872;
state_36872 = G__36883;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__ = function(state_36872){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____1.call(this,state_36872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28729__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__))
})();
var state__28842__auto__ = (function (){var statearr_36881 = f__28841__auto__.call(null);
(statearr_36881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__))
);

return c__28840__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36906){
var state_val_36907 = (state_36906[(1)]);
if((state_val_36907 === (1))){
var inst_36900 = cljs.core.async.timeout.call(null,(2000));
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36906__$1,(2),inst_36900);
} else {
if((state_val_36907 === (2))){
var inst_36902 = (state_36906[(2)]);
var inst_36903 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36904 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36903);
var state_36906__$1 = (function (){var statearr_36908 = state_36906;
(statearr_36908[(7)] = inst_36902);

return statearr_36908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36906__$1,inst_36904);
} else {
return null;
}
}
});})(c__28840__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____0 = (function (){
var statearr_36912 = [null,null,null,null,null,null,null,null];
(statearr_36912[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__);

(statearr_36912[(1)] = (1));

return statearr_36912;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____1 = (function (state_36906){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_36906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e36913){if((e36913 instanceof Object)){
var ex__28732__auto__ = e36913;
var statearr_36914_36916 = state_36906;
(statearr_36914_36916[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_36906;
state_36906 = G__36917;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__ = function(state_36906){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____1.call(this,state_36906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28842__auto__ = (function (){var statearr_36915 = f__28841__auto__.call(null);
(statearr_36915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_36915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__,figwheel_version,temp__4657__auto__))
);

return c__28840__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36918){
var map__36922 = p__36918;
var map__36922__$1 = ((((!((map__36922 == null)))?((((map__36922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36922):map__36922);
var file = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36924 = "";
var G__36924__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36924),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36924);
var G__36924__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36924__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36924__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36924__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36924__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36925){
var map__36932 = p__36925;
var map__36932__$1 = ((((!((map__36932 == null)))?((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36932):map__36932);
var ed = map__36932__$1;
var formatted_exception = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36932__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36934_36938 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36935_36939 = null;
var count__36936_36940 = (0);
var i__36937_36941 = (0);
while(true){
if((i__36937_36941 < count__36936_36940)){
var msg_36942 = cljs.core._nth.call(null,chunk__36935_36939,i__36937_36941);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36942);

var G__36943 = seq__36934_36938;
var G__36944 = chunk__36935_36939;
var G__36945 = count__36936_36940;
var G__36946 = (i__36937_36941 + (1));
seq__36934_36938 = G__36943;
chunk__36935_36939 = G__36944;
count__36936_36940 = G__36945;
i__36937_36941 = G__36946;
continue;
} else {
var temp__4657__auto___36947 = cljs.core.seq.call(null,seq__36934_36938);
if(temp__4657__auto___36947){
var seq__36934_36948__$1 = temp__4657__auto___36947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36934_36948__$1)){
var c__26790__auto___36949 = cljs.core.chunk_first.call(null,seq__36934_36948__$1);
var G__36950 = cljs.core.chunk_rest.call(null,seq__36934_36948__$1);
var G__36951 = c__26790__auto___36949;
var G__36952 = cljs.core.count.call(null,c__26790__auto___36949);
var G__36953 = (0);
seq__36934_36938 = G__36950;
chunk__36935_36939 = G__36951;
count__36936_36940 = G__36952;
i__36937_36941 = G__36953;
continue;
} else {
var msg_36954 = cljs.core.first.call(null,seq__36934_36948__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36954);

var G__36955 = cljs.core.next.call(null,seq__36934_36948__$1);
var G__36956 = null;
var G__36957 = (0);
var G__36958 = (0);
seq__36934_36938 = G__36955;
chunk__36935_36939 = G__36956;
count__36936_36940 = G__36957;
i__36937_36941 = G__36958;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36959){
var map__36962 = p__36959;
var map__36962__$1 = ((((!((map__36962 == null)))?((((map__36962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36962):map__36962);
var w = map__36962__$1;
var message = cljs.core.get.call(null,map__36962__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36974 = cljs.core.seq.call(null,plugins);
var chunk__36975 = null;
var count__36976 = (0);
var i__36977 = (0);
while(true){
if((i__36977 < count__36976)){
var vec__36978 = cljs.core._nth.call(null,chunk__36975,i__36977);
var k = cljs.core.nth.call(null,vec__36978,(0),null);
var plugin = cljs.core.nth.call(null,vec__36978,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36984 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36974,chunk__36975,count__36976,i__36977,pl_36984,vec__36978,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36984.call(null,msg_hist);
});})(seq__36974,chunk__36975,count__36976,i__36977,pl_36984,vec__36978,k,plugin))
);
} else {
}

var G__36985 = seq__36974;
var G__36986 = chunk__36975;
var G__36987 = count__36976;
var G__36988 = (i__36977 + (1));
seq__36974 = G__36985;
chunk__36975 = G__36986;
count__36976 = G__36987;
i__36977 = G__36988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36974);
if(temp__4657__auto__){
var seq__36974__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36974__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36974__$1);
var G__36989 = cljs.core.chunk_rest.call(null,seq__36974__$1);
var G__36990 = c__26790__auto__;
var G__36991 = cljs.core.count.call(null,c__26790__auto__);
var G__36992 = (0);
seq__36974 = G__36989;
chunk__36975 = G__36990;
count__36976 = G__36991;
i__36977 = G__36992;
continue;
} else {
var vec__36981 = cljs.core.first.call(null,seq__36974__$1);
var k = cljs.core.nth.call(null,vec__36981,(0),null);
var plugin = cljs.core.nth.call(null,vec__36981,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36974,chunk__36975,count__36976,i__36977,pl_36993,vec__36981,k,plugin,seq__36974__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36993.call(null,msg_hist);
});})(seq__36974,chunk__36975,count__36976,i__36977,pl_36993,vec__36981,k,plugin,seq__36974__$1,temp__4657__auto__))
);
} else {
}

var G__36994 = cljs.core.next.call(null,seq__36974__$1);
var G__36995 = null;
var G__36996 = (0);
var G__36997 = (0);
seq__36974 = G__36994;
chunk__36975 = G__36995;
count__36976 = G__36996;
i__36977 = G__36997;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36998 = [];
var len__27054__auto___37005 = arguments.length;
var i__27055__auto___37006 = (0);
while(true){
if((i__27055__auto___37006 < len__27054__auto___37005)){
args36998.push((arguments[i__27055__auto___37006]));

var G__37007 = (i__27055__auto___37006 + (1));
i__27055__auto___37006 = G__37007;
continue;
} else {
}
break;
}

var G__37000 = args36998.length;
switch (G__37000) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36998.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37001_37009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37002_37010 = null;
var count__37003_37011 = (0);
var i__37004_37012 = (0);
while(true){
if((i__37004_37012 < count__37003_37011)){
var msg_37013 = cljs.core._nth.call(null,chunk__37002_37010,i__37004_37012);
figwheel.client.socket.handle_incoming_message.call(null,msg_37013);

var G__37014 = seq__37001_37009;
var G__37015 = chunk__37002_37010;
var G__37016 = count__37003_37011;
var G__37017 = (i__37004_37012 + (1));
seq__37001_37009 = G__37014;
chunk__37002_37010 = G__37015;
count__37003_37011 = G__37016;
i__37004_37012 = G__37017;
continue;
} else {
var temp__4657__auto___37018 = cljs.core.seq.call(null,seq__37001_37009);
if(temp__4657__auto___37018){
var seq__37001_37019__$1 = temp__4657__auto___37018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37001_37019__$1)){
var c__26790__auto___37020 = cljs.core.chunk_first.call(null,seq__37001_37019__$1);
var G__37021 = cljs.core.chunk_rest.call(null,seq__37001_37019__$1);
var G__37022 = c__26790__auto___37020;
var G__37023 = cljs.core.count.call(null,c__26790__auto___37020);
var G__37024 = (0);
seq__37001_37009 = G__37021;
chunk__37002_37010 = G__37022;
count__37003_37011 = G__37023;
i__37004_37012 = G__37024;
continue;
} else {
var msg_37025 = cljs.core.first.call(null,seq__37001_37019__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37025);

var G__37026 = cljs.core.next.call(null,seq__37001_37019__$1);
var G__37027 = null;
var G__37028 = (0);
var G__37029 = (0);
seq__37001_37009 = G__37026;
chunk__37002_37010 = G__37027;
count__37003_37011 = G__37028;
i__37004_37012 = G__37029;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37034 = arguments.length;
var i__27055__auto___37035 = (0);
while(true){
if((i__27055__auto___37035 < len__27054__auto___37034)){
args__27061__auto__.push((arguments[i__27055__auto___37035]));

var G__37036 = (i__27055__auto___37035 + (1));
i__27055__auto___37035 = G__37036;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37031){
var map__37032 = p__37031;
var map__37032__$1 = ((((!((map__37032 == null)))?((((map__37032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37032):map__37032);
var opts = map__37032__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37030));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37038){if((e37038 instanceof Error)){
var e = e37038;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37038;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37042){
var map__37043 = p__37042;
var map__37043__$1 = ((((!((map__37043 == null)))?((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37043):map__37043);
var msg_name = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499781169853