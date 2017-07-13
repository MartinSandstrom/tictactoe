// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28885 = [];
var len__27054__auto___28891 = arguments.length;
var i__27055__auto___28892 = (0);
while(true){
if((i__27055__auto___28892 < len__27054__auto___28891)){
args28885.push((arguments[i__27055__auto___28892]));

var G__28893 = (i__27055__auto___28892 + (1));
i__27055__auto___28892 = G__28893;
continue;
} else {
}
break;
}

var G__28887 = args28885.length;
switch (G__28887) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28885.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28888 = (function (f,blockable,meta28889){
this.f = f;
this.blockable = blockable;
this.meta28889 = meta28889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28890,meta28889__$1){
var self__ = this;
var _28890__$1 = this;
return (new cljs.core.async.t_cljs$core$async28888(self__.f,self__.blockable,meta28889__$1));
});

cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28890){
var self__ = this;
var _28890__$1 = this;
return self__.meta28889;
});

cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28889","meta28889",939680376,null)], null);
});

cljs.core.async.t_cljs$core$async28888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28888";

cljs.core.async.t_cljs$core$async28888.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28888");
});

cljs.core.async.__GT_t_cljs$core$async28888 = (function cljs$core$async$__GT_t_cljs$core$async28888(f__$1,blockable__$1,meta28889){
return (new cljs.core.async.t_cljs$core$async28888(f__$1,blockable__$1,meta28889));
});

}

return (new cljs.core.async.t_cljs$core$async28888(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28897 = [];
var len__27054__auto___28900 = arguments.length;
var i__27055__auto___28901 = (0);
while(true){
if((i__27055__auto___28901 < len__27054__auto___28900)){
args28897.push((arguments[i__27055__auto___28901]));

var G__28902 = (i__27055__auto___28901 + (1));
i__27055__auto___28901 = G__28902;
continue;
} else {
}
break;
}

var G__28899 = args28897.length;
switch (G__28899) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28897.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28904 = [];
var len__27054__auto___28907 = arguments.length;
var i__27055__auto___28908 = (0);
while(true){
if((i__27055__auto___28908 < len__27054__auto___28907)){
args28904.push((arguments[i__27055__auto___28908]));

var G__28909 = (i__27055__auto___28908 + (1));
i__27055__auto___28908 = G__28909;
continue;
} else {
}
break;
}

var G__28906 = args28904.length;
switch (G__28906) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28904.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28911 = [];
var len__27054__auto___28914 = arguments.length;
var i__27055__auto___28915 = (0);
while(true){
if((i__27055__auto___28915 < len__27054__auto___28914)){
args28911.push((arguments[i__27055__auto___28915]));

var G__28916 = (i__27055__auto___28915 + (1));
i__27055__auto___28915 = G__28916;
continue;
} else {
}
break;
}

var G__28913 = args28911.length;
switch (G__28913) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28911.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28918 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28918);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28918,ret){
return (function (){
return fn1.call(null,val_28918);
});})(val_28918,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28919 = [];
var len__27054__auto___28922 = arguments.length;
var i__27055__auto___28923 = (0);
while(true){
if((i__27055__auto___28923 < len__27054__auto___28922)){
args28919.push((arguments[i__27055__auto___28923]));

var G__28924 = (i__27055__auto___28923 + (1));
i__27055__auto___28923 = G__28924;
continue;
} else {
}
break;
}

var G__28921 = args28919.length;
switch (G__28921) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28919.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26894__auto___28926 = n;
var x_28927 = (0);
while(true){
if((x_28927 < n__26894__auto___28926)){
(a[x_28927] = (0));

var G__28928 = (x_28927 + (1));
x_28927 = G__28928;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28929 = (i + (1));
i = G__28929;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28933 = (function (alt_flag,flag,meta28934){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28934 = meta28934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28935,meta28934__$1){
var self__ = this;
var _28935__$1 = this;
return (new cljs.core.async.t_cljs$core$async28933(self__.alt_flag,self__.flag,meta28934__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28935){
var self__ = this;
var _28935__$1 = this;
return self__.meta28934;
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28934","meta28934",1261367875,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28933";

cljs.core.async.t_cljs$core$async28933.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28933");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28933 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28933(alt_flag__$1,flag__$1,meta28934){
return (new cljs.core.async.t_cljs$core$async28933(alt_flag__$1,flag__$1,meta28934));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28933(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28939 = (function (alt_handler,flag,cb,meta28940){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28940 = meta28940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28941,meta28940__$1){
var self__ = this;
var _28941__$1 = this;
return (new cljs.core.async.t_cljs$core$async28939(self__.alt_handler,self__.flag,self__.cb,meta28940__$1));
});

cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28941){
var self__ = this;
var _28941__$1 = this;
return self__.meta28940;
});

cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28939.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28940","meta28940",-153616626,null)], null);
});

cljs.core.async.t_cljs$core$async28939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28939";

cljs.core.async.t_cljs$core$async28939.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28939");
});

cljs.core.async.__GT_t_cljs$core$async28939 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28939(alt_handler__$1,flag__$1,cb__$1,meta28940){
return (new cljs.core.async.t_cljs$core$async28939(alt_handler__$1,flag__$1,cb__$1,meta28940));
});

}

