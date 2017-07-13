(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [n]
    (vec (repeat n (vec (repeat n "B")))))

    
(def board-size 3)
    
(println (new-board board-size))

(defonce app-state (atom 
    {:text "Hello world from clojure!"
     :board (new-board board-size)}))
     
 (defn computer-move []
     (swap! app-state assoc-in [:board 0 0] "C"))
 
(defn blank [i j]
[:rect {:width 0.9 
         :height 0.9 
         :fill "grey"
         :x i 
         :y j
         :on-click (fn rect-click [e] 
             (swap! app-state assoc-in [:board i j ] "P")
             (computer-move))}])
 
 (defn circle [i j]
 [:circle {:r 0.45
           :cx (+ 0.5 i)
           :cy (+ 0.5 j)
           :fill "red"}])

(defn cross [i j]
[:g {:stroke "black" 
    :stroke-width 0.35
    :stroke-linecap "round"
    :transform (str "translate(" (+ 0.5 i) "," (+ 0.5 j) ") "
            "scale(0.35)")}
  [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
  [:line {:x1 -1 :y1 1 :x2 1 :y2 -1}]])

(defn tictactoe []
  [:center 
  [:h1 (:text @app-state)]
  [:svg {:view-box (str "0 0 " board-size " " board-size)
         :width 500 
         :height 500}
    (doall 
        (for [i (range (count (:board @app-state)))
              j (range (count (:board @app-state)))]
          (case (get-in @app-state [:board i j])
              "B" [blank i j]
              "P" [circle i j]
              "C" [cross i j])))]
  [:p 
    [:button 
        {:on-click 
            (fn new-game-click[e] 
            (swap! app-state assoc :board (new-board board-size)))} "New game"]]])

(reagent/render-component [tictactoe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (swap! app-state assoc-in [:text] "Hellow world from text")
)