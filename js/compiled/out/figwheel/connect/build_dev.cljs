(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [tictactoe.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/tictactoe.core.on-js-reload (apply js/tictactoe.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'tictactoe.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

