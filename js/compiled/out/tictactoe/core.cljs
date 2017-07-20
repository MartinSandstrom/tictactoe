(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn new-board [n]
  (vec (repeat n (vec (repeat n "B")))))

(def board-size 5)

(defonce app-state (atom
                    {:text "TicTacToe!"
                     :board (new-board board-size)
                     :board-size 5,
                     :status 1}))

(defn computer-move [board]
  (let [remaining-spots (for [i (range board-size)
                              j (range board-size)
                              :when (= (get-in board [j i]) "B")]
                          [j i])
        move (when (seq remaining-spots)
               (rand-nth remaining-spots))]
    (if move
      (assoc-in board move "C")
      board)))

(defn straight [owner board [x y] [dx dy] n]
  (every? true?
          (for [i (range n)]
            (= (get-in board [(+ (* dx i) x)
                              (+ (* dy i) y)])
               owner))))

(defn win? [owner board n]
  (some true?
        (for [i (range board-size)
              j (range board-size)
              dir [[1 0] [0 1] [1 1] [1 -1]]]
          (straight owner board [i j] dir n))))
          
(defn game-has-ended [player]
    (js/alert (if (= player "P") "You are the winner" "You lose"))
    (swap! app-state assoc :status 2))

(defn check-for-winner [player]
  (if (win? player (:board @app-state) board-size) 
      (game-has-ended player)))
  

(defn blank [i j]
  [:rect {:width 0.9
          :height 0.9
          :fill "grey"
          :x i
          :y j
          :on-click (fn rect-click [e]
                      (if (= (:status @app-state) 1) 
                          (swap! app-state assoc-in [:board i j] "P"))
                      (check-for-winner "P")
                      (if (= (:status @app-state) 1)
                          (swap! app-state update-in [:board] computer-move))
                      (check-for-winner "C"))}])

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

(defn change-board []
  (let [val (reagent/atom "")]
    (fn []
      [:div
       [:input {:type "text"
                :placeholder "New board size"
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button {:on-click #(
                    (swap! app-state assoc :board (new-board (int @val)))
                    (prn @val))}
        "Update board"]])))

(defn tictactoe []
  (let [val (reagent/atom "test")]
    [:center
     [:h1 (:text @app-state)]
     ;; ADD when it workd [:div {:style {:margin-bottom "20px"}} [change-board]]
     [:div [:svg {:view-box (str "0 0 " board-size " " board-size)
                  :width 500
                  :height 500}
            (doall
             (for [i (range (count (:board @app-state)))
                   j (range (count (:board @app-state)))]
               (case (get-in @app-state [:board i j])
                 "B" ^{:key (str i j)}[blank i j]
                 "P" ^{:key (str i j)}[circle i j]
                 "C" ^{:key (str i j)}[cross i j])))]]
     [:p
      [:button
       {:on-click #(
           (swap! app-state assoc :board (new-board board-size))
           (swap! app-state assoc :status 1))} "New game"]]]))

(reagent/render-component [tictactoe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (swap! app-state assoc-in [:text] "Hellow world from text"))