return (new cljs.core.async.t_cljs$core$async28939(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28942_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28942_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28943_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28944 = (i + (1));
i = G__28944;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___28950 = arguments.length;
var i__27055__auto___28951 = (0);
while(true){
if((i__27055__auto___28951 < len__27054__auto___28950)){
args__27061__auto__.push((arguments[i__27055__auto___28951]));

var G__28952 = (i__27055__auto___28951 + (1));
i__27055__auto___28951 = G__28952;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28947){
var map__28948 = p__28947;
var map__28948__$1 = ((((!((map__28948 == null)))?((((map__28948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28948):map__28948);
var opts = map__28948__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28945){
var G__28946 = cljs.core.first.call(null,seq28945);
var seq28945__$1 = cljs.core.next.call(null,seq28945);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28946,seq28945__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28953 = [];
var len__27054__auto___29003 = arguments.length;
var i__27055__auto___29004 = (0);
while(true){
if((i__27055__auto___29004 < len__27054__auto___29003)){
args28953.push((arguments[i__27055__auto___29004]));

var G__29005 = (i__27055__auto___29004 + (1));
i__27055__auto___29004 = G__29005;
continue;
} else {
}
break;
}

var G__28955 = args28953.length;
switch (G__28955) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28953.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28840__auto___29007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___29007){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___29007){
return (function (state_28979){
var state_val_28980 = (state_28979[(1)]);
if((state_val_28980 === (7))){
var inst_28975 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28981_29008 = state_28979__$1;
(statearr_28981_29008[(2)] = inst_28975);

(statearr_28981_29008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (1))){
var state_28979__$1 = state_28979;
var statearr_28982_29009 = state_28979__$1;
(statearr_28982_29009[(2)] = null);

(statearr_28982_29009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (4))){
var inst_28958 = (state_28979[(7)]);
var inst_28958__$1 = (state_28979[(2)]);
var inst_28959 = (inst_28958__$1 == null);
var state_28979__$1 = (function (){var statearr_28983 = state_28979;
(statearr_28983[(7)] = inst_28958__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28959)){
var statearr_28984_29010 = state_28979__$1;
(statearr_28984_29010[(1)] = (5));

} else {
var statearr_28985_29011 = state_28979__$1;
(statearr_28985_29011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (13))){
var state_28979__$1 = state_28979;
var statearr_28986_29012 = state_28979__$1;
(statearr_28986_29012[(2)] = null);

(statearr_28986_29012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (6))){
var inst_28958 = (state_28979[(7)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28979__$1,(11),to,inst_28958);
} else {
if((state_val_28980 === (3))){
var inst_28977 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28979__$1,inst_28977);
} else {
if((state_val_28980 === (12))){
var state_28979__$1 = state_28979;
var statearr_28987_29013 = state_28979__$1;
(statearr_28987_29013[(2)] = null);

(statearr_28987_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (2))){
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28979__$1,(4),from);
} else {
if((state_val_28980 === (11))){
var inst_28968 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28968)){
var statearr_28988_29014 = state_28979__$1;
(statearr_28988_29014[(1)] = (12));

} else {
var statearr_28989_29015 = state_28979__$1;
(statearr_28989_29015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (9))){
var state_28979__$1 = state_28979;
var statearr_28990_29016 = state_28979__$1;
(statearr_28990_29016[(2)] = null);

(statearr_28990_29016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (5))){
var state_28979__$1 = state_28979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28991_29017 = state_28979__$1;
(statearr_28991_29017[(1)] = (8));

} else {
var statearr_28992_29018 = state_28979__$1;
(statearr_28992_29018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (14))){
var inst_28973 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28993_29019 = state_28979__$1;
(statearr_28993_29019[(2)] = inst_28973);

(statearr_28993_29019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (10))){
var inst_28965 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28994_29020 = state_28979__$1;
(statearr_28994_29020[(2)] = inst_28965);

(statearr_28994_29020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (8))){
var inst_28962 = cljs.core.async.close_BANG_.call(null,to);
var state_28979__$1 = state_28979;
var statearr_28995_29021 = state_28979__$1;
(statearr_28995_29021[(2)] = inst_28962);

(statearr_28995_29021[(1)] = (10));


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
});})(c__28840__auto___29007))
;
return ((function (switch__28728__auto__,c__28840__auto___29007){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_28999 = [null,null,null,null,null,null,null,null];
(statearr_28999[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_28999[(1)] = (1));

return statearr_28999;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_28979){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_28979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29000){if((e29000 instanceof Object)){
var ex__28732__auto__ = e29000;
var statearr_29001_29022 = state_28979;
(statearr_29001_29022[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29023 = state_28979;
state_28979 = G__29023;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_28979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_28979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___29007))
})();
var state__28842__auto__ = (function (){var statearr_29002 = f__28841__auto__.call(null);
(statearr_29002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29007);

return statearr_29002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___29007))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29211){
var vec__29212 = p__29211;
var v = cljs.core.nth.call(null,vec__29212,(0),null);
var p = cljs.core.nth.call(null,vec__29212,(1),null);
var job = vec__29212;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28840__auto___29398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(2),res,v);
} else {
if((state_val_29220 === (2))){
var inst_29216 = (state_29219[(2)]);
var inst_29217 = cljs.core.async.close_BANG_.call(null,res);
var state_29219__$1 = (function (){var statearr_29221 = state_29219;
(statearr_29221[(7)] = inst_29216);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
return null;
}
}
});})(c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results))
;
return ((function (switch__28728__auto__,c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_29225 = [null,null,null,null,null,null,null,null];
(statearr_29225[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__);

(statearr_29225[(1)] = (1));

return statearr_29225;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1 = (function (state_29219){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29226){if((e29226 instanceof Object)){
var ex__28732__auto__ = e29226;
var statearr_29227_29399 = state_29219;
(statearr_29227_29399[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29400 = state_29219;
state_29219 = G__29400;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results))
})();
var state__28842__auto__ = (function (){var statearr_29228 = f__28841__auto__.call(null);
(statearr_29228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29398);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___29398,res,vec__29212,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29229){
var vec__29230 = p__29229;
var v = cljs.core.nth.call(null,vec__29230,(0),null);
var p = cljs.core.nth.call(null,vec__29230,(1),null);
var job = vec__29230;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26894__auto___29401 = n;
var __29402 = (0);
while(true){
if((__29402 < n__26894__auto___29401)){
var G__29233_29403 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29233_29403) {
case "compute":
var c__28840__auto___29405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29402,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (__29402,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function (state_29246){
var state_val_29247 = (state_29246[(1)]);
if((state_val_29247 === (1))){
var state_29246__$1 = state_29246;
var statearr_29248_29406 = state_29246__$1;
(statearr_29248_29406[(2)] = null);

(statearr_29248_29406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (2))){
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29246__$1,(4),jobs);
} else {
if((state_val_29247 === (3))){
var inst_29244 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29246__$1,inst_29244);
} else {
if((state_val_29247 === (4))){
var inst_29236 = (state_29246[(2)]);
var inst_29237 = process.call(null,inst_29236);
var state_29246__$1 = state_29246;
if(cljs.core.truth_(inst_29237)){
var statearr_29249_29407 = state_29246__$1;
(statearr_29249_29407[(1)] = (5));

} else {
var statearr_29250_29408 = state_29246__$1;
(statearr_29250_29408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (5))){
var state_29246__$1 = state_29246;
var statearr_29251_29409 = state_29246__$1;
(statearr_29251_29409[(2)] = null);

(statearr_29251_29409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (6))){
var state_29246__$1 = state_29246;
var statearr_29252_29410 = state_29246__$1;
(statearr_29252_29410[(2)] = null);

(statearr_29252_29410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29247 === (7))){
var inst_29242 = (state_29246[(2)]);
var state_29246__$1 = state_29246;
var statearr_29253_29411 = state_29246__$1;
(statearr_29253_29411[(2)] = inst_29242);

(statearr_29253_29411[(1)] = (3));


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
});})(__29402,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
;
return ((function (__29402,switch__28728__auto__,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null];
(statearr_29257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1 = (function (state_29246){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__28732__auto__ = e29258;
var statearr_29259_29412 = state_29246;
(statearr_29259_29412[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29413 = state_29246;
state_29246 = G__29413;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = function(state_29246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1.call(this,state_29246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__;
})()
;})(__29402,switch__28728__auto__,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
})();
var state__28842__auto__ = (function (){var statearr_29260 = f__28841__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29405);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(__29402,c__28840__auto___29405,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
);


break;
case "async":
var c__28840__auto___29414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29402,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (__29402,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (1))){
var state_29273__$1 = state_29273;
var statearr_29275_29415 = state_29273__$1;
(statearr_29275_29415[(2)] = null);

(statearr_29275_29415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (2))){
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29273__$1,(4),jobs);
} else {
if((state_val_29274 === (3))){
var inst_29271 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29273__$1,inst_29271);
} else {
if((state_val_29274 === (4))){
var inst_29263 = (state_29273[(2)]);
var inst_29264 = async.call(null,inst_29263);
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29264)){
var statearr_29276_29416 = state_29273__$1;
(statearr_29276_29416[(1)] = (5));

} else {
var statearr_29277_29417 = state_29273__$1;
(statearr_29277_29417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (5))){
var state_29273__$1 = state_29273;
var statearr_29278_29418 = state_29273__$1;
(statearr_29278_29418[(2)] = null);

(statearr_29278_29418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (6))){
var state_29273__$1 = state_29273;
var statearr_29279_29419 = state_29273__$1;
(statearr_29279_29419[(2)] = null);

(statearr_29279_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (7))){
var inst_29269 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29280_29420 = state_29273__$1;
(statearr_29280_29420[(2)] = inst_29269);

(statearr_29280_29420[(1)] = (3));


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
});})(__29402,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
;
return ((function (__29402,switch__28728__auto__,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_29284 = [null,null,null,null,null,null,null];
(statearr_29284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__);

(statearr_29284[(1)] = (1));

return statearr_29284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1 = (function (state_29273){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29285){if((e29285 instanceof Object)){
var ex__28732__auto__ = e29285;
var statearr_29286_29421 = state_29273;
(statearr_29286_29421[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29422 = state_29273;
state_29273 = G__29422;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__;
})()
;})(__29402,switch__28728__auto__,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
})();
var state__28842__auto__ = (function (){var statearr_29287 = f__28841__auto__.call(null);
(statearr_29287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29414);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(__29402,c__28840__auto___29414,G__29233_29403,n__26894__auto___29401,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29423 = (__29402 + (1));
__29402 = G__29423;
continue;
} else {
}
break;
}

var c__28840__auto___29424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___29424,jobs,results,process,async){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___29424,jobs,results,process,async){
return (function (state_29309){
var state_val_29310 = (state_29309[(1)]);
if((state_val_29310 === (1))){
var state_29309__$1 = state_29309;
var statearr_29311_29425 = state_29309__$1;
(statearr_29311_29425[(2)] = null);

(statearr_29311_29425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (2))){
var state_29309__$1 = state_29309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29309__$1,(4),from);
} else {
if((state_val_29310 === (3))){
var inst_29307 = (state_29309[(2)]);
var state_29309__$1 = state_29309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29309__$1,inst_29307);
} else {
if((state_val_29310 === (4))){
var inst_29290 = (state_29309[(7)]);
var inst_29290__$1 = (state_29309[(2)]);
var inst_29291 = (inst_29290__$1 == null);
var state_29309__$1 = (function (){var statearr_29312 = state_29309;
(statearr_29312[(7)] = inst_29290__$1);

return statearr_29312;
})();
if(cljs.core.truth_(inst_29291)){
var statearr_29313_29426 = state_29309__$1;
(statearr_29313_29426[(1)] = (5));

} else {
var statearr_29314_29427 = state_29309__$1;
(statearr_29314_29427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (5))){
var inst_29293 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29309__$1 = state_29309;
var statearr_29315_29428 = state_29309__$1;
(statearr_29315_29428[(2)] = inst_29293);

(statearr_29315_29428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (6))){
var inst_29295 = (state_29309[(8)]);
var inst_29290 = (state_29309[(7)]);
var inst_29295__$1 = cljs.core.async.chan.call(null,(1));
var inst_29296 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29297 = [inst_29290,inst_29295__$1];
var inst_29298 = (new cljs.core.PersistentVector(null,2,(5),inst_29296,inst_29297,null));
var state_29309__$1 = (function (){var statearr_29316 = state_29309;
(statearr_29316[(8)] = inst_29295__$1);

return statearr_29316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29309__$1,(8),jobs,inst_29298);
} else {
if((state_val_29310 === (7))){
var inst_29305 = (state_29309[(2)]);
var state_29309__$1 = state_29309;
var statearr_29317_29429 = state_29309__$1;
(statearr_29317_29429[(2)] = inst_29305);

(statearr_29317_29429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29310 === (8))){
var inst_29295 = (state_29309[(8)]);
var inst_29300 = (state_29309[(2)]);
var state_29309__$1 = (function (){var statearr_29318 = state_29309;
(statearr_29318[(9)] = inst_29300);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29309__$1,(9),results,inst_29295);
} else {
if((state_val_29310 === (9))){
var inst_29302 = (state_29309[(2)]);
var state_29309__$1 = (function (){var statearr_29319 = state_29309;
(statearr_29319[(10)] = inst_29302);

return statearr_29319;
})();
var statearr_29320_29430 = state_29309__$1;
(statearr_29320_29430[(2)] = null);

(statearr_29320_29430[(1)] = (2));


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
});})(c__28840__auto___29424,jobs,results,process,async))
;
return ((function (switch__28728__auto__,c__28840__auto___29424,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_29324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__);

(statearr_29324[(1)] = (1));

return statearr_29324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1 = (function (state_29309){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29325){if((e29325 instanceof Object)){
var ex__28732__auto__ = e29325;
var statearr_29326_29431 = state_29309;
(statearr_29326_29431[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29432 = state_29309;
state_29309 = G__29432;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = function(state_29309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1.call(this,state_29309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___29424,jobs,results,process,async))
})();
var state__28842__auto__ = (function (){var statearr_29327 = f__28841__auto__.call(null);
(statearr_29327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29424);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___29424,jobs,results,process,async))
);


var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__,jobs,results,process,async){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__,jobs,results,process,async){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var inst_29361 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29367_29433 = state_29365__$1;
(statearr_29367_29433[(2)] = inst_29361);

(statearr_29367_29433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (20))){
var state_29365__$1 = state_29365;
var statearr_29368_29434 = state_29365__$1;
(statearr_29368_29434[(2)] = null);

(statearr_29368_29434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (1))){
var state_29365__$1 = state_29365;
var statearr_29369_29435 = state_29365__$1;
(statearr_29369_29435[(2)] = null);

(statearr_29369_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (4))){
var inst_29330 = (state_29365[(7)]);
var inst_29330__$1 = (state_29365[(2)]);
var inst_29331 = (inst_29330__$1 == null);
var state_29365__$1 = (function (){var statearr_29370 = state_29365;
(statearr_29370[(7)] = inst_29330__$1);

return statearr_29370;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29371_29436 = state_29365__$1;
(statearr_29371_29436[(1)] = (5));

} else {
var statearr_29372_29437 = state_29365__$1;
(statearr_29372_29437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (15))){
var inst_29343 = (state_29365[(8)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29365__$1,(18),to,inst_29343);
} else {
if((state_val_29366 === (21))){
var inst_29356 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29373_29438 = state_29365__$1;
(statearr_29373_29438[(2)] = inst_29356);

(statearr_29373_29438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (13))){
var inst_29358 = (state_29365[(2)]);
var state_29365__$1 = (function (){var statearr_29374 = state_29365;
(statearr_29374[(9)] = inst_29358);

return statearr_29374;
})();
var statearr_29375_29439 = state_29365__$1;
(statearr_29375_29439[(2)] = null);

(statearr_29375_29439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (6))){
var inst_29330 = (state_29365[(7)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(11),inst_29330);
} else {
if((state_val_29366 === (17))){
var inst_29351 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
if(cljs.core.truth_(inst_29351)){
var statearr_29376_29440 = state_29365__$1;
(statearr_29376_29440[(1)] = (19));

} else {
var statearr_29377_29441 = state_29365__$1;
(statearr_29377_29441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (3))){
var inst_29363 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (12))){
var inst_29340 = (state_29365[(10)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(14),inst_29340);
} else {
if((state_val_29366 === (2))){
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29365__$1,(4),results);
} else {
if((state_val_29366 === (19))){
var state_29365__$1 = state_29365;
var statearr_29378_29442 = state_29365__$1;
(statearr_29378_29442[(2)] = null);

(statearr_29378_29442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (11))){
var inst_29340 = (state_29365[(2)]);
var state_29365__$1 = (function (){var statearr_29379 = state_29365;
(statearr_29379[(10)] = inst_29340);

return statearr_29379;
})();
var statearr_29380_29443 = state_29365__$1;
(statearr_29380_29443[(2)] = null);

(statearr_29380_29443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (9))){
var state_29365__$1 = state_29365;
var statearr_29381_29444 = state_29365__$1;
(statearr_29381_29444[(2)] = null);

(statearr_29381_29444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (5))){
var state_29365__$1 = state_29365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29382_29445 = state_29365__$1;
(statearr_29382_29445[(1)] = (8));

} else {
var statearr_29383_29446 = state_29365__$1;
(statearr_29383_29446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (14))){
var inst_29343 = (state_29365[(8)]);
var inst_29345 = (state_29365[(11)]);
var inst_29343__$1 = (state_29365[(2)]);
var inst_29344 = (inst_29343__$1 == null);
var inst_29345__$1 = cljs.core.not.call(null,inst_29344);
var state_29365__$1 = (function (){var statearr_29384 = state_29365;
(statearr_29384[(8)] = inst_29343__$1);

(statearr_29384[(11)] = inst_29345__$1);

return statearr_29384;
})();
if(inst_29345__$1){
var statearr_29385_29447 = state_29365__$1;
(statearr_29385_29447[(1)] = (15));

} else {
var statearr_29386_29448 = state_29365__$1;
(statearr_29386_29448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (16))){
var inst_29345 = (state_29365[(11)]);
var state_29365__$1 = state_29365;
var statearr_29387_29449 = state_29365__$1;
(statearr_29387_29449[(2)] = inst_29345);

(statearr_29387_29449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (10))){
var inst_29337 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29388_29450 = state_29365__$1;
(statearr_29388_29450[(2)] = inst_29337);

(statearr_29388_29450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (18))){
var inst_29348 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29389_29451 = state_29365__$1;
(statearr_29389_29451[(2)] = inst_29348);

(statearr_29389_29451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29366 === (8))){
var inst_29334 = cljs.core.async.close_BANG_.call(null,to);
var state_29365__$1 = state_29365;
var statearr_29390_29452 = state_29365__$1;
(statearr_29390_29452[(2)] = inst_29334);

(statearr_29390_29452[(1)] = (10));


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
});})(c__28840__auto__,jobs,results,process,async))
;
return ((function (switch__28728__auto__,c__28840__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_29394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__);

(statearr_29394[(1)] = (1));

return statearr_29394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1 = (function (state_29365){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29395){if((e29395 instanceof Object)){
var ex__28732__auto__ = e29395;
var statearr_29396_29453 = state_29365;
(statearr_29396_29453[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29454 = state_29365;
state_29365 = G__29454;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__,jobs,results,process,async))
})();
var state__28842__auto__ = (function (){var statearr_29397 = f__28841__auto__.call(null);
(statearr_29397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_29397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__,jobs,results,process,async))
);

return c__28840__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29455 = [];
var len__27054__auto___29458 = arguments.length;
var i__27055__auto___29459 = (0);
while(true){
if((i__27055__auto___29459 < len__27054__auto___29458)){
args29455.push((arguments[i__27055__auto___29459]));

var G__29460 = (i__27055__auto___29459 + (1));
i__27055__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29457 = args29455.length;
switch (G__29457) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29455.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29462 = [];
var len__27054__auto___29465 = arguments.length;
var i__27055__auto___29466 = (0);
while(true){
if((i__27055__auto___29466 < len__27054__auto___29465)){
args29462.push((arguments[i__27055__auto___29466]));

var G__29467 = (i__27055__auto___29466 + (1));
i__27055__auto___29466 = G__29467;
continue;
} else {
}
break;
}

var G__29464 = args29462.length;
switch (G__29464) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29462.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29469 = [];
var len__27054__auto___29522 = arguments.length;
var i__27055__auto___29523 = (0);
while(true){
if((i__27055__auto___29523 < len__27054__auto___29522)){
args29469.push((arguments[i__27055__auto___29523]));

var G__29524 = (i__27055__auto___29523 + (1));
i__27055__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29471 = args29469.length;
switch (G__29471) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29469.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28840__auto___29526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___29526,tc,fc){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___29526,tc,fc){
return (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29493 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29499_29527 = state_29497__$1;
(statearr_29499_29527[(2)] = inst_29493);

(statearr_29499_29527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var state_29497__$1 = state_29497;
var statearr_29500_29528 = state_29497__$1;
(statearr_29500_29528[(2)] = null);

(statearr_29500_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29474 = (state_29497[(7)]);
var inst_29474__$1 = (state_29497[(2)]);
var inst_29475 = (inst_29474__$1 == null);
var state_29497__$1 = (function (){var statearr_29501 = state_29497;
(statearr_29501[(7)] = inst_29474__$1);

return statearr_29501;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29502_29529 = state_29497__$1;
(statearr_29502_29529[(1)] = (5));

} else {
var statearr_29503_29530 = state_29497__$1;
(statearr_29503_29530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (13))){
var state_29497__$1 = state_29497;
var statearr_29504_29531 = state_29497__$1;
(statearr_29504_29531[(2)] = null);

(statearr_29504_29531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (6))){
var inst_29474 = (state_29497[(7)]);
var inst_29480 = p.call(null,inst_29474);
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29480)){
var statearr_29505_29532 = state_29497__$1;
(statearr_29505_29532[(1)] = (9));

} else {
var statearr_29506_29533 = state_29497__$1;
(statearr_29506_29533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (12))){
var state_29497__$1 = state_29497;
var statearr_29507_29534 = state_29497__$1;
(statearr_29507_29534[(2)] = null);

(statearr_29507_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (2))){
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29497__$1,(4),ch);
} else {
if((state_val_29498 === (11))){
var inst_29474 = (state_29497[(7)]);
var inst_29484 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29497__$1,(8),inst_29484,inst_29474);
} else {
if((state_val_29498 === (9))){
var state_29497__$1 = state_29497;
var statearr_29508_29535 = state_29497__$1;
(statearr_29508_29535[(2)] = tc);

(statearr_29508_29535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (5))){
var inst_29477 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29478 = cljs.core.async.close_BANG_.call(null,fc);
var state_29497__$1 = (function (){var statearr_29509 = state_29497;
(statearr_29509[(8)] = inst_29477);

return statearr_29509;
})();
var statearr_29510_29536 = state_29497__$1;
(statearr_29510_29536[(2)] = inst_29478);

(statearr_29510_29536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (14))){
var inst_29491 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29511_29537 = state_29497__$1;
(statearr_29511_29537[(2)] = inst_29491);

(statearr_29511_29537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var state_29497__$1 = state_29497;
var statearr_29512_29538 = state_29497__$1;
(statearr_29512_29538[(2)] = fc);

(statearr_29512_29538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29486 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29486)){
var statearr_29513_29539 = state_29497__$1;
(statearr_29513_29539[(1)] = (12));

} else {
var statearr_29514_29540 = state_29497__$1;
(statearr_29514_29540[(1)] = (13));

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
});})(c__28840__auto___29526,tc,fc))
;
return ((function (switch__28728__auto__,c__28840__auto___29526,tc,fc){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_29518 = [null,null,null,null,null,null,null,null,null];
(statearr_29518[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_29518[(1)] = (1));

return statearr_29518;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_29497){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29519){if((e29519 instanceof Object)){
var ex__28732__auto__ = e29519;
var statearr_29520_29541 = state_29497;
(statearr_29520_29541[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29542 = state_29497;
state_29497 = G__29542;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___29526,tc,fc))
})();
var state__28842__auto__ = (function (){var statearr_29521 = f__28841__auto__.call(null);
(statearr_29521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___29526);

return statearr_29521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___29526,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__){
return (function (state_29606){
var state_val_29607 = (state_29606[(1)]);
if((state_val_29607 === (7))){
var inst_29602 = (state_29606[(2)]);
var state_29606__$1 = state_29606;
var statearr_29608_29629 = state_29606__$1;
(statearr_29608_29629[(2)] = inst_29602);

(statearr_29608_29629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (1))){
var inst_29586 = init;
var state_29606__$1 = (function (){var statearr_29609 = state_29606;
(statearr_29609[(7)] = inst_29586);

return statearr_29609;
})();
var statearr_29610_29630 = state_29606__$1;
(statearr_29610_29630[(2)] = null);

(statearr_29610_29630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (4))){
var inst_29589 = (state_29606[(8)]);
var inst_29589__$1 = (state_29606[(2)]);
var inst_29590 = (inst_29589__$1 == null);
var state_29606__$1 = (function (){var statearr_29611 = state_29606;
(statearr_29611[(8)] = inst_29589__$1);

return statearr_29611;
})();
if(cljs.core.truth_(inst_29590)){
var statearr_29612_29631 = state_29606__$1;
(statearr_29612_29631[(1)] = (5));

} else {
var statearr_29613_29632 = state_29606__$1;
(statearr_29613_29632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (6))){
var inst_29586 = (state_29606[(7)]);
var inst_29589 = (state_29606[(8)]);
var inst_29593 = (state_29606[(9)]);
var inst_29593__$1 = f.call(null,inst_29586,inst_29589);
var inst_29594 = cljs.core.reduced_QMARK_.call(null,inst_29593__$1);
var state_29606__$1 = (function (){var statearr_29614 = state_29606;
(statearr_29614[(9)] = inst_29593__$1);

return statearr_29614;
})();
if(inst_29594){
var statearr_29615_29633 = state_29606__$1;
(statearr_29615_29633[(1)] = (8));

} else {
var statearr_29616_29634 = state_29606__$1;
(statearr_29616_29634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (3))){
var inst_29604 = (state_29606[(2)]);
var state_29606__$1 = state_29606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29606__$1,inst_29604);
} else {
if((state_val_29607 === (2))){
var state_29606__$1 = state_29606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29606__$1,(4),ch);
} else {
if((state_val_29607 === (9))){
var inst_29593 = (state_29606[(9)]);
var inst_29586 = inst_29593;
var state_29606__$1 = (function (){var statearr_29617 = state_29606;
(statearr_29617[(7)] = inst_29586);

return statearr_29617;
})();
var statearr_29618_29635 = state_29606__$1;
(statearr_29618_29635[(2)] = null);

(statearr_29618_29635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (5))){
var inst_29586 = (state_29606[(7)]);
var state_29606__$1 = state_29606;
var statearr_29619_29636 = state_29606__$1;
(statearr_29619_29636[(2)] = inst_29586);

(statearr_29619_29636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (10))){
var inst_29600 = (state_29606[(2)]);
var state_29606__$1 = state_29606;
var statearr_29620_29637 = state_29606__$1;
(statearr_29620_29637[(2)] = inst_29600);

(statearr_29620_29637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29607 === (8))){
var inst_29593 = (state_29606[(9)]);
var inst_29596 = cljs.core.deref.call(null,inst_29593);
var state_29606__$1 = state_29606;
var statearr_29621_29638 = state_29606__$1;
(statearr_29621_29638[(2)] = inst_29596);

(statearr_29621_29638[(1)] = (10));


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
});})(c__28840__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28729__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28729__auto____0 = (function (){
var statearr_29625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29625[(0)] = cljs$core$async$reduce_$_state_machine__28729__auto__);

(statearr_29625[(1)] = (1));

return statearr_29625;
});
var cljs$core$async$reduce_$_state_machine__28729__auto____1 = (function (state_29606){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29626){if((e29626 instanceof Object)){
var ex__28732__auto__ = e29626;
var statearr_29627_29639 = state_29606;
(statearr_29627_29639[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29640 = state_29606;
state_29606 = G__29640;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28729__auto__ = function(state_29606){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28729__auto____1.call(this,state_29606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28729__auto____0;
cljs$core$async$reduce_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28729__auto____1;
return cljs$core$async$reduce_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__))
})();
var state__28842__auto__ = (function (){var statearr_29628 = f__28841__auto__.call(null);
(statearr_29628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_29628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__))
);

return c__28840__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__,f__$1){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__,f__$1){
return (function (state_29660){
var state_val_29661 = (state_29660[(1)]);
if((state_val_29661 === (1))){
var inst_29655 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29660__$1,(2),inst_29655);
} else {
if((state_val_29661 === (2))){
var inst_29657 = (state_29660[(2)]);
var inst_29658 = f__$1.call(null,inst_29657);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29660__$1,inst_29658);
} else {
return null;
}
}
});})(c__28840__auto__,f__$1))
;
return ((function (switch__28728__auto__,c__28840__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28729__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28729__auto____0 = (function (){
var statearr_29665 = [null,null,null,null,null,null,null];
(statearr_29665[(0)] = cljs$core$async$transduce_$_state_machine__28729__auto__);

(statearr_29665[(1)] = (1));

return statearr_29665;
});
var cljs$core$async$transduce_$_state_machine__28729__auto____1 = (function (state_29660){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29666){if((e29666 instanceof Object)){
var ex__28732__auto__ = e29666;
var statearr_29667_29669 = state_29660;
(statearr_29667_29669[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29670 = state_29660;
state_29660 = G__29670;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28729__auto__ = function(state_29660){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28729__auto____1.call(this,state_29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28729__auto____0;
cljs$core$async$transduce_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28729__auto____1;
return cljs$core$async$transduce_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__,f__$1))
})();
var state__28842__auto__ = (function (){var statearr_29668 = f__28841__auto__.call(null);
(statearr_29668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_29668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__,f__$1))
);

return c__28840__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29671 = [];
var len__27054__auto___29723 = arguments.length;
var i__27055__auto___29724 = (0);
while(true){
if((i__27055__auto___29724 < len__27054__auto___29723)){
args29671.push((arguments[i__27055__auto___29724]));

var G__29725 = (i__27055__auto___29724 + (1));
i__27055__auto___29724 = G__29725;
continue;
} else {
}
break;
}

var G__29673 = args29671.length;
switch (G__29673) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29671.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__){
return (function (state_29698){
var state_val_29699 = (state_29698[(1)]);
if((state_val_29699 === (7))){
var inst_29680 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29700_29727 = state_29698__$1;
(statearr_29700_29727[(2)] = inst_29680);

(statearr_29700_29727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (1))){
var inst_29674 = cljs.core.seq.call(null,coll);
var inst_29675 = inst_29674;
var state_29698__$1 = (function (){var statearr_29701 = state_29698;
(statearr_29701[(7)] = inst_29675);

return statearr_29701;
})();
var statearr_29702_29728 = state_29698__$1;
(statearr_29702_29728[(2)] = null);

(statearr_29702_29728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (4))){
var inst_29675 = (state_29698[(7)]);
var inst_29678 = cljs.core.first.call(null,inst_29675);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29698__$1,(7),ch,inst_29678);
} else {
if((state_val_29699 === (13))){
var inst_29692 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29703_29729 = state_29698__$1;
(statearr_29703_29729[(2)] = inst_29692);

(statearr_29703_29729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (6))){
var inst_29683 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29683)){
var statearr_29704_29730 = state_29698__$1;
(statearr_29704_29730[(1)] = (8));

} else {
var statearr_29705_29731 = state_29698__$1;
(statearr_29705_29731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (3))){
var inst_29696 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29698__$1,inst_29696);
} else {
if((state_val_29699 === (12))){
var state_29698__$1 = state_29698;
var statearr_29706_29732 = state_29698__$1;
(statearr_29706_29732[(2)] = null);

(statearr_29706_29732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (2))){
var inst_29675 = (state_29698[(7)]);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29675)){
var statearr_29707_29733 = state_29698__$1;
(statearr_29707_29733[(1)] = (4));

} else {
var statearr_29708_29734 = state_29698__$1;
(statearr_29708_29734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (11))){
var inst_29689 = cljs.core.async.close_BANG_.call(null,ch);
var state_29698__$1 = state_29698;
var statearr_29709_29735 = state_29698__$1;
(statearr_29709_29735[(2)] = inst_29689);

(statearr_29709_29735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (9))){
var state_29698__$1 = state_29698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29710_29736 = state_29698__$1;
(statearr_29710_29736[(1)] = (11));

} else {
var statearr_29711_29737 = state_29698__$1;
(statearr_29711_29737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (5))){
var inst_29675 = (state_29698[(7)]);
var state_29698__$1 = state_29698;
var statearr_29712_29738 = state_29698__$1;
(statearr_29712_29738[(2)] = inst_29675);

(statearr_29712_29738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (10))){
var inst_29694 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29713_29739 = state_29698__$1;
(statearr_29713_29739[(2)] = inst_29694);

(statearr_29713_29739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (8))){
var inst_29675 = (state_29698[(7)]);
var inst_29685 = cljs.core.next.call(null,inst_29675);
var inst_29675__$1 = inst_29685;
var state_29698__$1 = (function (){var statearr_29714 = state_29698;
(statearr_29714[(7)] = inst_29675__$1);

return statearr_29714;
})();
var statearr_29715_29740 = state_29698__$1;
(statearr_29715_29740[(2)] = null);

(statearr_29715_29740[(1)] = (2));


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
});})(c__28840__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_29719 = [null,null,null,null,null,null,null,null];
(statearr_29719[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_29719[(1)] = (1));

return statearr_29719;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_29698){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_29698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e29720){if((e29720 instanceof Object)){
var ex__28732__auto__ = e29720;
var statearr_29721_29741 = state_29698;
(statearr_29721_29741[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29742 = state_29698;
state_29698 = G__29742;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_29698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_29698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__))
})();
var state__28842__auto__ = (function (){var statearr_29722 = f__28841__auto__.call(null);
(statearr_29722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_29722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__))
);

return c__28840__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29968 = (function (mult,ch,cs,meta29969){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29969 = meta29969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29970,meta29969__$1){
var self__ = this;
var _29970__$1 = this;
return (new cljs.core.async.t_cljs$core$async29968(self__.mult,self__.ch,self__.cs,meta29969__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29970){
var self__ = this;
var _29970__$1 = this;
return self__.meta29969;
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29969","meta29969",846958596,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29968";

cljs.core.async.t_cljs$core$async29968.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29968");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29968 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29968(mult__$1,ch__$1,cs__$1,meta29969){
return (new cljs.core.async.t_cljs$core$async29968(mult__$1,ch__$1,cs__$1,meta29969));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29968(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28840__auto___30193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___30193,cs,m,dchan,dctr,done){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___30193,cs,m,dchan,dctr,done){
return (function (state_30105){
var state_val_30106 = (state_30105[(1)]);
if((state_val_30106 === (7))){
var inst_30101 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30107_30194 = state_30105__$1;
(statearr_30107_30194[(2)] = inst_30101);

(statearr_30107_30194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (20))){
var inst_30004 = (state_30105[(7)]);
var inst_30016 = cljs.core.first.call(null,inst_30004);
var inst_30017 = cljs.core.nth.call(null,inst_30016,(0),null);
var inst_30018 = cljs.core.nth.call(null,inst_30016,(1),null);
var state_30105__$1 = (function (){var statearr_30108 = state_30105;
(statearr_30108[(8)] = inst_30017);

return statearr_30108;
})();
if(cljs.core.truth_(inst_30018)){
var statearr_30109_30195 = state_30105__$1;
(statearr_30109_30195[(1)] = (22));

} else {
var statearr_30110_30196 = state_30105__$1;
(statearr_30110_30196[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (27))){
var inst_30053 = (state_30105[(9)]);
var inst_30046 = (state_30105[(10)]);
var inst_30048 = (state_30105[(11)]);
var inst_29973 = (state_30105[(12)]);
var inst_30053__$1 = cljs.core._nth.call(null,inst_30046,inst_30048);
var inst_30054 = cljs.core.async.put_BANG_.call(null,inst_30053__$1,inst_29973,done);
var state_30105__$1 = (function (){var statearr_30111 = state_30105;
(statearr_30111[(9)] = inst_30053__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30054)){
var statearr_30112_30197 = state_30105__$1;
(statearr_30112_30197[(1)] = (30));

} else {
var statearr_30113_30198 = state_30105__$1;
(statearr_30113_30198[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (1))){
var state_30105__$1 = state_30105;
var statearr_30114_30199 = state_30105__$1;
(statearr_30114_30199[(2)] = null);

(statearr_30114_30199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (24))){
var inst_30004 = (state_30105[(7)]);
var inst_30023 = (state_30105[(2)]);
var inst_30024 = cljs.core.next.call(null,inst_30004);
var inst_29982 = inst_30024;
var inst_29983 = null;
var inst_29984 = (0);
var inst_29985 = (0);
var state_30105__$1 = (function (){var statearr_30115 = state_30105;
(statearr_30115[(13)] = inst_29982);

(statearr_30115[(14)] = inst_29985);

(statearr_30115[(15)] = inst_30023);

(statearr_30115[(16)] = inst_29983);

(statearr_30115[(17)] = inst_29984);

return statearr_30115;
})();
var statearr_30116_30200 = state_30105__$1;
(statearr_30116_30200[(2)] = null);

(statearr_30116_30200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (39))){
var state_30105__$1 = state_30105;
var statearr_30120_30201 = state_30105__$1;
(statearr_30120_30201[(2)] = null);

(statearr_30120_30201[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (4))){
var inst_29973 = (state_30105[(12)]);
var inst_29973__$1 = (state_30105[(2)]);
var inst_29974 = (inst_29973__$1 == null);
var state_30105__$1 = (function (){var statearr_30121 = state_30105;
(statearr_30121[(12)] = inst_29973__$1);

return statearr_30121;
})();
if(cljs.core.truth_(inst_29974)){
var statearr_30122_30202 = state_30105__$1;
(statearr_30122_30202[(1)] = (5));

} else {
var statearr_30123_30203 = state_30105__$1;
(statearr_30123_30203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (15))){
var inst_29982 = (state_30105[(13)]);
var inst_29985 = (state_30105[(14)]);
var inst_29983 = (state_30105[(16)]);
var inst_29984 = (state_30105[(17)]);
var inst_30000 = (state_30105[(2)]);
var inst_30001 = (inst_29985 + (1));
var tmp30117 = inst_29982;
var tmp30118 = inst_29983;
var tmp30119 = inst_29984;
var inst_29982__$1 = tmp30117;
var inst_29983__$1 = tmp30118;
var inst_29984__$1 = tmp30119;
var inst_29985__$1 = inst_30001;
var state_30105__$1 = (function (){var statearr_30124 = state_30105;
(statearr_30124[(13)] = inst_29982__$1);

(statearr_30124[(14)] = inst_29985__$1);

(statearr_30124[(16)] = inst_29983__$1);

(statearr_30124[(18)] = inst_30000);

(statearr_30124[(17)] = inst_29984__$1);

return statearr_30124;
})();
var statearr_30125_30204 = state_30105__$1;
(statearr_30125_30204[(2)] = null);

(statearr_30125_30204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (21))){
var inst_30027 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30129_30205 = state_30105__$1;
(statearr_30129_30205[(2)] = inst_30027);

(statearr_30129_30205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (31))){
var inst_30053 = (state_30105[(9)]);
var inst_30057 = done.call(null,null);
var inst_30058 = cljs.core.async.untap_STAR_.call(null,m,inst_30053);
var state_30105__$1 = (function (){var statearr_30130 = state_30105;
(statearr_30130[(19)] = inst_30057);

return statearr_30130;
})();
var statearr_30131_30206 = state_30105__$1;
(statearr_30131_30206[(2)] = inst_30058);

(statearr_30131_30206[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (32))){
var inst_30045 = (state_30105[(20)]);
var inst_30047 = (state_30105[(21)]);
var inst_30046 = (state_30105[(10)]);
var inst_30048 = (state_30105[(11)]);
var inst_30060 = (state_30105[(2)]);
var inst_30061 = (inst_30048 + (1));
var tmp30126 = inst_30045;
var tmp30127 = inst_30047;
var tmp30128 = inst_30046;
var inst_30045__$1 = tmp30126;
var inst_30046__$1 = tmp30128;
var inst_30047__$1 = tmp30127;
var inst_30048__$1 = inst_30061;
var state_30105__$1 = (function (){var statearr_30132 = state_30105;
(statearr_30132[(20)] = inst_30045__$1);

(statearr_30132[(22)] = inst_30060);

(statearr_30132[(21)] = inst_30047__$1);

(statearr_30132[(10)] = inst_30046__$1);

(statearr_30132[(11)] = inst_30048__$1);

return statearr_30132;
})();
var statearr_30133_30207 = state_30105__$1;
(statearr_30133_30207[(2)] = null);

(statearr_30133_30207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (40))){
var inst_30073 = (state_30105[(23)]);
var inst_30077 = done.call(null,null);
var inst_30078 = cljs.core.async.untap_STAR_.call(null,m,inst_30073);
var state_30105__$1 = (function (){var statearr_30134 = state_30105;
(statearr_30134[(24)] = inst_30077);

return statearr_30134;
})();
var statearr_30135_30208 = state_30105__$1;
(statearr_30135_30208[(2)] = inst_30078);

(statearr_30135_30208[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (33))){
var inst_30064 = (state_30105[(25)]);
var inst_30066 = cljs.core.chunked_seq_QMARK_.call(null,inst_30064);
var state_30105__$1 = state_30105;
if(inst_30066){
var statearr_30136_30209 = state_30105__$1;
(statearr_30136_30209[(1)] = (36));

} else {
var statearr_30137_30210 = state_30105__$1;
(statearr_30137_30210[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (13))){
var inst_29994 = (state_30105[(26)]);
var inst_29997 = cljs.core.async.close_BANG_.call(null,inst_29994);
var state_30105__$1 = state_30105;
var statearr_30138_30211 = state_30105__$1;
(statearr_30138_30211[(2)] = inst_29997);

(statearr_30138_30211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (22))){
var inst_30017 = (state_30105[(8)]);
var inst_30020 = cljs.core.async.close_BANG_.call(null,inst_30017);
var state_30105__$1 = state_30105;
var statearr_30139_30212 = state_30105__$1;
(statearr_30139_30212[(2)] = inst_30020);

(statearr_30139_30212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (36))){
var inst_30064 = (state_30105[(25)]);
var inst_30068 = cljs.core.chunk_first.call(null,inst_30064);
var inst_30069 = cljs.core.chunk_rest.call(null,inst_30064);
var inst_30070 = cljs.core.count.call(null,inst_30068);
var inst_30045 = inst_30069;
var inst_30046 = inst_30068;
var inst_30047 = inst_30070;
var inst_30048 = (0);
var state_30105__$1 = (function (){var statearr_30140 = state_30105;
(statearr_30140[(20)] = inst_30045);

(statearr_30140[(21)] = inst_30047);

(statearr_30140[(10)] = inst_30046);

(statearr_30140[(11)] = inst_30048);

return statearr_30140;
})();
var statearr_30141_30213 = state_30105__$1;
(statearr_30141_30213[(2)] = null);

(statearr_30141_30213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (41))){
var inst_30064 = (state_30105[(25)]);
var inst_30080 = (state_30105[(2)]);
var inst_30081 = cljs.core.next.call(null,inst_30064);
var inst_30045 = inst_30081;
var inst_30046 = null;
var inst_30047 = (0);
var inst_30048 = (0);
var state_30105__$1 = (function (){var statearr_30142 = state_30105;
(statearr_30142[(20)] = inst_30045);

(statearr_30142[(21)] = inst_30047);

(statearr_30142[(27)] = inst_30080);

(statearr_30142[(10)] = inst_30046);

(statearr_30142[(11)] = inst_30048);

return statearr_30142;
})();
var statearr_30143_30214 = state_30105__$1;
(statearr_30143_30214[(2)] = null);

(statearr_30143_30214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (43))){
var state_30105__$1 = state_30105;
var statearr_30144_30215 = state_30105__$1;
(statearr_30144_30215[(2)] = null);

(statearr_30144_30215[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (29))){
var inst_30089 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30145_30216 = state_30105__$1;
(statearr_30145_30216[(2)] = inst_30089);

(statearr_30145_30216[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (44))){
var inst_30098 = (state_30105[(2)]);
var state_30105__$1 = (function (){var statearr_30146 = state_30105;
(statearr_30146[(28)] = inst_30098);

return statearr_30146;
})();
var statearr_30147_30217 = state_30105__$1;
(statearr_30147_30217[(2)] = null);

(statearr_30147_30217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (6))){
var inst_30037 = (state_30105[(29)]);
var inst_30036 = cljs.core.deref.call(null,cs);
var inst_30037__$1 = cljs.core.keys.call(null,inst_30036);
var inst_30038 = cljs.core.count.call(null,inst_30037__$1);
var inst_30039 = cljs.core.reset_BANG_.call(null,dctr,inst_30038);
var inst_30044 = cljs.core.seq.call(null,inst_30037__$1);
var inst_30045 = inst_30044;
var inst_30046 = null;
var inst_30047 = (0);
var inst_30048 = (0);
var state_30105__$1 = (function (){var statearr_30148 = state_30105;
(statearr_30148[(20)] = inst_30045);

(statearr_30148[(21)] = inst_30047);

(statearr_30148[(30)] = inst_30039);

(statearr_30148[(29)] = inst_30037__$1);

(statearr_30148[(10)] = inst_30046);

(statearr_30148[(11)] = inst_30048);

return statearr_30148;
})();
var statearr_30149_30218 = state_30105__$1;
(statearr_30149_30218[(2)] = null);

(statearr_30149_30218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (28))){
var inst_30045 = (state_30105[(20)]);
var inst_30064 = (state_30105[(25)]);
var inst_30064__$1 = cljs.core.seq.call(null,inst_30045);
var state_30105__$1 = (function (){var statearr_30150 = state_30105;
(statearr_30150[(25)] = inst_30064__$1);

return statearr_30150;
})();
if(inst_30064__$1){
var statearr_30151_30219 = state_30105__$1;
(statearr_30151_30219[(1)] = (33));

} else {
var statearr_30152_30220 = state_30105__$1;
(statearr_30152_30220[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (25))){
var inst_30047 = (state_30105[(21)]);
var inst_30048 = (state_30105[(11)]);
var inst_30050 = (inst_30048 < inst_30047);
var inst_30051 = inst_30050;
var state_30105__$1 = state_30105;
if(cljs.core.truth_(inst_30051)){
var statearr_30153_30221 = state_30105__$1;
(statearr_30153_30221[(1)] = (27));

} else {
var statearr_30154_30222 = state_30105__$1;
(statearr_30154_30222[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (34))){
var state_30105__$1 = state_30105;
var statearr_30155_30223 = state_30105__$1;
(statearr_30155_30223[(2)] = null);

(statearr_30155_30223[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (17))){
var state_30105__$1 = state_30105;
var statearr_30156_30224 = state_30105__$1;
(statearr_30156_30224[(2)] = null);

(statearr_30156_30224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (3))){
var inst_30103 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30105__$1,inst_30103);
} else {
if((state_val_30106 === (12))){
var inst_30032 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30157_30225 = state_30105__$1;
(statearr_30157_30225[(2)] = inst_30032);

(statearr_30157_30225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (2))){
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30105__$1,(4),ch);
} else {
if((state_val_30106 === (23))){
var state_30105__$1 = state_30105;
var statearr_30158_30226 = state_30105__$1;
(statearr_30158_30226[(2)] = null);

(statearr_30158_30226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (35))){
var inst_30087 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30159_30227 = state_30105__$1;
(statearr_30159_30227[(2)] = inst_30087);

(statearr_30159_30227[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (19))){
var inst_30004 = (state_30105[(7)]);
var inst_30008 = cljs.core.chunk_first.call(null,inst_30004);
var inst_30009 = cljs.core.chunk_rest.call(null,inst_30004);
var inst_30010 = cljs.core.count.call(null,inst_30008);
var inst_29982 = inst_30009;
var inst_29983 = inst_30008;
var inst_29984 = inst_30010;
var inst_29985 = (0);
var state_30105__$1 = (function (){var statearr_30160 = state_30105;
(statearr_30160[(13)] = inst_29982);

(statearr_30160[(14)] = inst_29985);

(statearr_30160[(16)] = inst_29983);

(statearr_30160[(17)] = inst_29984);

return statearr_30160;
})();
var statearr_30161_30228 = state_30105__$1;
(statearr_30161_30228[(2)] = null);

(statearr_30161_30228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (11))){
var inst_29982 = (state_30105[(13)]);
var inst_30004 = (state_30105[(7)]);
var inst_30004__$1 = cljs.core.seq.call(null,inst_29982);
var state_30105__$1 = (function (){var statearr_30162 = state_30105;
(statearr_30162[(7)] = inst_30004__$1);

return statearr_30162;
})();
if(inst_30004__$1){
var statearr_30163_30229 = state_30105__$1;
(statearr_30163_30229[(1)] = (16));

} else {
var statearr_30164_30230 = state_30105__$1;
(statearr_30164_30230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (9))){
var inst_30034 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30165_30231 = state_30105__$1;
(statearr_30165_30231[(2)] = inst_30034);

(statearr_30165_30231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (5))){
var inst_29980 = cljs.core.deref.call(null,cs);
var inst_29981 = cljs.core.seq.call(null,inst_29980);
var inst_29982 = inst_29981;
var inst_29983 = null;
var inst_29984 = (0);
var inst_29985 = (0);
var state_30105__$1 = (function (){var statearr_30166 = state_30105;
(statearr_30166[(13)] = inst_29982);

(statearr_30166[(14)] = inst_29985);

(statearr_30166[(16)] = inst_29983);

(statearr_30166[(17)] = inst_29984);

return statearr_30166;
})();
var statearr_30167_30232 = state_30105__$1;
(statearr_30167_30232[(2)] = null);

(statearr_30167_30232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (14))){
var state_30105__$1 = state_30105;
var statearr_30168_30233 = state_30105__$1;
(statearr_30168_30233[(2)] = null);

(statearr_30168_30233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (45))){
var inst_30095 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30169_30234 = state_30105__$1;
(statearr_30169_30234[(2)] = inst_30095);

(statearr_30169_30234[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (26))){
var inst_30037 = (state_30105[(29)]);
var inst_30091 = (state_30105[(2)]);
var inst_30092 = cljs.core.seq.call(null,inst_30037);
var state_30105__$1 = (function (){var statearr_30170 = state_30105;
(statearr_30170[(31)] = inst_30091);

return statearr_30170;
})();
if(inst_30092){
var statearr_30171_30235 = state_30105__$1;
(statearr_30171_30235[(1)] = (42));

} else {
var statearr_30172_30236 = state_30105__$1;
(statearr_30172_30236[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (16))){
var inst_30004 = (state_30105[(7)]);
var inst_30006 = cljs.core.chunked_seq_QMARK_.call(null,inst_30004);
var state_30105__$1 = state_30105;
if(inst_30006){
var statearr_30173_30237 = state_30105__$1;
(statearr_30173_30237[(1)] = (19));

} else {
var statearr_30174_30238 = state_30105__$1;
(statearr_30174_30238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (38))){
var inst_30084 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30175_30239 = state_30105__$1;
(statearr_30175_30239[(2)] = inst_30084);

(statearr_30175_30239[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (30))){
var state_30105__$1 = state_30105;
var statearr_30176_30240 = state_30105__$1;
(statearr_30176_30240[(2)] = null);

(statearr_30176_30240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (10))){
var inst_29985 = (state_30105[(14)]);
var inst_29983 = (state_30105[(16)]);
var inst_29993 = cljs.core._nth.call(null,inst_29983,inst_29985);
var inst_29994 = cljs.core.nth.call(null,inst_29993,(0),null);
var inst_29995 = cljs.core.nth.call(null,inst_29993,(1),null);
var state_30105__$1 = (function (){var statearr_30177 = state_30105;
(statearr_30177[(26)] = inst_29994);

return statearr_30177;
})();
if(cljs.core.truth_(inst_29995)){
var statearr_30178_30241 = state_30105__$1;
(statearr_30178_30241[(1)] = (13));

} else {
var statearr_30179_30242 = state_30105__$1;
(statearr_30179_30242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (18))){
var inst_30030 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30180_30243 = state_30105__$1;
(statearr_30180_30243[(2)] = inst_30030);

(statearr_30180_30243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (42))){
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30105__$1,(45),dchan);
} else {
if((state_val_30106 === (37))){
var inst_30073 = (state_30105[(23)]);
var inst_30064 = (state_30105[(25)]);
var inst_29973 = (state_30105[(12)]);
var inst_30073__$1 = cljs.core.first.call(null,inst_30064);
var inst_30074 = cljs.core.async.put_BANG_.call(null,inst_30073__$1,inst_29973,done);
var state_30105__$1 = (function (){var statearr_30181 = state_30105;
(statearr_30181[(23)] = inst_30073__$1);

return statearr_30181;
})();
if(cljs.core.truth_(inst_30074)){
var statearr_30182_30244 = state_30105__$1;
(statearr_30182_30244[(1)] = (39));

} else {
var statearr_30183_30245 = state_30105__$1;
(statearr_30183_30245[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (8))){
var inst_29985 = (state_30105[(14)]);
var inst_29984 = (state_30105[(17)]);
var inst_29987 = (inst_29985 < inst_29984);
var inst_29988 = inst_29987;
var state_30105__$1 = state_30105;
if(cljs.core.truth_(inst_29988)){
var statearr_30184_30246 = state_30105__$1;
(statearr_30184_30246[(1)] = (10));

} else {
var statearr_30185_30247 = state_30105__$1;
(statearr_30185_30247[(1)] = (11));

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
});})(c__28840__auto___30193,cs,m,dchan,dctr,done))
;
return ((function (switch__28728__auto__,c__28840__auto___30193,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28729__auto__ = null;
var cljs$core$async$mult_$_state_machine__28729__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = cljs$core$async$mult_$_state_machine__28729__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var cljs$core$async$mult_$_state_machine__28729__auto____1 = (function (state_30105){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_30105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e30190){if((e30190 instanceof Object)){
var ex__28732__auto__ = e30190;
var statearr_30191_30248 = state_30105;
(statearr_30191_30248[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30249 = state_30105;
state_30105 = G__30249;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28729__auto__ = function(state_30105){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28729__auto____1.call(this,state_30105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28729__auto____0;
cljs$core$async$mult_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28729__auto____1;
return cljs$core$async$mult_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___30193,cs,m,dchan,dctr,done))
})();
var state__28842__auto__ = (function (){var statearr_30192 = f__28841__auto__.call(null);
(statearr_30192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___30193);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___30193,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30250 = [];
var len__27054__auto___30253 = arguments.length;
var i__27055__auto___30254 = (0);
while(true){
if((i__27055__auto___30254 < len__27054__auto___30253)){
args30250.push((arguments[i__27055__auto___30254]));

var G__30255 = (i__27055__auto___30254 + (1));
i__27055__auto___30254 = G__30255;
continue;
} else {
}
break;
}

var G__30252 = args30250.length;
switch (G__30252) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30250.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___30267 = arguments.length;
var i__27055__auto___30268 = (0);
while(true){
if((i__27055__auto___30268 < len__27054__auto___30267)){
args__27061__auto__.push((arguments[i__27055__auto___30268]));

var G__30269 = (i__27055__auto___30268 + (1));
i__27055__auto___30268 = G__30269;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30261){
var map__30262 = p__30261;
var map__30262__$1 = ((((!((map__30262 == null)))?((((map__30262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);
var opts = map__30262__$1;
var statearr_30264_30270 = state;
(statearr_30264_30270[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30262,map__30262__$1,opts){
return (function (val){
var statearr_30265_30271 = state;
(statearr_30265_30271[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30262,map__30262__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30266_30272 = state;
(statearr_30266_30272[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30257){
var G__30258 = cljs.core.first.call(null,seq30257);
var seq30257__$1 = cljs.core.next.call(null,seq30257);
var G__30259 = cljs.core.first.call(null,seq30257__$1);
var seq30257__$2 = cljs.core.next.call(null,seq30257__$1);
var G__30260 = cljs.core.first.call(null,seq30257__$2);
var seq30257__$3 = cljs.core.next.call(null,seq30257__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30258,G__30259,G__30260,seq30257__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30438 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30439){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30439 = meta30439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30440,meta30439__$1){
var self__ = this;
var _30440__$1 = this;
return (new cljs.core.async.t_cljs$core$async30438(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30439__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30440){
var self__ = this;
var _30440__$1 = this;
return self__.meta30439;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30439","meta30439",-326554582,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30438";

cljs.core.async.t_cljs$core$async30438.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30438");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30438 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30439){
return (new cljs.core.async.t_cljs$core$async30438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30439));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30438(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28840__auto___30603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30540){
var state_val_30541 = (state_30540[(1)]);
if((state_val_30541 === (7))){
var inst_30456 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30542_30604 = state_30540__$1;
(statearr_30542_30604[(2)] = inst_30456);

(statearr_30542_30604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (20))){
var inst_30468 = (state_30540[(7)]);
var state_30540__$1 = state_30540;
var statearr_30543_30605 = state_30540__$1;
(statearr_30543_30605[(2)] = inst_30468);

(statearr_30543_30605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (27))){
var state_30540__$1 = state_30540;
var statearr_30544_30606 = state_30540__$1;
(statearr_30544_30606[(2)] = null);

(statearr_30544_30606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (1))){
var inst_30444 = (state_30540[(8)]);
var inst_30444__$1 = calc_state.call(null);
var inst_30446 = (inst_30444__$1 == null);
var inst_30447 = cljs.core.not.call(null,inst_30446);
var state_30540__$1 = (function (){var statearr_30545 = state_30540;
(statearr_30545[(8)] = inst_30444__$1);

return statearr_30545;
})();
if(inst_30447){
var statearr_30546_30607 = state_30540__$1;
(statearr_30546_30607[(1)] = (2));

} else {
var statearr_30547_30608 = state_30540__$1;
(statearr_30547_30608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (24))){
var inst_30491 = (state_30540[(9)]);
var inst_30514 = (state_30540[(10)]);
var inst_30500 = (state_30540[(11)]);
var inst_30514__$1 = inst_30491.call(null,inst_30500);
var state_30540__$1 = (function (){var statearr_30548 = state_30540;
(statearr_30548[(10)] = inst_30514__$1);

return statearr_30548;
})();
if(cljs.core.truth_(inst_30514__$1)){
var statearr_30549_30609 = state_30540__$1;
(statearr_30549_30609[(1)] = (29));

} else {
var statearr_30550_30610 = state_30540__$1;
(statearr_30550_30610[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (4))){
var inst_30459 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30459)){
var statearr_30551_30611 = state_30540__$1;
(statearr_30551_30611[(1)] = (8));

} else {
var statearr_30552_30612 = state_30540__$1;
(statearr_30552_30612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (15))){
var inst_30485 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30485)){
var statearr_30553_30613 = state_30540__$1;
(statearr_30553_30613[(1)] = (19));

} else {
var statearr_30554_30614 = state_30540__$1;
(statearr_30554_30614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (21))){
var inst_30490 = (state_30540[(12)]);
var inst_30490__$1 = (state_30540[(2)]);
var inst_30491 = cljs.core.get.call(null,inst_30490__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30492 = cljs.core.get.call(null,inst_30490__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30493 = cljs.core.get.call(null,inst_30490__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30540__$1 = (function (){var statearr_30555 = state_30540;
(statearr_30555[(9)] = inst_30491);

(statearr_30555[(13)] = inst_30492);

(statearr_30555[(12)] = inst_30490__$1);

return statearr_30555;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30540__$1,(22),inst_30493);
} else {
if((state_val_30541 === (31))){
var inst_30522 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30522)){
var statearr_30556_30615 = state_30540__$1;
(statearr_30556_30615[(1)] = (32));

} else {
var statearr_30557_30616 = state_30540__$1;
(statearr_30557_30616[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (32))){
var inst_30499 = (state_30540[(14)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30540__$1,(35),out,inst_30499);
} else {
if((state_val_30541 === (33))){
var inst_30490 = (state_30540[(12)]);
var inst_30468 = inst_30490;
var state_30540__$1 = (function (){var statearr_30558 = state_30540;
(statearr_30558[(7)] = inst_30468);

return statearr_30558;
})();
var statearr_30559_30617 = state_30540__$1;
(statearr_30559_30617[(2)] = null);

(statearr_30559_30617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (13))){
var inst_30468 = (state_30540[(7)]);
var inst_30475 = inst_30468.cljs$lang$protocol_mask$partition0$;
var inst_30476 = (inst_30475 & (64));
var inst_30477 = inst_30468.cljs$core$ISeq$;
var inst_30478 = (inst_30476) || (inst_30477);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30478)){
var statearr_30560_30618 = state_30540__$1;
(statearr_30560_30618[(1)] = (16));

} else {
var statearr_30561_30619 = state_30540__$1;
(statearr_30561_30619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (22))){
var inst_30499 = (state_30540[(14)]);
var inst_30500 = (state_30540[(11)]);
var inst_30498 = (state_30540[(2)]);
var inst_30499__$1 = cljs.core.nth.call(null,inst_30498,(0),null);
var inst_30500__$1 = cljs.core.nth.call(null,inst_30498,(1),null);
var inst_30501 = (inst_30499__$1 == null);
var inst_30502 = cljs.core._EQ_.call(null,inst_30500__$1,change);
var inst_30503 = (inst_30501) || (inst_30502);
var state_30540__$1 = (function (){var statearr_30562 = state_30540;
(statearr_30562[(14)] = inst_30499__$1);

(statearr_30562[(11)] = inst_30500__$1);

return statearr_30562;
})();
if(cljs.core.truth_(inst_30503)){
var statearr_30563_30620 = state_30540__$1;
(statearr_30563_30620[(1)] = (23));

} else {
var statearr_30564_30621 = state_30540__$1;
(statearr_30564_30621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (36))){
var inst_30490 = (state_30540[(12)]);
var inst_30468 = inst_30490;
var state_30540__$1 = (function (){var statearr_30565 = state_30540;
(statearr_30565[(7)] = inst_30468);

return statearr_30565;
})();
var statearr_30566_30622 = state_30540__$1;
(statearr_30566_30622[(2)] = null);

(statearr_30566_30622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (29))){
var inst_30514 = (state_30540[(10)]);
var state_30540__$1 = state_30540;
var statearr_30567_30623 = state_30540__$1;
(statearr_30567_30623[(2)] = inst_30514);

(statearr_30567_30623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (6))){
var state_30540__$1 = state_30540;
var statearr_30568_30624 = state_30540__$1;
(statearr_30568_30624[(2)] = false);

(statearr_30568_30624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (28))){
var inst_30510 = (state_30540[(2)]);
var inst_30511 = calc_state.call(null);
var inst_30468 = inst_30511;
var state_30540__$1 = (function (){var statearr_30569 = state_30540;
(statearr_30569[(7)] = inst_30468);

(statearr_30569[(15)] = inst_30510);

return statearr_30569;
})();
var statearr_30570_30625 = state_30540__$1;
(statearr_30570_30625[(2)] = null);

(statearr_30570_30625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (25))){
var inst_30536 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30571_30626 = state_30540__$1;
(statearr_30571_30626[(2)] = inst_30536);

(statearr_30571_30626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (34))){
var inst_30534 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30572_30627 = state_30540__$1;
(statearr_30572_30627[(2)] = inst_30534);

(statearr_30572_30627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (17))){
var state_30540__$1 = state_30540;
var statearr_30573_30628 = state_30540__$1;
(statearr_30573_30628[(2)] = false);

(statearr_30573_30628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (3))){
var state_30540__$1 = state_30540;
var statearr_30574_30629 = state_30540__$1;
(statearr_30574_30629[(2)] = false);

(statearr_30574_30629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (12))){
var inst_30538 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30540__$1,inst_30538);
} else {
if((state_val_30541 === (2))){
var inst_30444 = (state_30540[(8)]);
var inst_30449 = inst_30444.cljs$lang$protocol_mask$partition0$;
var inst_30450 = (inst_30449 & (64));
var inst_30451 = inst_30444.cljs$core$ISeq$;
var inst_30452 = (inst_30450) || (inst_30451);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30452)){
var statearr_30575_30630 = state_30540__$1;
(statearr_30575_30630[(1)] = (5));

} else {
var statearr_30576_30631 = state_30540__$1;
(statearr_30576_30631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (23))){
var inst_30499 = (state_30540[(14)]);
var inst_30505 = (inst_30499 == null);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30505)){
var statearr_30577_30632 = state_30540__$1;
(statearr_30577_30632[(1)] = (26));

} else {
var statearr_30578_30633 = state_30540__$1;
(statearr_30578_30633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (35))){
var inst_30525 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
if(cljs.core.truth_(inst_30525)){
var statearr_30579_30634 = state_30540__$1;
(statearr_30579_30634[(1)] = (36));

} else {
var statearr_30580_30635 = state_30540__$1;
(statearr_30580_30635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (19))){
var inst_30468 = (state_30540[(7)]);
var inst_30487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30468);
var state_30540__$1 = state_30540;
var statearr_30581_30636 = state_30540__$1;
(statearr_30581_30636[(2)] = inst_30487);

(statearr_30581_30636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (11))){
var inst_30468 = (state_30540[(7)]);
var inst_30472 = (inst_30468 == null);
var inst_30473 = cljs.core.not.call(null,inst_30472);
var state_30540__$1 = state_30540;
if(inst_30473){
var statearr_30582_30637 = state_30540__$1;
(statearr_30582_30637[(1)] = (13));

} else {
var statearr_30583_30638 = state_30540__$1;
(statearr_30583_30638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (9))){
var inst_30444 = (state_30540[(8)]);
var state_30540__$1 = state_30540;
var statearr_30584_30639 = state_30540__$1;
(statearr_30584_30639[(2)] = inst_30444);

(statearr_30584_30639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (5))){
var state_30540__$1 = state_30540;
var statearr_30585_30640 = state_30540__$1;
(statearr_30585_30640[(2)] = true);

(statearr_30585_30640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (14))){
var state_30540__$1 = state_30540;
var statearr_30586_30641 = state_30540__$1;
(statearr_30586_30641[(2)] = false);

(statearr_30586_30641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (26))){
var inst_30500 = (state_30540[(11)]);
var inst_30507 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30500);
var state_30540__$1 = state_30540;
var statearr_30587_30642 = state_30540__$1;
(statearr_30587_30642[(2)] = inst_30507);

(statearr_30587_30642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (16))){
var state_30540__$1 = state_30540;
var statearr_30588_30643 = state_30540__$1;
(statearr_30588_30643[(2)] = true);

(statearr_30588_30643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (38))){
var inst_30530 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30589_30644 = state_30540__$1;
(statearr_30589_30644[(2)] = inst_30530);

(statearr_30589_30644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (30))){
var inst_30491 = (state_30540[(9)]);
var inst_30492 = (state_30540[(13)]);
var inst_30500 = (state_30540[(11)]);
var inst_30517 = cljs.core.empty_QMARK_.call(null,inst_30491);
var inst_30518 = inst_30492.call(null,inst_30500);
var inst_30519 = cljs.core.not.call(null,inst_30518);
var inst_30520 = (inst_30517) && (inst_30519);
var state_30540__$1 = state_30540;
var statearr_30590_30645 = state_30540__$1;
(statearr_30590_30645[(2)] = inst_30520);

(statearr_30590_30645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (10))){
var inst_30444 = (state_30540[(8)]);
var inst_30464 = (state_30540[(2)]);
var inst_30465 = cljs.core.get.call(null,inst_30464,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30466 = cljs.core.get.call(null,inst_30464,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30467 = cljs.core.get.call(null,inst_30464,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30468 = inst_30444;
var state_30540__$1 = (function (){var statearr_30591 = state_30540;
(statearr_30591[(16)] = inst_30467);

(statearr_30591[(17)] = inst_30465);

(statearr_30591[(18)] = inst_30466);

(statearr_30591[(7)] = inst_30468);

return statearr_30591;
})();
var statearr_30592_30646 = state_30540__$1;
(statearr_30592_30646[(2)] = null);

(statearr_30592_30646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (18))){
var inst_30482 = (state_30540[(2)]);
var state_30540__$1 = state_30540;
var statearr_30593_30647 = state_30540__$1;
(statearr_30593_30647[(2)] = inst_30482);

(statearr_30593_30647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (37))){
var state_30540__$1 = state_30540;
var statearr_30594_30648 = state_30540__$1;
(statearr_30594_30648[(2)] = null);

(statearr_30594_30648[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30541 === (8))){
var inst_30444 = (state_30540[(8)]);
var inst_30461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30444);
var state_30540__$1 = state_30540;
var statearr_30595_30649 = state_30540__$1;
(statearr_30595_30649[(2)] = inst_30461);

(statearr_30595_30649[(1)] = (10));


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
});})(c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28728__auto__,c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28729__auto__ = null;
var cljs$core$async$mix_$_state_machine__28729__auto____0 = (function (){
var statearr_30599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30599[(0)] = cljs$core$async$mix_$_state_machine__28729__auto__);

(statearr_30599[(1)] = (1));

return statearr_30599;
});
var cljs$core$async$mix_$_state_machine__28729__auto____1 = (function (state_30540){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_30540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e30600){if((e30600 instanceof Object)){
var ex__28732__auto__ = e30600;
var statearr_30601_30650 = state_30540;
(statearr_30601_30650[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_30540;
state_30540 = G__30651;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28729__auto__ = function(state_30540){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28729__auto____1.call(this,state_30540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28729__auto____0;
cljs$core$async$mix_$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28729__auto____1;
return cljs$core$async$mix_$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28842__auto__ = (function (){var statearr_30602 = f__28841__auto__.call(null);
(statearr_30602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___30603);

return statearr_30602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___30603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30652 = [];
var len__27054__auto___30655 = arguments.length;
var i__27055__auto___30656 = (0);
while(true){
if((i__27055__auto___30656 < len__27054__auto___30655)){
args30652.push((arguments[i__27055__auto___30656]));

var G__30657 = (i__27055__auto___30656 + (1));
i__27055__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30654 = args30652.length;
switch (G__30654) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30652.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30660 = [];
var len__27054__auto___30785 = arguments.length;
var i__27055__auto___30786 = (0);
while(true){
if((i__27055__auto___30786 < len__27054__auto___30785)){
args30660.push((arguments[i__27055__auto___30786]));

var G__30787 = (i__27055__auto___30786 + (1));
i__27055__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var G__30662 = args30660.length;
switch (G__30662) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30660.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__30659_SHARP_){
if(cljs.core.truth_(p1__30659_SHARP_.call(null,topic))){
return p1__30659_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30659_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30663 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30664){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30664 = meta30664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30665,meta30664__$1){
var self__ = this;
var _30665__$1 = this;
return (new cljs.core.async.t_cljs$core$async30663(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30664__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30665){
var self__ = this;
var _30665__$1 = this;
return self__.meta30664;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30664","meta30664",-365193952,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30663";

cljs.core.async.t_cljs$core$async30663.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30663");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30663 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30663(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30664){
return (new cljs.core.async.t_cljs$core$async30663(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30664));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30663(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28840__auto___30789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___30789,mults,ensure_mult,p){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___30789,mults,ensure_mult,p){
return (function (state_30737){
var state_val_30738 = (state_30737[(1)]);
if((state_val_30738 === (7))){
var inst_30733 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30739_30790 = state_30737__$1;
(statearr_30739_30790[(2)] = inst_30733);

(statearr_30739_30790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (20))){
var state_30737__$1 = state_30737;
var statearr_30740_30791 = state_30737__$1;
(statearr_30740_30791[(2)] = null);

(statearr_30740_30791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (1))){
var state_30737__$1 = state_30737;
var statearr_30741_30792 = state_30737__$1;
(statearr_30741_30792[(2)] = null);

(statearr_30741_30792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (24))){
var inst_30716 = (state_30737[(7)]);
var inst_30725 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30716);
var state_30737__$1 = state_30737;
var statearr_30742_30793 = state_30737__$1;
(statearr_30742_30793[(2)] = inst_30725);

(statearr_30742_30793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (4))){
var inst_30668 = (state_30737[(8)]);
var inst_30668__$1 = (state_30737[(2)]);
var inst_30669 = (inst_30668__$1 == null);
var state_30737__$1 = (function (){var statearr_30743 = state_30737;
(statearr_30743[(8)] = inst_30668__$1);

return statearr_30743;
})();
if(cljs.core.truth_(inst_30669)){
var statearr_30744_30794 = state_30737__$1;
(statearr_30744_30794[(1)] = (5));

} else {
var statearr_30745_30795 = state_30737__$1;
(statearr_30745_30795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (15))){
var inst_30710 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30746_30796 = state_30737__$1;
(statearr_30746_30796[(2)] = inst_30710);

(statearr_30746_30796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (21))){
var inst_30730 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30747 = state_30737;
(statearr_30747[(9)] = inst_30730);

return statearr_30747;
})();
var statearr_30748_30797 = state_30737__$1;
(statearr_30748_30797[(2)] = null);

(statearr_30748_30797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (13))){
var inst_30692 = (state_30737[(10)]);
var inst_30694 = cljs.core.chunked_seq_QMARK_.call(null,inst_30692);
var state_30737__$1 = state_30737;
if(inst_30694){
var statearr_30749_30798 = state_30737__$1;
(statearr_30749_30798[(1)] = (16));

} else {
var statearr_30750_30799 = state_30737__$1;
(statearr_30750_30799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (22))){
var inst_30722 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
if(cljs.core.truth_(inst_30722)){
var statearr_30751_30800 = state_30737__$1;
(statearr_30751_30800[(1)] = (23));

} else {
var statearr_30752_30801 = state_30737__$1;
(statearr_30752_30801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (6))){
var inst_30718 = (state_30737[(11)]);
var inst_30668 = (state_30737[(8)]);
var inst_30716 = (state_30737[(7)]);
var inst_30716__$1 = topic_fn.call(null,inst_30668);
var inst_30717 = cljs.core.deref.call(null,mults);
var inst_30718__$1 = cljs.core.get.call(null,inst_30717,inst_30716__$1);
var state_30737__$1 = (function (){var statearr_30753 = state_30737;
(statearr_30753[(11)] = inst_30718__$1);

(statearr_30753[(7)] = inst_30716__$1);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30718__$1)){
var statearr_30754_30802 = state_30737__$1;
(statearr_30754_30802[(1)] = (19));

} else {
var statearr_30755_30803 = state_30737__$1;
(statearr_30755_30803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (25))){
var inst_30727 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30756_30804 = state_30737__$1;
(statearr_30756_30804[(2)] = inst_30727);

(statearr_30756_30804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (17))){
var inst_30692 = (state_30737[(10)]);
var inst_30701 = cljs.core.first.call(null,inst_30692);
var inst_30702 = cljs.core.async.muxch_STAR_.call(null,inst_30701);
var inst_30703 = cljs.core.async.close_BANG_.call(null,inst_30702);
var inst_30704 = cljs.core.next.call(null,inst_30692);
var inst_30678 = inst_30704;
var inst_30679 = null;
var inst_30680 = (0);
var inst_30681 = (0);
var state_30737__$1 = (function (){var statearr_30757 = state_30737;
(statearr_30757[(12)] = inst_30678);

(statearr_30757[(13)] = inst_30681);

(statearr_30757[(14)] = inst_30703);

(statearr_30757[(15)] = inst_30680);

(statearr_30757[(16)] = inst_30679);

return statearr_30757;
})();
var statearr_30758_30805 = state_30737__$1;
(statearr_30758_30805[(2)] = null);

(statearr_30758_30805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (3))){
var inst_30735 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30737__$1,inst_30735);
} else {
if((state_val_30738 === (12))){
var inst_30712 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30759_30806 = state_30737__$1;
(statearr_30759_30806[(2)] = inst_30712);

(statearr_30759_30806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (2))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30737__$1,(4),ch);
} else {
if((state_val_30738 === (23))){
var state_30737__$1 = state_30737;
var statearr_30760_30807 = state_30737__$1;
(statearr_30760_30807[(2)] = null);

(statearr_30760_30807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (19))){
var inst_30718 = (state_30737[(11)]);
var inst_30668 = (state_30737[(8)]);
var inst_30720 = cljs.core.async.muxch_STAR_.call(null,inst_30718);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30737__$1,(22),inst_30720,inst_30668);
} else {
if((state_val_30738 === (11))){
var inst_30692 = (state_30737[(10)]);
var inst_30678 = (state_30737[(12)]);
var inst_30692__$1 = cljs.core.seq.call(null,inst_30678);
var state_30737__$1 = (function (){var statearr_30761 = state_30737;
(statearr_30761[(10)] = inst_30692__$1);

return statearr_30761;
})();
if(inst_30692__$1){
var statearr_30762_30808 = state_30737__$1;
(statearr_30762_30808[(1)] = (13));

} else {
var statearr_30763_30809 = state_30737__$1;
(statearr_30763_30809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (9))){
var inst_30714 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30764_30810 = state_30737__$1;
(statearr_30764_30810[(2)] = inst_30714);

(statearr_30764_30810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (5))){
var inst_30675 = cljs.core.deref.call(null,mults);
var inst_30676 = cljs.core.vals.call(null,inst_30675);
var inst_30677 = cljs.core.seq.call(null,inst_30676);
var inst_30678 = inst_30677;
var inst_30679 = null;
var inst_30680 = (0);
var inst_30681 = (0);
var state_30737__$1 = (function (){var statearr_30765 = state_30737;
(statearr_30765[(12)] = inst_30678);

(statearr_30765[(13)] = inst_30681);

(statearr_30765[(15)] = inst_30680);

(statearr_30765[(16)] = inst_30679);

return statearr_30765;
})();
var statearr_30766_30811 = state_30737__$1;
(statearr_30766_30811[(2)] = null);

(statearr_30766_30811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (14))){
var state_30737__$1 = state_30737;
var statearr_30770_30812 = state_30737__$1;
(statearr_30770_30812[(2)] = null);

(statearr_30770_30812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (16))){
var inst_30692 = (state_30737[(10)]);
var inst_30696 = cljs.core.chunk_first.call(null,inst_30692);
var inst_30697 = cljs.core.chunk_rest.call(null,inst_30692);
var inst_30698 = cljs.core.count.call(null,inst_30696);
var inst_30678 = inst_30697;
var inst_30679 = inst_30696;
var inst_30680 = inst_30698;
var inst_30681 = (0);
var state_30737__$1 = (function (){var statearr_30771 = state_30737;
(statearr_30771[(12)] = inst_30678);

(statearr_30771[(13)] = inst_30681);

(statearr_30771[(15)] = inst_30680);

(statearr_30771[(16)] = inst_30679);

return statearr_30771;
})();
var statearr_30772_30813 = state_30737__$1;
(statearr_30772_30813[(2)] = null);

(statearr_30772_30813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (10))){
var inst_30678 = (state_30737[(12)]);
var inst_30681 = (state_30737[(13)]);
var inst_30680 = (state_30737[(15)]);
var inst_30679 = (state_30737[(16)]);
var inst_30686 = cljs.core._nth.call(null,inst_30679,inst_30681);
var inst_30687 = cljs.core.async.muxch_STAR_.call(null,inst_30686);
var inst_30688 = cljs.core.async.close_BANG_.call(null,inst_30687);
var inst_30689 = (inst_30681 + (1));
var tmp30767 = inst_30678;
var tmp30768 = inst_30680;
var tmp30769 = inst_30679;
var inst_30678__$1 = tmp30767;
var inst_30679__$1 = tmp30769;
var inst_30680__$1 = tmp30768;
var inst_30681__$1 = inst_30689;
var state_30737__$1 = (function (){var statearr_30773 = state_30737;
(statearr_30773[(17)] = inst_30688);

(statearr_30773[(12)] = inst_30678__$1);

(statearr_30773[(13)] = inst_30681__$1);

(statearr_30773[(15)] = inst_30680__$1);

(statearr_30773[(16)] = inst_30679__$1);

return statearr_30773;
})();
var statearr_30774_30814 = state_30737__$1;
(statearr_30774_30814[(2)] = null);

(statearr_30774_30814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (18))){
var inst_30707 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30775_30815 = state_30737__$1;
(statearr_30775_30815[(2)] = inst_30707);

(statearr_30775_30815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (8))){
var inst_30681 = (state_30737[(13)]);
var inst_30680 = (state_30737[(15)]);
var inst_30683 = (inst_30681 < inst_30680);
var inst_30684 = inst_30683;
var state_30737__$1 = state_30737;
if(cljs.core.truth_(inst_30684)){
var statearr_30776_30816 = state_30737__$1;
(statearr_30776_30816[(1)] = (10));

} else {
var statearr_30777_30817 = state_30737__$1;
(statearr_30777_30817[(1)] = (11));

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
});})(c__28840__auto___30789,mults,ensure_mult,p))
;
return ((function (switch__28728__auto__,c__28840__auto___30789,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_30781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30781[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_30781[(1)] = (1));

return statearr_30781;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_30737){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_30737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e30782){if((e30782 instanceof Object)){
var ex__28732__auto__ = e30782;
var statearr_30783_30818 = state_30737;
(statearr_30783_30818[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30819 = state_30737;
state_30737 = G__30819;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_30737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_30737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___30789,mults,ensure_mult,p))
})();
var state__28842__auto__ = (function (){var statearr_30784 = f__28841__auto__.call(null);
(statearr_30784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___30789);

return statearr_30784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___30789,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30820 = [];
var len__27054__auto___30823 = arguments.length;
var i__27055__auto___30824 = (0);
while(true){
if((i__27055__auto___30824 < len__27054__auto___30823)){
args30820.push((arguments[i__27055__auto___30824]));

var G__30825 = (i__27055__auto___30824 + (1));
i__27055__auto___30824 = G__30825;
continue;
} else {
}
break;
}

var G__30822 = args30820.length;
switch (G__30822) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30820.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30827 = [];
var len__27054__auto___30830 = arguments.length;
var i__27055__auto___30831 = (0);
while(true){
if((i__27055__auto___30831 < len__27054__auto___30830)){
args30827.push((arguments[i__27055__auto___30831]));

var G__30832 = (i__27055__auto___30831 + (1));
i__27055__auto___30831 = G__30832;
continue;
} else {
}
break;
}

var G__30829 = args30827.length;
switch (G__30829) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30827.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30834 = [];
var len__27054__auto___30905 = arguments.length;
var i__27055__auto___30906 = (0);
while(true){
if((i__27055__auto___30906 < len__27054__auto___30905)){
args30834.push((arguments[i__27055__auto___30906]));

var G__30907 = (i__27055__auto___30906 + (1));
i__27055__auto___30906 = G__30907;
continue;
} else {
}
break;
}

var G__30836 = args30834.length;
switch (G__30836) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30834.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28840__auto___30909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30875){
var state_val_30876 = (state_30875[(1)]);
if((state_val_30876 === (7))){
var state_30875__$1 = state_30875;
var statearr_30877_30910 = state_30875__$1;
(statearr_30877_30910[(2)] = null);

(statearr_30877_30910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (1))){
var state_30875__$1 = state_30875;
var statearr_30878_30911 = state_30875__$1;
(statearr_30878_30911[(2)] = null);

(statearr_30878_30911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (4))){
var inst_30839 = (state_30875[(7)]);
var inst_30841 = (inst_30839 < cnt);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30841)){
var statearr_30879_30912 = state_30875__$1;
(statearr_30879_30912[(1)] = (6));

} else {
var statearr_30880_30913 = state_30875__$1;
(statearr_30880_30913[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (15))){
var inst_30871 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30881_30914 = state_30875__$1;
(statearr_30881_30914[(2)] = inst_30871);

(statearr_30881_30914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (13))){
var inst_30864 = cljs.core.async.close_BANG_.call(null,out);
var state_30875__$1 = state_30875;
var statearr_30882_30915 = state_30875__$1;
(statearr_30882_30915[(2)] = inst_30864);

(statearr_30882_30915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (6))){
var state_30875__$1 = state_30875;
var statearr_30883_30916 = state_30875__$1;
(statearr_30883_30916[(2)] = null);

(statearr_30883_30916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (3))){
var inst_30873 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30875__$1,inst_30873);
} else {
if((state_val_30876 === (12))){
var inst_30861 = (state_30875[(8)]);
var inst_30861__$1 = (state_30875[(2)]);
var inst_30862 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30861__$1);
var state_30875__$1 = (function (){var statearr_30884 = state_30875;
(statearr_30884[(8)] = inst_30861__$1);

return statearr_30884;
})();
if(cljs.core.truth_(inst_30862)){
var statearr_30885_30917 = state_30875__$1;
(statearr_30885_30917[(1)] = (13));

} else {
var statearr_30886_30918 = state_30875__$1;
(statearr_30886_30918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (2))){
var inst_30838 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30839 = (0);
var state_30875__$1 = (function (){var statearr_30887 = state_30875;
(statearr_30887[(9)] = inst_30838);

(statearr_30887[(7)] = inst_30839);

return statearr_30887;
})();
var statearr_30888_30919 = state_30875__$1;
(statearr_30888_30919[(2)] = null);

(statearr_30888_30919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (11))){
var inst_30839 = (state_30875[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30875,(10),Object,null,(9));
var inst_30848 = chs__$1.call(null,inst_30839);
var inst_30849 = done.call(null,inst_30839);
var inst_30850 = cljs.core.async.take_BANG_.call(null,inst_30848,inst_30849);
var state_30875__$1 = state_30875;
var statearr_30889_30920 = state_30875__$1;
(statearr_30889_30920[(2)] = inst_30850);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (9))){
var inst_30839 = (state_30875[(7)]);
var inst_30852 = (state_30875[(2)]);
var inst_30853 = (inst_30839 + (1));
var inst_30839__$1 = inst_30853;
var state_30875__$1 = (function (){var statearr_30890 = state_30875;
(statearr_30890[(7)] = inst_30839__$1);

(statearr_30890[(10)] = inst_30852);

return statearr_30890;
})();
var statearr_30891_30921 = state_30875__$1;
(statearr_30891_30921[(2)] = null);

(statearr_30891_30921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (5))){
var inst_30859 = (state_30875[(2)]);
var state_30875__$1 = (function (){var statearr_30892 = state_30875;
(statearr_30892[(11)] = inst_30859);

return statearr_30892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(12),dchan);
} else {
if((state_val_30876 === (14))){
var inst_30861 = (state_30875[(8)]);
var inst_30866 = cljs.core.apply.call(null,f,inst_30861);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,(16),out,inst_30866);
} else {
if((state_val_30876 === (16))){
var inst_30868 = (state_30875[(2)]);
var state_30875__$1 = (function (){var statearr_30893 = state_30875;
(statearr_30893[(12)] = inst_30868);

return statearr_30893;
})();
var statearr_30894_30922 = state_30875__$1;
(statearr_30894_30922[(2)] = null);

(statearr_30894_30922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (10))){
var inst_30843 = (state_30875[(2)]);
var inst_30844 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30875__$1 = (function (){var statearr_30895 = state_30875;
(statearr_30895[(13)] = inst_30843);

return statearr_30895;
})();
var statearr_30896_30923 = state_30875__$1;
(statearr_30896_30923[(2)] = inst_30844);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (8))){
var inst_30857 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30897_30924 = state_30875__$1;
(statearr_30897_30924[(2)] = inst_30857);

(statearr_30897_30924[(1)] = (5));


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
});})(c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28728__auto__,c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_30901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30901[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_30901[(1)] = (1));

return statearr_30901;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_30875){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_30875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e30902){if((e30902 instanceof Object)){
var ex__28732__auto__ = e30902;
var statearr_30903_30925 = state_30875;
(statearr_30903_30925[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30875;
state_30875 = G__30926;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28842__auto__ = (function (){var statearr_30904 = f__28841__auto__.call(null);
(statearr_30904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___30909);

return statearr_30904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___30909,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30928 = [];
var len__27054__auto___30986 = arguments.length;
var i__27055__auto___30987 = (0);
while(true){
if((i__27055__auto___30987 < len__27054__auto___30986)){
args30928.push((arguments[i__27055__auto___30987]));

var G__30988 = (i__27055__auto___30987 + (1));
i__27055__auto___30987 = G__30988;
continue;
} else {
}
break;
}

var G__30930 = args30928.length;
switch (G__30930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30928.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___30990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___30990,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___30990,out){
return (function (state_30962){
var state_val_30963 = (state_30962[(1)]);
if((state_val_30963 === (7))){
var inst_30941 = (state_30962[(7)]);
var inst_30942 = (state_30962[(8)]);
var inst_30941__$1 = (state_30962[(2)]);
var inst_30942__$1 = cljs.core.nth.call(null,inst_30941__$1,(0),null);
var inst_30943 = cljs.core.nth.call(null,inst_30941__$1,(1),null);
var inst_30944 = (inst_30942__$1 == null);
var state_30962__$1 = (function (){var statearr_30964 = state_30962;
(statearr_30964[(9)] = inst_30943);

(statearr_30964[(7)] = inst_30941__$1);

(statearr_30964[(8)] = inst_30942__$1);

return statearr_30964;
})();
if(cljs.core.truth_(inst_30944)){
var statearr_30965_30991 = state_30962__$1;
(statearr_30965_30991[(1)] = (8));

} else {
var statearr_30966_30992 = state_30962__$1;
(statearr_30966_30992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (1))){
var inst_30931 = cljs.core.vec.call(null,chs);
var inst_30932 = inst_30931;
var state_30962__$1 = (function (){var statearr_30967 = state_30962;
(statearr_30967[(10)] = inst_30932);

return statearr_30967;
})();
var statearr_30968_30993 = state_30962__$1;
(statearr_30968_30993[(2)] = null);

(statearr_30968_30993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (4))){
var inst_30932 = (state_30962[(10)]);
var state_30962__$1 = state_30962;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30962__$1,(7),inst_30932);
} else {
if((state_val_30963 === (6))){
var inst_30958 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30969_30994 = state_30962__$1;
(statearr_30969_30994[(2)] = inst_30958);

(statearr_30969_30994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (3))){
var inst_30960 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30962__$1,inst_30960);
} else {
if((state_val_30963 === (2))){
var inst_30932 = (state_30962[(10)]);
var inst_30934 = cljs.core.count.call(null,inst_30932);
var inst_30935 = (inst_30934 > (0));
var state_30962__$1 = state_30962;
if(cljs.core.truth_(inst_30935)){
var statearr_30971_30995 = state_30962__$1;
(statearr_30971_30995[(1)] = (4));

} else {
var statearr_30972_30996 = state_30962__$1;
(statearr_30972_30996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (11))){
var inst_30932 = (state_30962[(10)]);
var inst_30951 = (state_30962[(2)]);
var tmp30970 = inst_30932;
var inst_30932__$1 = tmp30970;
var state_30962__$1 = (function (){var statearr_30973 = state_30962;
(statearr_30973[(11)] = inst_30951);

(statearr_30973[(10)] = inst_30932__$1);

return statearr_30973;
})();
var statearr_30974_30997 = state_30962__$1;
(statearr_30974_30997[(2)] = null);

(statearr_30974_30997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (9))){
var inst_30942 = (state_30962[(8)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30962__$1,(11),out,inst_30942);
} else {
if((state_val_30963 === (5))){
var inst_30956 = cljs.core.async.close_BANG_.call(null,out);
var state_30962__$1 = state_30962;
var statearr_30975_30998 = state_30962__$1;
(statearr_30975_30998[(2)] = inst_30956);

(statearr_30975_30998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (10))){
var inst_30954 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30976_30999 = state_30962__$1;
(statearr_30976_30999[(2)] = inst_30954);

(statearr_30976_30999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (8))){
var inst_30943 = (state_30962[(9)]);
var inst_30941 = (state_30962[(7)]);
var inst_30942 = (state_30962[(8)]);
var inst_30932 = (state_30962[(10)]);
var inst_30946 = (function (){var cs = inst_30932;
var vec__30937 = inst_30941;
var v = inst_30942;
var c = inst_30943;
return ((function (cs,vec__30937,v,c,inst_30943,inst_30941,inst_30942,inst_30932,state_val_30963,c__28840__auto___30990,out){
return (function (p1__30927_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30927_SHARP_);
});
;})(cs,vec__30937,v,c,inst_30943,inst_30941,inst_30942,inst_30932,state_val_30963,c__28840__auto___30990,out))
})();
var inst_30947 = cljs.core.filterv.call(null,inst_30946,inst_30932);
var inst_30932__$1 = inst_30947;
var state_30962__$1 = (function (){var statearr_30977 = state_30962;
(statearr_30977[(10)] = inst_30932__$1);

return statearr_30977;
})();
var statearr_30978_31000 = state_30962__$1;
(statearr_30978_31000[(2)] = null);

(statearr_30978_31000[(1)] = (2));


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
});})(c__28840__auto___30990,out))
;
return ((function (switch__28728__auto__,c__28840__auto___30990,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_30982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30982[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_30982[(1)] = (1));

return statearr_30982;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_30962){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_30962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e30983){if((e30983 instanceof Object)){
var ex__28732__auto__ = e30983;
var statearr_30984_31001 = state_30962;
(statearr_30984_31001[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31002 = state_30962;
state_30962 = G__31002;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_30962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_30962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___30990,out))
})();
var state__28842__auto__ = (function (){var statearr_30985 = f__28841__auto__.call(null);
(statearr_30985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___30990);

return statearr_30985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___30990,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31003 = [];
var len__27054__auto___31052 = arguments.length;
var i__27055__auto___31053 = (0);
while(true){
if((i__27055__auto___31053 < len__27054__auto___31052)){
args31003.push((arguments[i__27055__auto___31053]));

var G__31054 = (i__27055__auto___31053 + (1));
i__27055__auto___31053 = G__31054;
continue;
} else {
}
break;
}

var G__31005 = args31003.length;
switch (G__31005) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31003.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___31056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___31056,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___31056,out){
return (function (state_31029){
var state_val_31030 = (state_31029[(1)]);
if((state_val_31030 === (7))){
var inst_31011 = (state_31029[(7)]);
var inst_31011__$1 = (state_31029[(2)]);
var inst_31012 = (inst_31011__$1 == null);
var inst_31013 = cljs.core.not.call(null,inst_31012);
var state_31029__$1 = (function (){var statearr_31031 = state_31029;
(statearr_31031[(7)] = inst_31011__$1);

return statearr_31031;
})();
if(inst_31013){
var statearr_31032_31057 = state_31029__$1;
(statearr_31032_31057[(1)] = (8));

} else {
var statearr_31033_31058 = state_31029__$1;
(statearr_31033_31058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (1))){
var inst_31006 = (0);
var state_31029__$1 = (function (){var statearr_31034 = state_31029;
(statearr_31034[(8)] = inst_31006);

return statearr_31034;
})();
var statearr_31035_31059 = state_31029__$1;
(statearr_31035_31059[(2)] = null);

(statearr_31035_31059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (4))){
var state_31029__$1 = state_31029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31029__$1,(7),ch);
} else {
if((state_val_31030 === (6))){
var inst_31024 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
var statearr_31036_31060 = state_31029__$1;
(statearr_31036_31060[(2)] = inst_31024);

(statearr_31036_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (3))){
var inst_31026 = (state_31029[(2)]);
var inst_31027 = cljs.core.async.close_BANG_.call(null,out);
var state_31029__$1 = (function (){var statearr_31037 = state_31029;
(statearr_31037[(9)] = inst_31026);

return statearr_31037;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31029__$1,inst_31027);
} else {
if((state_val_31030 === (2))){
var inst_31006 = (state_31029[(8)]);
var inst_31008 = (inst_31006 < n);
var state_31029__$1 = state_31029;
if(cljs.core.truth_(inst_31008)){
var statearr_31038_31061 = state_31029__$1;
(statearr_31038_31061[(1)] = (4));

} else {
var statearr_31039_31062 = state_31029__$1;
(statearr_31039_31062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (11))){
var inst_31006 = (state_31029[(8)]);
var inst_31016 = (state_31029[(2)]);
var inst_31017 = (inst_31006 + (1));
var inst_31006__$1 = inst_31017;
var state_31029__$1 = (function (){var statearr_31040 = state_31029;
(statearr_31040[(8)] = inst_31006__$1);

(statearr_31040[(10)] = inst_31016);

return statearr_31040;
})();
var statearr_31041_31063 = state_31029__$1;
(statearr_31041_31063[(2)] = null);

(statearr_31041_31063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (9))){
var state_31029__$1 = state_31029;
var statearr_31042_31064 = state_31029__$1;
(statearr_31042_31064[(2)] = null);

(statearr_31042_31064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (5))){
var state_31029__$1 = state_31029;
var statearr_31043_31065 = state_31029__$1;
(statearr_31043_31065[(2)] = null);

(statearr_31043_31065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (10))){
var inst_31021 = (state_31029[(2)]);
var state_31029__$1 = state_31029;
var statearr_31044_31066 = state_31029__$1;
(statearr_31044_31066[(2)] = inst_31021);

(statearr_31044_31066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31030 === (8))){
var inst_31011 = (state_31029[(7)]);
var state_31029__$1 = state_31029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31029__$1,(11),out,inst_31011);
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
});})(c__28840__auto___31056,out))
;
return ((function (switch__28728__auto__,c__28840__auto___31056,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_31048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31048[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_31048[(1)] = (1));

return statearr_31048;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_31029){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31049){if((e31049 instanceof Object)){
var ex__28732__auto__ = e31049;
var statearr_31050_31067 = state_31029;
(statearr_31050_31067[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31068 = state_31029;
state_31029 = G__31068;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_31029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_31029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___31056,out))
})();
var state__28842__auto__ = (function (){var statearr_31051 = f__28841__auto__.call(null);
(statearr_31051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___31056);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___31056,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31076 = (function (map_LT_,f,ch,meta31077){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31077 = meta31077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31078,meta31077__$1){
var self__ = this;
var _31078__$1 = this;
return (new cljs.core.async.t_cljs$core$async31076(self__.map_LT_,self__.f,self__.ch,meta31077__$1));
});

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31078){
var self__ = this;
var _31078__$1 = this;
return self__.meta31077;
});

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31079 = (function (map_LT_,f,ch,meta31077,_,fn1,meta31080){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31077 = meta31077;
this._ = _;
this.fn1 = fn1;
this.meta31080 = meta31080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31081,meta31080__$1){
var self__ = this;
var _31081__$1 = this;
return (new cljs.core.async.t_cljs$core$async31079(self__.map_LT_,self__.f,self__.ch,self__.meta31077,self__._,self__.fn1,meta31080__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31081){
var self__ = this;
var _31081__$1 = this;
return self__.meta31080;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31069_SHARP_){
return f1.call(null,(((p1__31069_SHARP_ == null))?null:self__.f.call(null,p1__31069_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31077","meta31077",-297676420,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31076","cljs.core.async/t_cljs$core$async31076",-841986545,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31080","meta31080",1347087362,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31079";

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31079");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31079 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31079(map_LT___$1,f__$1,ch__$1,meta31077__$1,___$2,fn1__$1,meta31080){
return (new cljs.core.async.t_cljs$core$async31079(map_LT___$1,f__$1,ch__$1,meta31077__$1,___$2,fn1__$1,meta31080));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31079(self__.map_LT_,self__.f,self__.ch,self__.meta31077,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31077","meta31077",-297676420,null)], null);
});

cljs.core.async.t_cljs$core$async31076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31076";

cljs.core.async.t_cljs$core$async31076.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31076");
});

cljs.core.async.__GT_t_cljs$core$async31076 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31076(map_LT___$1,f__$1,ch__$1,meta31077){
return (new cljs.core.async.t_cljs$core$async31076(map_LT___$1,f__$1,ch__$1,meta31077));
});

}

return (new cljs.core.async.t_cljs$core$async31076(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31085 = (function (map_GT_,f,ch,meta31086){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31086 = meta31086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31087,meta31086__$1){
var self__ = this;
var _31087__$1 = this;
return (new cljs.core.async.t_cljs$core$async31085(self__.map_GT_,self__.f,self__.ch,meta31086__$1));
});

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31087){
var self__ = this;
var _31087__$1 = this;
return self__.meta31086;
});

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31086","meta31086",-1015038554,null)], null);
});

cljs.core.async.t_cljs$core$async31085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31085";

cljs.core.async.t_cljs$core$async31085.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31085");
});

cljs.core.async.__GT_t_cljs$core$async31085 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31085(map_GT___$1,f__$1,ch__$1,meta31086){
return (new cljs.core.async.t_cljs$core$async31085(map_GT___$1,f__$1,ch__$1,meta31086));
});

}

return (new cljs.core.async.t_cljs$core$async31085(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31091 = (function (filter_GT_,p,ch,meta31092){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31092 = meta31092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31093,meta31092__$1){
var self__ = this;
var _31093__$1 = this;
return (new cljs.core.async.t_cljs$core$async31091(self__.filter_GT_,self__.p,self__.ch,meta31092__$1));
});

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31093){
var self__ = this;
var _31093__$1 = this;
return self__.meta31092;
});

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31092","meta31092",1949327782,null)], null);
});

cljs.core.async.t_cljs$core$async31091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31091";

cljs.core.async.t_cljs$core$async31091.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async31091");
});

cljs.core.async.__GT_t_cljs$core$async31091 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31091(filter_GT___$1,p__$1,ch__$1,meta31092){
return (new cljs.core.async.t_cljs$core$async31091(filter_GT___$1,p__$1,ch__$1,meta31092));
});

}

return (new cljs.core.async.t_cljs$core$async31091(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31094 = [];
var len__27054__auto___31138 = arguments.length;
var i__27055__auto___31139 = (0);
while(true){
if((i__27055__auto___31139 < len__27054__auto___31138)){
args31094.push((arguments[i__27055__auto___31139]));

var G__31140 = (i__27055__auto___31139 + (1));
i__27055__auto___31139 = G__31140;
continue;
} else {
}
break;
}

var G__31096 = args31094.length;
switch (G__31096) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31094.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___31142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___31142,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___31142,out){
return (function (state_31117){
var state_val_31118 = (state_31117[(1)]);
if((state_val_31118 === (7))){
var inst_31113 = (state_31117[(2)]);
var state_31117__$1 = state_31117;
var statearr_31119_31143 = state_31117__$1;
(statearr_31119_31143[(2)] = inst_31113);

(statearr_31119_31143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (1))){
var state_31117__$1 = state_31117;
var statearr_31120_31144 = state_31117__$1;
(statearr_31120_31144[(2)] = null);

(statearr_31120_31144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (4))){
var inst_31099 = (state_31117[(7)]);
var inst_31099__$1 = (state_31117[(2)]);
var inst_31100 = (inst_31099__$1 == null);
var state_31117__$1 = (function (){var statearr_31121 = state_31117;
(statearr_31121[(7)] = inst_31099__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31100)){
var statearr_31122_31145 = state_31117__$1;
(statearr_31122_31145[(1)] = (5));

} else {
var statearr_31123_31146 = state_31117__$1;
(statearr_31123_31146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (6))){
var inst_31099 = (state_31117[(7)]);
var inst_31104 = p.call(null,inst_31099);
var state_31117__$1 = state_31117;
if(cljs.core.truth_(inst_31104)){
var statearr_31124_31147 = state_31117__$1;
(statearr_31124_31147[(1)] = (8));

} else {
var statearr_31125_31148 = state_31117__$1;
(statearr_31125_31148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (3))){
var inst_31115 = (state_31117[(2)]);
var state_31117__$1 = state_31117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31117__$1,inst_31115);
} else {
if((state_val_31118 === (2))){
var state_31117__$1 = state_31117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31117__$1,(4),ch);
} else {
if((state_val_31118 === (11))){
var inst_31107 = (state_31117[(2)]);
var state_31117__$1 = state_31117;
var statearr_31126_31149 = state_31117__$1;
(statearr_31126_31149[(2)] = inst_31107);

(statearr_31126_31149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (9))){
var state_31117__$1 = state_31117;
var statearr_31127_31150 = state_31117__$1;
(statearr_31127_31150[(2)] = null);

(statearr_31127_31150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (5))){
var inst_31102 = cljs.core.async.close_BANG_.call(null,out);
var state_31117__$1 = state_31117;
var statearr_31128_31151 = state_31117__$1;
(statearr_31128_31151[(2)] = inst_31102);

(statearr_31128_31151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (10))){
var inst_31110 = (state_31117[(2)]);
var state_31117__$1 = (function (){var statearr_31129 = state_31117;
(statearr_31129[(8)] = inst_31110);

return statearr_31129;
})();
var statearr_31130_31152 = state_31117__$1;
(statearr_31130_31152[(2)] = null);

(statearr_31130_31152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (8))){
var inst_31099 = (state_31117[(7)]);
var state_31117__$1 = state_31117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31117__$1,(11),out,inst_31099);
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
});})(c__28840__auto___31142,out))
;
return ((function (switch__28728__auto__,c__28840__auto___31142,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_31134 = [null,null,null,null,null,null,null,null,null];
(statearr_31134[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_31134[(1)] = (1));

return statearr_31134;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_31117){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object)){
var ex__28732__auto__ = e31135;
var statearr_31136_31153 = state_31117;
(statearr_31136_31153[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31154 = state_31117;
state_31117 = G__31154;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_31117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_31117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___31142,out))
})();
var state__28842__auto__ = (function (){var statearr_31137 = f__28841__auto__.call(null);
(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___31142);

return statearr_31137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___31142,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31155 = [];
var len__27054__auto___31158 = arguments.length;
var i__27055__auto___31159 = (0);
while(true){
if((i__27055__auto___31159 < len__27054__auto___31158)){
args31155.push((arguments[i__27055__auto___31159]));

var G__31160 = (i__27055__auto___31159 + (1));
i__27055__auto___31159 = G__31160;
continue;
} else {
}
break;
}

var G__31157 = args31155.length;
switch (G__31157) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31155.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28840__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto__){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto__){
return (function (state_31327){
var state_val_31328 = (state_31327[(1)]);
if((state_val_31328 === (7))){
var inst_31323 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31329_31370 = state_31327__$1;
(statearr_31329_31370[(2)] = inst_31323);

(statearr_31329_31370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (20))){
var inst_31293 = (state_31327[(7)]);
var inst_31304 = (state_31327[(2)]);
var inst_31305 = cljs.core.next.call(null,inst_31293);
var inst_31279 = inst_31305;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31327__$1 = (function (){var statearr_31330 = state_31327;
(statearr_31330[(8)] = inst_31279);

(statearr_31330[(9)] = inst_31281);

(statearr_31330[(10)] = inst_31280);

(statearr_31330[(11)] = inst_31282);

(statearr_31330[(12)] = inst_31304);

return statearr_31330;
})();
var statearr_31331_31371 = state_31327__$1;
(statearr_31331_31371[(2)] = null);

(statearr_31331_31371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (1))){
var state_31327__$1 = state_31327;
var statearr_31332_31372 = state_31327__$1;
(statearr_31332_31372[(2)] = null);

(statearr_31332_31372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (4))){
var inst_31268 = (state_31327[(13)]);
var inst_31268__$1 = (state_31327[(2)]);
var inst_31269 = (inst_31268__$1 == null);
var state_31327__$1 = (function (){var statearr_31333 = state_31327;
(statearr_31333[(13)] = inst_31268__$1);

return statearr_31333;
})();
if(cljs.core.truth_(inst_31269)){
var statearr_31334_31373 = state_31327__$1;
(statearr_31334_31373[(1)] = (5));

} else {
var statearr_31335_31374 = state_31327__$1;
(statearr_31335_31374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (15))){
var state_31327__$1 = state_31327;
var statearr_31339_31375 = state_31327__$1;
(statearr_31339_31375[(2)] = null);

(statearr_31339_31375[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (21))){
var state_31327__$1 = state_31327;
var statearr_31340_31376 = state_31327__$1;
(statearr_31340_31376[(2)] = null);

(statearr_31340_31376[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (13))){
var inst_31279 = (state_31327[(8)]);
var inst_31281 = (state_31327[(9)]);
var inst_31280 = (state_31327[(10)]);
var inst_31282 = (state_31327[(11)]);
var inst_31289 = (state_31327[(2)]);
var inst_31290 = (inst_31282 + (1));
var tmp31336 = inst_31279;
var tmp31337 = inst_31281;
var tmp31338 = inst_31280;
var inst_31279__$1 = tmp31336;
var inst_31280__$1 = tmp31338;
var inst_31281__$1 = tmp31337;
var inst_31282__$1 = inst_31290;
var state_31327__$1 = (function (){var statearr_31341 = state_31327;
(statearr_31341[(8)] = inst_31279__$1);

(statearr_31341[(9)] = inst_31281__$1);

(statearr_31341[(10)] = inst_31280__$1);

(statearr_31341[(14)] = inst_31289);

(statearr_31341[(11)] = inst_31282__$1);

return statearr_31341;
})();
var statearr_31342_31377 = state_31327__$1;
(statearr_31342_31377[(2)] = null);

(statearr_31342_31377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (22))){
var state_31327__$1 = state_31327;
var statearr_31343_31378 = state_31327__$1;
(statearr_31343_31378[(2)] = null);

(statearr_31343_31378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (6))){
var inst_31268 = (state_31327[(13)]);
var inst_31277 = f.call(null,inst_31268);
var inst_31278 = cljs.core.seq.call(null,inst_31277);
var inst_31279 = inst_31278;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31327__$1 = (function (){var statearr_31344 = state_31327;
(statearr_31344[(8)] = inst_31279);

(statearr_31344[(9)] = inst_31281);

(statearr_31344[(10)] = inst_31280);

(statearr_31344[(11)] = inst_31282);

return statearr_31344;
})();
var statearr_31345_31379 = state_31327__$1;
(statearr_31345_31379[(2)] = null);

(statearr_31345_31379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (17))){
var inst_31293 = (state_31327[(7)]);
var inst_31297 = cljs.core.chunk_first.call(null,inst_31293);
var inst_31298 = cljs.core.chunk_rest.call(null,inst_31293);
var inst_31299 = cljs.core.count.call(null,inst_31297);
var inst_31279 = inst_31298;
var inst_31280 = inst_31297;
var inst_31281 = inst_31299;
var inst_31282 = (0);
var state_31327__$1 = (function (){var statearr_31346 = state_31327;
(statearr_31346[(8)] = inst_31279);

(statearr_31346[(9)] = inst_31281);

(statearr_31346[(10)] = inst_31280);

(statearr_31346[(11)] = inst_31282);

return statearr_31346;
})();
var statearr_31347_31380 = state_31327__$1;
(statearr_31347_31380[(2)] = null);

(statearr_31347_31380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (3))){
var inst_31325 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31327__$1,inst_31325);
} else {
if((state_val_31328 === (12))){
var inst_31313 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31348_31381 = state_31327__$1;
(statearr_31348_31381[(2)] = inst_31313);

(statearr_31348_31381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (2))){
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31327__$1,(4),in$);
} else {
if((state_val_31328 === (23))){
var inst_31321 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31349_31382 = state_31327__$1;
(statearr_31349_31382[(2)] = inst_31321);

(statearr_31349_31382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (19))){
var inst_31308 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31350_31383 = state_31327__$1;
(statearr_31350_31383[(2)] = inst_31308);

(statearr_31350_31383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (11))){
var inst_31279 = (state_31327[(8)]);
var inst_31293 = (state_31327[(7)]);
var inst_31293__$1 = cljs.core.seq.call(null,inst_31279);
var state_31327__$1 = (function (){var statearr_31351 = state_31327;
(statearr_31351[(7)] = inst_31293__$1);

return statearr_31351;
})();
if(inst_31293__$1){
var statearr_31352_31384 = state_31327__$1;
(statearr_31352_31384[(1)] = (14));

} else {
var statearr_31353_31385 = state_31327__$1;
(statearr_31353_31385[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (9))){
var inst_31315 = (state_31327[(2)]);
var inst_31316 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31327__$1 = (function (){var statearr_31354 = state_31327;
(statearr_31354[(15)] = inst_31315);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31316)){
var statearr_31355_31386 = state_31327__$1;
(statearr_31355_31386[(1)] = (21));

} else {
var statearr_31356_31387 = state_31327__$1;
(statearr_31356_31387[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (5))){
var inst_31271 = cljs.core.async.close_BANG_.call(null,out);
var state_31327__$1 = state_31327;
var statearr_31357_31388 = state_31327__$1;
(statearr_31357_31388[(2)] = inst_31271);

(statearr_31357_31388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (14))){
var inst_31293 = (state_31327[(7)]);
var inst_31295 = cljs.core.chunked_seq_QMARK_.call(null,inst_31293);
var state_31327__$1 = state_31327;
if(inst_31295){
var statearr_31358_31389 = state_31327__$1;
(statearr_31358_31389[(1)] = (17));

} else {
var statearr_31359_31390 = state_31327__$1;
(statearr_31359_31390[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (16))){
var inst_31311 = (state_31327[(2)]);
var state_31327__$1 = state_31327;
var statearr_31360_31391 = state_31327__$1;
(statearr_31360_31391[(2)] = inst_31311);

(statearr_31360_31391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31328 === (10))){
var inst_31280 = (state_31327[(10)]);
var inst_31282 = (state_31327[(11)]);
var inst_31287 = cljs.core._nth.call(null,inst_31280,inst_31282);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31327__$1,(13),out,inst_31287);
} else {
if((state_val_31328 === (18))){
var inst_31293 = (state_31327[(7)]);
var inst_31302 = cljs.core.first.call(null,inst_31293);
var state_31327__$1 = state_31327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31327__$1,(20),out,inst_31302);
} else {
if((state_val_31328 === (8))){
var inst_31281 = (state_31327[(9)]);
var inst_31282 = (state_31327[(11)]);
var inst_31284 = (inst_31282 < inst_31281);
var inst_31285 = inst_31284;
var state_31327__$1 = state_31327;
if(cljs.core.truth_(inst_31285)){
var statearr_31361_31392 = state_31327__$1;
(statearr_31361_31392[(1)] = (10));

} else {
var statearr_31362_31393 = state_31327__$1;
(statearr_31362_31393[(1)] = (11));

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
});})(c__28840__auto__))
;
return ((function (switch__28728__auto__,c__28840__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____0 = (function (){
var statearr_31366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31366[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__);

(statearr_31366[(1)] = (1));

return statearr_31366;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____1 = (function (state_31327){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31367){if((e31367 instanceof Object)){
var ex__28732__auto__ = e31367;
var statearr_31368_31394 = state_31327;
(statearr_31368_31394[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31395 = state_31327;
state_31327 = G__31395;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__ = function(state_31327){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____1.call(this,state_31327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28729__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto__))
})();
var state__28842__auto__ = (function (){var statearr_31369 = f__28841__auto__.call(null);
(statearr_31369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto__);

return statearr_31369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto__))
);

return c__28840__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31396 = [];
var len__27054__auto___31399 = arguments.length;
var i__27055__auto___31400 = (0);
while(true){
if((i__27055__auto___31400 < len__27054__auto___31399)){
args31396.push((arguments[i__27055__auto___31400]));

var G__31401 = (i__27055__auto___31400 + (1));
i__27055__auto___31400 = G__31401;
continue;
} else {
}
break;
}

var G__31398 = args31396.length;
switch (G__31398) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31396.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31403 = [];
var len__27054__auto___31406 = arguments.length;
var i__27055__auto___31407 = (0);
while(true){
if((i__27055__auto___31407 < len__27054__auto___31406)){
args31403.push((arguments[i__27055__auto___31407]));

var G__31408 = (i__27055__auto___31407 + (1));
i__27055__auto___31407 = G__31408;
continue;
} else {
}
break;
}

var G__31405 = args31403.length;
switch (G__31405) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31403.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31410 = [];
var len__27054__auto___31461 = arguments.length;
var i__27055__auto___31462 = (0);
while(true){
if((i__27055__auto___31462 < len__27054__auto___31461)){
args31410.push((arguments[i__27055__auto___31462]));

var G__31463 = (i__27055__auto___31462 + (1));
i__27055__auto___31462 = G__31463;
continue;
} else {
}
break;
}

var G__31412 = args31410.length;
switch (G__31412) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31410.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___31465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___31465,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___31465,out){
return (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (7))){
var inst_31431 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31438_31466 = state_31436__$1;
(statearr_31438_31466[(2)] = inst_31431);

(statearr_31438_31466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (1))){
var inst_31413 = null;
var state_31436__$1 = (function (){var statearr_31439 = state_31436;
(statearr_31439[(7)] = inst_31413);

return statearr_31439;
})();
var statearr_31440_31467 = state_31436__$1;
(statearr_31440_31467[(2)] = null);

(statearr_31440_31467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (4))){
var inst_31416 = (state_31436[(8)]);
var inst_31416__$1 = (state_31436[(2)]);
var inst_31417 = (inst_31416__$1 == null);
var inst_31418 = cljs.core.not.call(null,inst_31417);
var state_31436__$1 = (function (){var statearr_31441 = state_31436;
(statearr_31441[(8)] = inst_31416__$1);

return statearr_31441;
})();
if(inst_31418){
var statearr_31442_31468 = state_31436__$1;
(statearr_31442_31468[(1)] = (5));

} else {
var statearr_31443_31469 = state_31436__$1;
(statearr_31443_31469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (6))){
var state_31436__$1 = state_31436;
var statearr_31444_31470 = state_31436__$1;
(statearr_31444_31470[(2)] = null);

(statearr_31444_31470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (3))){
var inst_31433 = (state_31436[(2)]);
var inst_31434 = cljs.core.async.close_BANG_.call(null,out);
var state_31436__$1 = (function (){var statearr_31445 = state_31436;
(statearr_31445[(9)] = inst_31433);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31436__$1,inst_31434);
} else {
if((state_val_31437 === (2))){
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31436__$1,(4),ch);
} else {
if((state_val_31437 === (11))){
var inst_31416 = (state_31436[(8)]);
var inst_31425 = (state_31436[(2)]);
var inst_31413 = inst_31416;
var state_31436__$1 = (function (){var statearr_31446 = state_31436;
(statearr_31446[(10)] = inst_31425);

(statearr_31446[(7)] = inst_31413);

return statearr_31446;
})();
var statearr_31447_31471 = state_31436__$1;
(statearr_31447_31471[(2)] = null);

(statearr_31447_31471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (9))){
var inst_31416 = (state_31436[(8)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31436__$1,(11),out,inst_31416);
} else {
if((state_val_31437 === (5))){
var inst_31416 = (state_31436[(8)]);
var inst_31413 = (state_31436[(7)]);
var inst_31420 = cljs.core._EQ_.call(null,inst_31416,inst_31413);
var state_31436__$1 = state_31436;
if(inst_31420){
var statearr_31449_31472 = state_31436__$1;
(statearr_31449_31472[(1)] = (8));

} else {
var statearr_31450_31473 = state_31436__$1;
(statearr_31450_31473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (10))){
var inst_31428 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31451_31474 = state_31436__$1;
(statearr_31451_31474[(2)] = inst_31428);

(statearr_31451_31474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (8))){
var inst_31413 = (state_31436[(7)]);
var tmp31448 = inst_31413;
var inst_31413__$1 = tmp31448;
var state_31436__$1 = (function (){var statearr_31452 = state_31436;
(statearr_31452[(7)] = inst_31413__$1);

return statearr_31452;
})();
var statearr_31453_31475 = state_31436__$1;
(statearr_31453_31475[(2)] = null);

(statearr_31453_31475[(1)] = (2));


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
});})(c__28840__auto___31465,out))
;
return ((function (switch__28728__auto__,c__28840__auto___31465,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_31457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31457[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_31457[(1)] = (1));

return statearr_31457;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_31436){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31458){if((e31458 instanceof Object)){
var ex__28732__auto__ = e31458;
var statearr_31459_31476 = state_31436;
(statearr_31459_31476[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31477 = state_31436;
state_31436 = G__31477;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___31465,out))
})();
var state__28842__auto__ = (function (){var statearr_31460 = f__28841__auto__.call(null);
(statearr_31460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___31465);

return statearr_31460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___31465,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31478 = [];
var len__27054__auto___31548 = arguments.length;
var i__27055__auto___31549 = (0);
while(true){
if((i__27055__auto___31549 < len__27054__auto___31548)){
args31478.push((arguments[i__27055__auto___31549]));

var G__31550 = (i__27055__auto___31549 + (1));
i__27055__auto___31549 = G__31550;
continue;
} else {
}
break;
}

var G__31480 = args31478.length;
switch (G__31480) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31478.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___31552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___31552,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___31552,out){
return (function (state_31518){
var state_val_31519 = (state_31518[(1)]);
if((state_val_31519 === (7))){
var inst_31514 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31520_31553 = state_31518__$1;
(statearr_31520_31553[(2)] = inst_31514);

(statearr_31520_31553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (1))){
var inst_31481 = (new Array(n));
var inst_31482 = inst_31481;
var inst_31483 = (0);
var state_31518__$1 = (function (){var statearr_31521 = state_31518;
(statearr_31521[(7)] = inst_31483);

(statearr_31521[(8)] = inst_31482);

return statearr_31521;
})();
var statearr_31522_31554 = state_31518__$1;
(statearr_31522_31554[(2)] = null);

(statearr_31522_31554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (4))){
var inst_31486 = (state_31518[(9)]);
var inst_31486__$1 = (state_31518[(2)]);
var inst_31487 = (inst_31486__$1 == null);
var inst_31488 = cljs.core.not.call(null,inst_31487);
var state_31518__$1 = (function (){var statearr_31523 = state_31518;
(statearr_31523[(9)] = inst_31486__$1);

return statearr_31523;
})();
if(inst_31488){
var statearr_31524_31555 = state_31518__$1;
(statearr_31524_31555[(1)] = (5));

} else {
var statearr_31525_31556 = state_31518__$1;
(statearr_31525_31556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (15))){
var inst_31508 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31526_31557 = state_31518__$1;
(statearr_31526_31557[(2)] = inst_31508);

(statearr_31526_31557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (13))){
var state_31518__$1 = state_31518;
var statearr_31527_31558 = state_31518__$1;
(statearr_31527_31558[(2)] = null);

(statearr_31527_31558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (6))){
var inst_31483 = (state_31518[(7)]);
var inst_31504 = (inst_31483 > (0));
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31504)){
var statearr_31528_31559 = state_31518__$1;
(statearr_31528_31559[(1)] = (12));

} else {
var statearr_31529_31560 = state_31518__$1;
(statearr_31529_31560[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (3))){
var inst_31516 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31518__$1,inst_31516);
} else {
if((state_val_31519 === (12))){
var inst_31482 = (state_31518[(8)]);
var inst_31506 = cljs.core.vec.call(null,inst_31482);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31518__$1,(15),out,inst_31506);
} else {
if((state_val_31519 === (2))){
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31518__$1,(4),ch);
} else {
if((state_val_31519 === (11))){
var inst_31498 = (state_31518[(2)]);
var inst_31499 = (new Array(n));
var inst_31482 = inst_31499;
var inst_31483 = (0);
var state_31518__$1 = (function (){var statearr_31530 = state_31518;
(statearr_31530[(7)] = inst_31483);

(statearr_31530[(10)] = inst_31498);

(statearr_31530[(8)] = inst_31482);

return statearr_31530;
})();
var statearr_31531_31561 = state_31518__$1;
(statearr_31531_31561[(2)] = null);

(statearr_31531_31561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (9))){
var inst_31482 = (state_31518[(8)]);
var inst_31496 = cljs.core.vec.call(null,inst_31482);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31518__$1,(11),out,inst_31496);
} else {
if((state_val_31519 === (5))){
var inst_31486 = (state_31518[(9)]);
var inst_31491 = (state_31518[(11)]);
var inst_31483 = (state_31518[(7)]);
var inst_31482 = (state_31518[(8)]);
var inst_31490 = (inst_31482[inst_31483] = inst_31486);
var inst_31491__$1 = (inst_31483 + (1));
var inst_31492 = (inst_31491__$1 < n);
var state_31518__$1 = (function (){var statearr_31532 = state_31518;
(statearr_31532[(11)] = inst_31491__$1);

(statearr_31532[(12)] = inst_31490);

return statearr_31532;
})();
if(cljs.core.truth_(inst_31492)){
var statearr_31533_31562 = state_31518__$1;
(statearr_31533_31562[(1)] = (8));

} else {
var statearr_31534_31563 = state_31518__$1;
(statearr_31534_31563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (14))){
var inst_31511 = (state_31518[(2)]);
var inst_31512 = cljs.core.async.close_BANG_.call(null,out);
var state_31518__$1 = (function (){var statearr_31536 = state_31518;
(statearr_31536[(13)] = inst_31511);

return statearr_31536;
})();
var statearr_31537_31564 = state_31518__$1;
(statearr_31537_31564[(2)] = inst_31512);

(statearr_31537_31564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (10))){
var inst_31502 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31538_31565 = state_31518__$1;
(statearr_31538_31565[(2)] = inst_31502);

(statearr_31538_31565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (8))){
var inst_31491 = (state_31518[(11)]);
var inst_31482 = (state_31518[(8)]);
var tmp31535 = inst_31482;
var inst_31482__$1 = tmp31535;
var inst_31483 = inst_31491;
var state_31518__$1 = (function (){var statearr_31539 = state_31518;
(statearr_31539[(7)] = inst_31483);

(statearr_31539[(8)] = inst_31482__$1);

return statearr_31539;
})();
var statearr_31540_31566 = state_31518__$1;
(statearr_31540_31566[(2)] = null);

(statearr_31540_31566[(1)] = (2));


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
});})(c__28840__auto___31552,out))
;
return ((function (switch__28728__auto__,c__28840__auto___31552,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_31544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31544[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_31518){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__28732__auto__ = e31545;
var statearr_31546_31567 = state_31518;
(statearr_31546_31567[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31568 = state_31518;
state_31518 = G__31568;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_31518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_31518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___31552,out))
})();
var state__28842__auto__ = (function (){var statearr_31547 = f__28841__auto__.call(null);
(statearr_31547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___31552);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___31552,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31569 = [];
var len__27054__auto___31643 = arguments.length;
var i__27055__auto___31644 = (0);
while(true){
if((i__27055__auto___31644 < len__27054__auto___31643)){
args31569.push((arguments[i__27055__auto___31644]));

var G__31645 = (i__27055__auto___31644 + (1));
i__27055__auto___31644 = G__31645;
continue;
} else {
}
break;
}

var G__31571 = args31569.length;
switch (G__31571) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31569.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28840__auto___31647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28840__auto___31647,out){
return (function (){
var f__28841__auto__ = (function (){var switch__28728__auto__ = ((function (c__28840__auto___31647,out){
return (function (state_31613){
var state_val_31614 = (state_31613[(1)]);
if((state_val_31614 === (7))){
var inst_31609 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31615_31648 = state_31613__$1;
(statearr_31615_31648[(2)] = inst_31609);

(statearr_31615_31648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (1))){
var inst_31572 = [];
var inst_31573 = inst_31572;
var inst_31574 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31613__$1 = (function (){var statearr_31616 = state_31613;
(statearr_31616[(7)] = inst_31573);

(statearr_31616[(8)] = inst_31574);

return statearr_31616;
})();
var statearr_31617_31649 = state_31613__$1;
(statearr_31617_31649[(2)] = null);

(statearr_31617_31649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (4))){
var inst_31577 = (state_31613[(9)]);
var inst_31577__$1 = (state_31613[(2)]);
var inst_31578 = (inst_31577__$1 == null);
var inst_31579 = cljs.core.not.call(null,inst_31578);
var state_31613__$1 = (function (){var statearr_31618 = state_31613;
(statearr_31618[(9)] = inst_31577__$1);

return statearr_31618;
})();
if(inst_31579){
var statearr_31619_31650 = state_31613__$1;
(statearr_31619_31650[(1)] = (5));

} else {
var statearr_31620_31651 = state_31613__$1;
(statearr_31620_31651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (15))){
var inst_31603 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31621_31652 = state_31613__$1;
(statearr_31621_31652[(2)] = inst_31603);

(statearr_31621_31652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (13))){
var state_31613__$1 = state_31613;
var statearr_31622_31653 = state_31613__$1;
(statearr_31622_31653[(2)] = null);

(statearr_31622_31653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (6))){
var inst_31573 = (state_31613[(7)]);
var inst_31598 = inst_31573.length;
var inst_31599 = (inst_31598 > (0));
var state_31613__$1 = state_31613;
if(cljs.core.truth_(inst_31599)){
var statearr_31623_31654 = state_31613__$1;
(statearr_31623_31654[(1)] = (12));

} else {
var statearr_31624_31655 = state_31613__$1;
(statearr_31624_31655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (3))){
var inst_31611 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31613__$1,inst_31611);
} else {
if((state_val_31614 === (12))){
var inst_31573 = (state_31613[(7)]);
var inst_31601 = cljs.core.vec.call(null,inst_31573);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31613__$1,(15),out,inst_31601);
} else {
if((state_val_31614 === (2))){
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31613__$1,(4),ch);
} else {
if((state_val_31614 === (11))){
var inst_31577 = (state_31613[(9)]);
var inst_31581 = (state_31613[(10)]);
var inst_31591 = (state_31613[(2)]);
var inst_31592 = [];
var inst_31593 = inst_31592.push(inst_31577);
var inst_31573 = inst_31592;
var inst_31574 = inst_31581;
var state_31613__$1 = (function (){var statearr_31625 = state_31613;
(statearr_31625[(11)] = inst_31591);

(statearr_31625[(12)] = inst_31593);

(statearr_31625[(7)] = inst_31573);

(statearr_31625[(8)] = inst_31574);

return statearr_31625;
})();
var statearr_31626_31656 = state_31613__$1;
(statearr_31626_31656[(2)] = null);

(statearr_31626_31656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (9))){
var inst_31573 = (state_31613[(7)]);
var inst_31589 = cljs.core.vec.call(null,inst_31573);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31613__$1,(11),out,inst_31589);
} else {
if((state_val_31614 === (5))){
var inst_31577 = (state_31613[(9)]);
var inst_31581 = (state_31613[(10)]);
var inst_31574 = (state_31613[(8)]);
var inst_31581__$1 = f.call(null,inst_31577);
var inst_31582 = cljs.core._EQ_.call(null,inst_31581__$1,inst_31574);
var inst_31583 = cljs.core.keyword_identical_QMARK_.call(null,inst_31574,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31584 = (inst_31582) || (inst_31583);
var state_31613__$1 = (function (){var statearr_31627 = state_31613;
(statearr_31627[(10)] = inst_31581__$1);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31628_31657 = state_31613__$1;
(statearr_31628_31657[(1)] = (8));

} else {
var statearr_31629_31658 = state_31613__$1;
(statearr_31629_31658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (14))){
var inst_31606 = (state_31613[(2)]);
var inst_31607 = cljs.core.async.close_BANG_.call(null,out);
var state_31613__$1 = (function (){var statearr_31631 = state_31613;
(statearr_31631[(13)] = inst_31606);

return statearr_31631;
})();
var statearr_31632_31659 = state_31613__$1;
(statearr_31632_31659[(2)] = inst_31607);

(statearr_31632_31659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (10))){
var inst_31596 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31633_31660 = state_31613__$1;
(statearr_31633_31660[(2)] = inst_31596);

(statearr_31633_31660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (8))){
var inst_31577 = (state_31613[(9)]);
var inst_31581 = (state_31613[(10)]);
var inst_31573 = (state_31613[(7)]);
var inst_31586 = inst_31573.push(inst_31577);
var tmp31630 = inst_31573;
var inst_31573__$1 = tmp31630;
var inst_31574 = inst_31581;
var state_31613__$1 = (function (){var statearr_31634 = state_31613;
(statearr_31634[(14)] = inst_31586);

(statearr_31634[(7)] = inst_31573__$1);

(statearr_31634[(8)] = inst_31574);

return statearr_31634;
})();
var statearr_31635_31661 = state_31613__$1;
(statearr_31635_31661[(2)] = null);

(statearr_31635_31661[(1)] = (2));


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
});})(c__28840__auto___31647,out))
;
return ((function (switch__28728__auto__,c__28840__auto___31647,out){
return (function() {
var cljs$core$async$state_machine__28729__auto__ = null;
var cljs$core$async$state_machine__28729__auto____0 = (function (){
var statearr_31639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31639[(0)] = cljs$core$async$state_machine__28729__auto__);

(statearr_31639[(1)] = (1));

return statearr_31639;
});
var cljs$core$async$state_machine__28729__auto____1 = (function (state_31613){
while(true){
var ret_value__28730__auto__ = (function (){try{while(true){
var result__28731__auto__ = switch__28728__auto__.call(null,state_31613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28731__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28731__auto__;
}
break;
}
}catch (e31640){if((e31640 instanceof Object)){
var ex__28732__auto__ = e31640;
var statearr_31641_31662 = state_31613;
(statearr_31641_31662[(5)] = ex__28732__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31663 = state_31613;
state_31613 = G__31663;
continue;
} else {
return ret_value__28730__auto__;
}
break;
}
});
cljs$core$async$state_machine__28729__auto__ = function(state_31613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28729__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28729__auto____1.call(this,state_31613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28729__auto____0;
cljs$core$async$state_machine__28729__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28729__auto____1;
return cljs$core$async$state_machine__28729__auto__;
})()
;})(switch__28728__auto__,c__28840__auto___31647,out))
})();
var state__28842__auto__ = (function (){var statearr_31642 = f__28841__auto__.call(null);
(statearr_31642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28840__auto___31647);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28842__auto__);
});})(c__28840__auto___31647,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499781163973