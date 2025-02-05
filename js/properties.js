"use strict";

{
  const properties = [
    {
      "id": 1,
      "name": "accent-color",
      "prefix": null,
      "description": "accent-color は CSS のプロパティで、一部の要素で生成されるユーザーインターフェイス要素の強調表示色を設定します",
      "shorthand_property": null,
      "values": {
        "auto": "UA が選択した色を表します。プラットフォームの強調色がある場合は、それと一致します。",
        "<color>": "強調色として使用される色を指定します。"
      },
      "initial_value": {
        "accent-color": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/accent-color",
      "inheritance": true
    },
    {
      "id": 2,
      "name": "align-content",
      "prefix": "align",
      "description": "CSS の align-content プロパティは、フレックスボックスの交差軸またはグリッドのブロック軸方向の内部のアイテムの間または周囲の空間の配分方法を設定します。",
      "shorthand_property": null,
      "values": {
        "start": "各アイテムは、交差軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。",
        "end": "各アイテムは、交差軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。",
        "flex-start": "各アイテムは、フレックスコンテナーに依存して、交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は start のように扱われます。",
        "flex-end": "各アイテムは、フレックスコンテナーに依存して、交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は end のように扱われます。",
        "center": "各アイテムは、交差軸方向で配置コンテナーの中央に互いに寄せて配置されます。",
        "normal": "各アイテムは align-content の値が設定されていないかのように、既定の位置に寄せて配置されます。",
        "baseline, first baseline, last baseline": "first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。first baseline の代替配置は start、last baseline の代替配置は end です。",
        "space-between": "各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは配置コンテナーの交差軸の先頭側に寄せられ、最後のアイテムは配置コンテナーの交差軸の末尾側に寄せられます。",
        "space-around": "各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。",
        "space-evenly": "各アイテムは、配置コンテナーの中で交差軸方向に均等に配置されます。隣接するアイテム同士の間隔、先頭側の端と最初のアイテムの間のの余白、末尾側の端と最後のアイテムの間の余白は、まったく同じ幅になります。",
        "stretch": "各アイテムの交差軸方向の寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が auto のアイテムは、 max-height/max-width (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、交差軸方向の寸法の合計が配置コンテナーを満たすようになります。",
        "safe": "配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが start であったかのように配置されます。",
        "unsafe": "配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。"
      },
      "initial_value": {
        "align-content": "normal"
      },
      "applies_to": [
        "ブロックコンテナ",
        "マルチカラムコンテナ",
        "フレックスコンテナ"
      ],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/align-content#flex-start",
      "inheritance": false
    },
    {
      "id": 3,
      "name": "align-items",
      "prefix": "align",
      "description": "CSS の align-items プロパティは、すべての直接の子要素に集合として align-self の値を設定します。フレックスボックスでは交差軸方向のアイテムの配置を制御します。グリッドレイアウトでは、グリッド領域におけるアイテムのブロック軸方向の配置を制御します。",
      "shorthand_property": null,
      "values": {
        "normal": "このキーワードの効果は現在のレイアウトモードに依存します。",
        "flex-start": "フレックスアイテムの cross-start 側マージンの端は、ラインの cross-start の端に寄せられます。",
        "flex-end": "フレックスアイテムの cross-end 側マージンの端は、ラインの cross-end の端に寄せられます。",
        "center": "フレックスアイテムのマージンボックスは、交差軸上の中央に配置されます。アイテムの cross-size がフレックスコンテナより大きい場合は、両方向へ均等にはみ出します。",
        "start": "そのアイテムは、互いにその軸の配置コンテナーの先頭側の端に寄せられます。",
        "end": "そのアイテムは、互いにその軸の配置コンテナーの末尾側の端に寄せられます。",
        "self-start": "そのアイテムは、その軸の配置コンテナーで、そのアイテムの先頭側の端に寄せられます。",
        "self-end": "そのアイテムは、その軸の配置コンテナーで、そのアイテムの末尾側の端に寄せられます。",
        "baseline, first baseline, last baseline": "すべてのフレックスアイテムは、フレックスコンテナーのベースラインに沿って配置されます。 cross-start 側マージンの端とベースラインの間の距離が最大のアイテムが、ラインの cross-start の端に寄せられます。",
        "stretch": "アイテムのマージンボックスの cross-size が、幅や高さの制約の範囲内でラインと同じになるように拡張されます。",
        "safe": "配置キーワードと共に使用します。選択されたキーワードによって、アイテムが配置コンテナーをあふれてデータの損失が発生する場合、アイテムは配置モードが start であったかのように配置されます。",
        "unsafe": "配置キーワードと共に使用します。アイテムの寸法と配置コンテナーとの関係、あふれることによってデータの損失が発生するかどうかにかかわらず、指定された値を尊重します。"
      },
      "initial_value": {
        "align-items": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/align-items",
      "inheritance": false
    },
    {
      "id": 4,
      "name": "align-self",
      "prefix": "align",
      "description": "align-self は CSS のプロパティで、グリッドやフレックスのアイテムの align-items の値を上書きします。グリッドでは、アイテムはグリッド領域内で配置されます。フレックスボックスでは、アイテムは交差軸上で配置されます。",
      "shorthand_property": null,
      "values": {
        "auto": "親の align-items の値で計算します。",
        "normal": "このキーワードの効果は、現在のレイアウトモードに依存します。",
        "self-start": "アイテムは交差軸の開始側に対応する配置コンテナーの端に詰めて配置されます。",
        "self-end": "アイテムは交差軸の終端側に対応する配置コンテナーの端に詰めて配置されます。",
        "flex-start": "このフレックスアイテムの cross-start マージン側が、行の cross-start 側に詰められます。",
        "flex-end": "このフレックスアイテムの cross-end マージン側が、行の cross-end 側に詰められます。",
        "center": "このフレックスアイテムのマージンボックスが、行の交差軸方向の中央に配置されます。アイテムの交差軸方向の寸法がフレックスコンテナーよりも大きい場合は、両方向に均等にはみ出します。",
        "baseline, first baseline, last baseline": "first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。 first baseline の代替配置は start、last baseline の代替配置は end です。",
        "stretch": "アイテムの交差軸方向の寸法の合計値が、配置コンテナーの寸法よりも小さく、アイテムの寸法が auto であった場合、アイテムの寸法は max-height/max-width (または同等の機能) で課された制約を尊重しつつ、均等の寸法 (比例的ではない) に拡大されるので、 auto が指定されたアイテムすべての寸法の合計は、ちょうど配置コンテナーの交差軸方向を埋めるようになります。",
        "safe": "アイテムのサイズが配置コンテナーを超えるとき、アイテムは配置モードが start であったかのように配置されます。",
        "unsafe": "アイテムの配置コンテナーのサイズの関係にかかわらず、指定した値を尊重します。"
      },
      "initial_value": {
        "align-self": "auto"
      },
      "applies_to": ["フレックスアイテム", "グリッドアイテム", "絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/align-self",
      "inheritance": false
    },
    {
      "id": 5,
      "name": "all",
      "prefix": null,
      "description": "all は CSS の一括指定プロパティで、要素のすべてのプロパティを (unicode-bidi、direction、 CSS カスタムプロパティを除いて) 初期化します。プロパティは初期値または継承値、または他のカスケードレイヤーまたはスタイルシートに由来して指定した値に設定される可能性があります。",
      "shorthand_property": null,
      "values": {
        "initial": "その要素のすべてのプロパティを初期値に変更するべきであることを指定します。",
        "inherit": "その要素のすべてのプロパティを継承値に変更するべきであることを指定します。",
        "unset": "その要素のすべてのプロパティを、既定値が inherit のものは継承値に、そうでなければ初期値に変更するべきであることを指定します。",
        "revert": "宣言が所属するスタイルシートの出所に応じて動作を指定します。",
        "revert-layer": "その要素のすべてのプロパティを、直前のカスケードレイヤーが存在すれば、そこまでカスケードをロールバックすることを指定します。 他にカスケードレイヤーが存在しない場合、要素のプロパティは、現在のレイヤーに一致するルールが存在する場合はそのルール、または直前のスタイルオリジンにロールバックします。"
      },
      "initial_value": {
        "all": null
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/all",
      "inheritance": false
    },
    {
      "id": 6,
      "name": "animation",
      "prefix": "animation",
      "description": "animation は CSS の一括指定プロパティで、スタイルの間のアニメーションを適用します。これは animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state の一括指定です。",
      "shorthand_property": [
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timeline",
        "animation-timing-function"
      ],
      "values": {
        "<single-easing-function>": "推移の形式を決定します。値は <easing-function> で利用できる値のいずれかでなければなりません。",
        "<single-animation-iteration-count>": "アニメーションが実行される回数です。 animation-iteration-count で利用できる値の一つでなければなりません。",
        "<single-animation-direction>": "アニメーションが実行される方向です。 animation-direction で利用できる値の一つでなければなりません。",
        "<single-animation-fill-mode>": "メーションの実行の前後にどのようにスタイルが適用されるかを定めます。 animation-fill-mode で利用できる値の一つでなければなりません",
        "<single-animation-play-state>": "アニメーションが実行中かどうかを定めます。 animation-play-state で利用できる値の一つでなければなりません。"
      },
      "initial_value": {
        "animation-name": "none",
        "animation-duration": "0s",
        "animation-timing-function": "ease",
        "animation-delay": "0s",
        "animation-iteration-count": 1,
        "animation-direction": "normal",
        "animation-fill-mode": "none",
        "animation-play-state": "running",
        "mation-timeline": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation",
      "inheritance": false
    },
    {
      "id": 7,
      "name": "animation-composition",
      "prefix": "animation",
      "description": "animation-composition は CSS のプロパティで、複数のアニメーションが同じプロパティに同時に影響する場合に使用する合成演算を指定します。",
      "shorthand_property": null,
      "values": {
        "replace": "効果値がプロパティの基盤値を上書きします。これが既定値です。",
        "add": "効果値は、プロパティの基盤値の上に構築されます。この演算は加算効果をもたらします。加算演算が可換でない種類のアニメーションの場合、オペランドの順序は、基礎値の後に効果値が続きます。",
        "accumulate": "効果値と基礎値は結合されます。加算処理が可換でない種類のアニメーションでは、オペランドの順序は基礎値の後に効果値が続きます。"
      },
      "initial_value": {
        "animation-composition": "replace"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-composition",
      "inheritance": false
    },
    {
      "id": 8,
      "name": "animation-delay",
      "prefix": "animation",
      "description": "animation-delay は CSS のプロパティで、アニメーションをいつ開始するかを指定します。アニメーションは未来のある時点から、直ちに最初から、または直ちにアニメーション周期の途中から始めることができます。",
      "shorthand_property": null,
      "values": {
        "<time>": "アニメーションが要素に適用され、アニメーションが始まる瞬間からのオフセット時間。これは秒 (s) またはミリ秒 (ms) のどちらかで指定できます。単位は必須です。\n\n正の値を指定すると、指定した時刻が経過した後にアニメーションを始めることを示します。既定値である 0s は、アニメーションが適用されるとすぐに始めることを示します。\n\n負の数が指定された場合は、アニメーションは直ちに始まりますが、アニメーション周期の途中からになります。例えば、 -1s を遅延時間に指定すると、アニメーションは直ちに始まりますが、アニメーションが始まって1秒の時点から始まります。アニメーションの遅延時間に負の値を指定しても、暗黙的に開始値が指定されている場合、開始値はアニメーションが要素に適用された瞬間から取得されます。"
      }, 
      "initial_value": {
        "animation-delay": "0s"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-delay",
      "inheritance": false
    },
    {
      "id": 9,
      "name": "animation-direction",
      "prefix": "animation",
      "description": "animation-direction は CSS のプロパティで、アニメーション再生の向きを順方向、逆方向、前後反転のいずれにするかを設定します。",
      "shorthand_property": null,
      "values": {
        "normal": "アニメーションを毎回順方向に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最初の状態にリセットしてそこからまた始めます。これが既定値です。",
        "reverse": "アニメーションを毎回逆方向に再生します。言い換えれば、アニメーション周期ごとに、アニメーションを最後の状態にリセットしてそこからまた始めます。アニメーションを逆方向に実行し、イージング関数も逆になります。例えば、イージング関数の ease-in が ease-out になります。",
        "alternate": "アニメーションを毎回反転させ、初回は順方向になります。周期が偶数か奇数かを特定する回数は1から始まります。",
        "alternate-reverse": "アニメーションを毎回反転させ、初回は逆方向になります。周期が偶数か奇数かを特定する回数は1から始まります。"
      },
      "initial_value": {
        "animation-direction": "normal"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-direction",
      "inheritance": false
    },
    {
      "id": 10,
      "name": "animation-duration",
      "prefix": "animation",
      "description": "animation-duration は CSS のプロパティで、 1 回のアニメーション周期が完了するまでの再生時間を設定します。",
      "shorthand_property": null,
      "values": {
        "<time>": "1 回のアニメーションの周期にかかる時間。この値は、秒 (s) またはミリ秒 (ms) で指定することができます。値は正の数か 0 でなければならず、単位は必須です。\n\n値が指定されなかった場合、既定値である 0s が使用され、この場合でもアニメーションは実行されます（animationStart と animationEnd イベントが発生します）。長さが 0s のときにアニメーションが表示されるかどうかは、下記で説明する animation-fill-mode の値によります。"
      },
      "initial_value": {
        "animation-duration": "0s"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-duration",
      "inheritance": false
    },
    {
      "id": 11,
      "name": "animation-iteration-count",
      "prefix": "animation",
      "description": "animation-iteration-count は CSS のプロパティで、停止するまでにアニメーション周期が再生される回数を指定します。",
      "shorthand_property": null,
      "values": {
        "infinite": "アニメーションは無制限に繰り返されます。",
        "<number>": "アニメーションが繰り返される回数です。既定値は 1 です。アニメーション周期の一部を再生したい場合は、非整数の値を指定できます。例えば、 0.5 はアニメーション周期の半分を再生します。負の数は無効です"
      },
      "initial_value": {
        "animation-iteration-count": 1
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-iteration-count",
      "inheritance": false
    },
    {
      "id": 12,
      "name": "animation-name",
      "prefix": "animation",
      "description": "animation-name は CSS のプロパティで、要素に適用されるアニメーションを記述する 1 つまたは複数の @keyframes アットルールの名前を指定します。複数の @keyframe アットルールをカンマ区切りの文字列で指定します。指定した名前がどの @keyframe アットルールにも一致しない場合、プロパティはアニメーションしません。",
      "shorthand_property": null,
      "values": {
        "none": "キーフレームがないことを示す特別なキーワード。他の識別子の順序を変更せずにアニメーションを非アクティブにする、またはカスケードからのアニメーションを非アクティブにするために使用できます。",
        "<custom-ident>": "アニメーションを識別する名前です。識別子は大文字小文字の区別がない英文字 a から z、 数字 0 から 9、 アンダースコア (_)、 ダッシュ (-) から成ります。最初のダッシュ以外の文字は英文字でなければなりません。また、二重ダッシュは識別子の先頭では禁止されています。さらに、識別子は none, unset, initial, inherit であってはなりません。"
      },
      "initial_value": {
        "animation-name": "none"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-name",
      "inheritance": false
    },
    {
      "id": 13,
      "name": "animation-play-state",
      "prefix": "animation",
      "description": "animation-play-state は CSS のプロパティで、アニメーションが実行中か停止中かを設定します。",
      "shorthand_property": null,
      "values": {
        "running": "アニメーションが現在実行中です。",
        "paused": "アニメーションが現在停止中です。"
      },
      "initial_value": {
        "animation-play-state": "running"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-play-state",
      "inheritance": false
    },
    {
      "id": 14,
      "name": "animation-timing-function",
      "prefix": "animation",
      "description": "animation-timing-function は CSS のプロパティで、アニメーションがそれぞれの周期の中でどのように進行するかを設定します。",
      "shorthand_property": null,
      "values": {
        "<easing-function>": "animation-name で定められた、アニメーションに対応するイージング関数です。\n\nステップではないキーワード値 (ease, linear, ease-in-out など) は、それぞれ固定の 4 点値を持つ三次ベジェ曲線を表し、 cubic-bezier() 関数の値で非定義値を指定することができます。ステップイージング関数は、入力時間を長さが等しい指定された数の間隔に分割します。これは、ステップ数とステップ位置によって定義されます。",
        "ease": "cubic-bezier(0.25, 0.1, 0.25, 1.0) と同じで、既定値であり、アニメーションの中央に向けて変化量が増加し、最後に向けて減少します。",
        "linear": "cubic-bezier(0.0, 0.0, 1.0, 1.0) と同じで、等しい速度でアニメーションします。",
        "ease-in": "cubic-bezier(0.42, 0, 1.0, 1.0) と同じで、プロパティのアニメーションの変化の速度はゆっくり始まり、終了まで加速します。",
        "ease-out": "cubic-bezier(0, 0, 0.58, 1.0) と同じで、アニメーションは速く始まり、速度を落としながら続きます。",
        "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1.0) と同じで、プロパティのアニメーションはゆっくり変化し、速度を上げ、また速度を落とします。",
        "cubic-bezier(p1, p2, p3, p4)": "ユーザー定義の二次元ベジェ曲線で、 p1 と p3 の値は 0 から 1 の間である必要があります。"
      },
      "initial_value": {
        "animation-timing-function": "ease"
      },
      "applies_to": ["すべての要素", "::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/animation-timing-function",
      "inheritance": false
    },
    {
      "id": 15,
      "name": "appearance",
      "prefix": null,
      "description": "appearance は CSS のプロパティで、オペレーティングシステムのテーマに基づいた、プラットフォーム固有のスタイル設定で UI 要素を表示するために使用します。",
      "shorthand_property": null,
      "values": {
        "none": "select要素に掲載されている、リストが展開されたことを示す矢印など、ウィジェットの特定の機能を非表示にします。",
        "auto": "特別なスタイル設定のない要素に対しては none として動作します。",
        "<compat-special>": "menulist-button または textfield のどちらかです。 これらの値はどちらも、特別なスタイル設定のない要素では auto と等価です。",
        "<compat-auto>": "利用可能な値は button, checkbox, listbox, menulist, meter, progress-bar, push-button, radio, searchfield, slider-horizontal, square-button, textarea です。 古いブラウザーとの互換性を保つための auto に相当するキーワードです。"
      },
      "initial_value": {
        "appearance": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/appearance",
      "inheritance": false
    },
    {
      "id": 16,
      "name": "aspect-ratio",
      "prefix": null,
      "description": "aspect-ratio は CSS のプロパティで、ボックスの推奨アスペクト比を設定します。これは auto の大きさを計算したり、他のレイアウト関数で使用されたりします。",
      "shorthand_property": null,
      "values": {
        "auto": "内在的なアスペクト比がある置換要素の場合は、そのアスペクト比を使用し、それ以外の場合はボックスに推奨アスペクト比が設定されません。内在的なアスペクト比を使用して寸法を計算する際には、常にコンテンツボックスの寸法に対して行われます。",
        "<ratio>": "ボックスの推奨アスペクト比は、width / height で指定された比率です。height とそれに先立つスラッシュ文字が省略された場合、height の既定値は 1 です。推奨アスペクト比を含む寸法の計算では、box-sizing で指定されたボックスの寸法で行われます。"
      },
      "initial_value": {
        "aspect-ratio": "auto"
      },
      "applies_to": ["インラインボックスおよび内部のルビまたは表ボックスを除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/aspect-ratio",
      "inheritance": false
    },
    {
      "id": 17,
      "name": "backdrop-filter",
      "prefix": null,
      "description": "backdrop-filter は CSS のプロパティで、要素の背後の領域に、ぼかしや色変化のようなグラフィック効果を適用することができます。要素の背後のすべてに適用されるため、効果を見るためには少なくとも一部が透明な要素またはその背景を作成する必要があります。",
      "shorthand_property": null,
      "values": {
        "none": "背後にフィルターを適用しません。",
        "<filter-function-list>": "背景に適用する <filter-function> または SVG フィルターの空白区切りのリストです。"
      },
      "initial_value": {
        "backdrop-filter": "none"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/backdrop-filter",
      "inheritance": false
    },
    {
      "id": 18,
      "name": "backface-visibility",
      "prefix": null,
      "description": "backface-visibility は CSS のプロパティで、要素がユーザーに対して裏側を向いたときに、裏面を可視にするかどうかを設定します。",
      "shorthand_property": null,
      "values": {
        "visible": "ユーザーに対して裏を向いたとき、背面が可視になります。",
        "hidden": "背面が非表示になり、要素がユーザーに対して反対を向いたときに不可視にするのに便利です。"
      },
      "initial_value": {
        "backface-visibility": "visible"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/backface-visibility",
      "inheritance": false
    },
    {
      "id": 19,
      "name": "background",
      "prefix": "background",
      "description": "background は CSS の一括指定プロパティで、色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定します。 background 一括指定プロパティの値宣言で設定されていない成分のプロパティは、既定値に設定されます。",
      "shorthand_property": [
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size"
      ],
      "values": {
        "<attachment>": "background-attachment を参照。既定値は scroll です。",
        "<box>": "background-clip および background-origin を参照。既定値はそれぞれ border-box および padding-box です。",
        "<background-color>": "background-color を参照。既定値は transparent です。",
        "<bg-image>": "background-image を参照。既定値は none です。",
        "<position>": "background-position を参照。既定値は 0% 0% です。",
        "<repeat-style>": "background-repeat を参照。既定値は repeat です。",
        "<bg-size>": "background-size を参照。既定値は auto です。"
      },
      "initial_value": {
        "background-image": "none",
        "background-position": "0% 0%",
        "background-size": "auto auto",
        "background-repeat": "repeat",
        "background-origin": "padding-box",
        "background-clip": "border-box",
        "background-attachment": "scroll",
        "background-color": "transparent"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background",
      "inheritance": false
    },
    {
      "id": 20,
      "name": "background-attachment",
      "prefix": "background",
      "description": "background-attachment は CSS のプロパティで、背景画像の位置をビューポートの中で固定するか、包含ブロックと一緒にスクロールするかを設定します。",
      "shorthand_property": null,
      "values": {
        "fixed": "背景はビューポートに対する相対位置で固定されます。要素がスクロール機構を持っていたとしても、背景画像は要素とともには動きません。 (これは background-clip: text とは両立できません)",
        "local": "背景は要素の内容に対する相対位置で固定されます。要素がスクロール機構を持っていた場合、背景画像は要素の内容とともにスクロールします。背景画像の描画エリアと配置エリアは、それらを囲む境界ではなく、要素のスクロール可能なエリアを基準にします。",
        "scroll": "背景は要素自身に対する相対位置で固定され、内容と共にスクロールしません。 (要素の境界に対して効果的に張り付きます。)"
      },
      "initial_value": {
        "background-attachment": "scroll"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-attachment",
      "inheritance": false
    },
    {
      "id": 21,
      "name": "background-blend-mode",
      "prefix": "background",
      "description": "background-blend-mode は CSS のプロパティで、要素の背景画像が相互にどのように混合されるか、また要素の背景色とどのように混合されるかを設定します。",
      "shorthand_property": null,
      "values": {
        "<blend-mode>": "適用する混合モードです。複数の値をカンマ区切りで置くことができます。"
      },
      "initial_value": {
        "background-blend-mode": "normal"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-blend-mode",
      "inheritance": false
    },
    {
      "id": 22,
      "name": "background-clip",
      "prefix": "background",
      "description": "background-clip は CSS のプロパティで、要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定します。",
      "shorthand_property": null,
      "values": {
        "border-box": "背景を境界の外側の辺まで拡張します (但し、境界の下に重ね合わせられます)。",
        "padding-box": "背景をパディングの外側の辺まで拡張します。境界の下には背景が描かれません。",
        "content-box": "背景をコンテンツボックスの中に (切り取って) 表示します。",
        "text": "背景を前景のテキストの中に (切り取って) 表示します。"
      },
      "initial_value": {
        "background-clip": "border-box"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-clip",
      "inheritance": false
    },
    {
      "id": 23,
      "name": "background-color",
      "prefix": "background",
      "description": "background-color は CSS のプロパティで、要素の背景色を設定します。",
      "shorthand_property": null,
      "values": {
        "<color>": "背景の単一色 (uniform color) を表します。指定されていれば background-image の背後に描画されますが、画像に透明な部分があれば色が見えます。"
      },
      "initial_value": {
        "background-color": "transparent"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-color",
      "inheritance": false
    },
    {
      "id": 24,
      "name": "background-image",
      "prefix": "background",
      "description": "background-image は CSS のプロパティで、要素に 1 つ以上の背景画像を設定します。",
      "shorthand_property": null,
      "values": {
        "none": "画像を用いないことを表すキーワード。",
        "<image>": "表示する背景を記述する <image>。複数の背景に対応している場合は、カンマ区切りで複数指定することができます。"
      },
      "initial_value": {
        "background-image": "none"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-image",
      "inheritance": false
    },
    {
      "id": 25,
      "name": "background-origin",
      "prefix": "background",
      "description": "background-origin は CSS のプロパティで、背景配置領域を境界の開始位置、境界の内部、パディングの内部から設定します。",
      "shorthand_property": null,
      "values": {
        "border-box": "背景は境界ボックスからの相対位置になります。",
        "padding-box": "背景はパディングボックスからの相対位置になります。",
        "content-box": "背景はコンテンツボックスからの相対位置になります。"
      },
      "initial_value": {
        "background-origin": "padding-box"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-origin",
      "inheritance": false
    },
    {
      "id": 26,
      "name": "background-position",
      "prefix": "background",
      "description": "background-position は CSS のプロパティで、それぞれの背景画像の初期位置を設定します。位置は background-origin で設定された位置レイヤーからの相対です。",
      "shorthand_property": null,
      "values": {
        "<position>": "<position> です。位置は要素のボックスの辺を基準にしてアイテムを配置するための X/Y 座標を定義します。 1 ～ 4 つの値を使用して定義できます。 2 つのキーワード値でない値を使用する場合は、最初の値が水平位置を表し、 2 つ目の値が垂直位置を表します。 1 つの値しか指定されない場合、 2 つ目の値は center とみなされます。 3 つまたは 4 つの値が使用された場合は、 length-percentage 値はその前のキーワード値に対するオフセットです。"
      },
      "initial_value": {
        "background-position": "0% 0%"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-position",
      "inheritance": false
    },
    {
      "id": 27,
      "name": "background-position-x",
      "prefix": "background",
      "description": "background-position-x は CSS のプロパティで、各背景画像における水平の初期位置を設定します。位置は background-origin によって設定された位置レイヤーに対する相対位置です。",
      "shorthand_property": null,
      "values": {
        "left": "背景画像の左端を、背景位置レイヤーの左端に配置します。",
        "center": "背景画像を背景位置レイヤーの方向の中央に配置します。",
        "right": "背景画像の右端を、背景位置レイヤーの右端に配置します。",
        "<length>": "指定された背景画像の左辺の、背景位置レイヤーの左辺からのオフセットです。 (ブラウザーによってはオフセットに右辺を割り当てることもできます)。",
        "<percentage>": "指定された背景画像の水平位置のオフセットで、コンテナーからの相対値です。 0% の値は背景画像の左端がコンテナーの左端の位置に配置されることを意味し、 100% の値は背景画像の右端が、コンテナーの右端の位置に配置されることを意味します。したがって、 50% の値では、背景画像を水平方向の中央に配置します。"
      },
      "initial_value": {
        "background-position-x": "0%"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-position-x",
      "inheritance": false
    },
    {
      "id": 28,
      "name": "background-position-y",
      "prefix": "background",
      "description": "background-position-y は CSS のプロパティで、各背景画像における垂直の初期位置を設定します。位置は background-origin によって設定された位置レイヤーに対する相対位置です。",
      "shorthand_property": null,
      "values": {
        "top": "背景画像の上端を、背景位置レイヤーの上端に合わせます。",
        "center": "背景画像を垂直方向の中央を、背景位置レイヤーの垂直方向の中央に合わせます。",
        "bottom": "背景画像の下端を、背景位置レイヤーの下端に合わせます。",
        "<length>": "指定された背景画像の垂直方向の辺の、対応する背景位置レイヤーの上側の垂直方向の辺を基準としたオフセットです。 (一部のブラウザーではオフセットの下辺に割り当てることができます。)",
        "<percentage>": "指定された背景画像のコンテナーに対する垂直方向の相対位置のオフセットです。 0% の値は背景画像の上辺がコンテナーの上辺に配置されることを意味し、 100% の値は背景画像の下辺がコンテナーの下辺に配置されることを意味しますので、 50% の値は背景画像を垂直方向に中央揃えします。"
      },
      "initial_value": {
        "background-position-y": "0%"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-position-y",
      "inheritance": false
    },
    {
      "id": 29,
      "name": "background-repeat",
      "prefix": "background",
      "description": "background-repeat は CSS のプロパティで、背景画像をどのように繰り返すかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく繰り返さないようにしたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<repeat-style>": "値 1 つの構文は完全な値 2 つの構文に対する一括指定です。"
      },
      "initial_value": {
        "background-repeat": "repeat"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-repeat",
      "inheritance": false
    },
    {
      "id": 30,
      "name": "background-size",
      "prefix": "background",
      "description": "background-size は CSS のプロパティで、要素の背景画像の寸法を設定します。 画像は自然な寸法になったり、引き伸ばされたり、利用可能な領域に収まるように縮小されたりします。",
      "shorthand_property": null,
      "values": {
        "contain": "画像を切り取ったり縦横比を崩したりすることなく、コンテナー内で可能な限り大きくします。 コンテナーが画像よりも大きい場合、background-repeat プロパティが no-repeat に設定されていない限り、画像がタイル状に配置されます。",
        "cover": "画像を（その比率を保ったまま）コンテナーを埋めることが可能な（つまり、高さと幅の両方がコンテナーを完全に覆う）最小のサイズに変倍し、何もない空間を残しません。 背景画像の縦横比が要素と異なる場合は、画像の上下または左右が切り取られます。",
        "auto": "背景画像の本来の比率が維持されるように、対応する方向に変倍します。",
        "<length>": "その軸が指定された長さになるよう画像を変倍します。負の値は使用できません。",
        "<percentage>": "その軸が背景配置領域の指定された割合になるよう変倍します。 背景配置領域とは、 background-origin の値 (既定ではパディングボックス) によって定められます。 しかし、背景の background-attachment の値が fixed の場合、配置領域はビューポート全体となります。 負の値は使用できません。"
      },
      "initial_value": {
        "background-size": "auto auto"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/background-size",
      "inheritance": false
    },
    {
      "id": 31,
      "name": "block-size",
      "prefix": null,
      "description": "block-size は CSS のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは width または height プロパティに相当し、 writing-mode の値によって変わります。\n\n書字方向が垂直方向であった場合、 block-size の値は要素の幅に対応し、水平方向であった場合は要素の高さに対応します。関連プロパティの inline-size が要素のもう一方の寸法を定義します。",
      "shorthand_property": null,
      "values": {
        "block-size プロパティは、width や height プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "block-size": "auto"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/block-size",
      "inheritance": false
    },
    {
      "id": 32,
      "name": "border",
      "prefix": "border",
      "description": "border は CSS の 一括指定プロパティで、要素の境界を設定します。これは border-width, border-style, border-color の値を設定します。",
      "shorthand_property": [
        "border-color",
        "border-style",
        "border-width"
      ],
      "values": {
        "<line-width>": "境界線の太さを設定します。指定されなかった場合は既定値の medium になります。 border-width を参照してください。",
        "<line-style>": "境界線の種類を設定します。指定されなかった場合は既定値の none になります。 border-style を参照してください。",
        "<color>": "境界線の色を設定します。指定されなかった場合は既定値で要素の color プロパティになります。 border-color を参照してください。"
      },
      "initial_value": {
        "border-width": "medium",
        "border-style": "none",
        "border-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border",
      "inheritance": false
    },
    {
      "id": 33,
      "name": "border-block",
      "prefix": "border",
      "description": "The border-block は CSS のプロパティで、論理的なブロック方向のそれぞれの境界プロパティをスタイルシートの 1 ヶ所で設定する一括指定プロパティです。",
      "shorthand_property": [
        "border-block-color",
        "border-block-style",
        "border-block-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境界線の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-width": "medium",
        "border-style": "none",
        "border-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block",
      "inheritance": false
    },
    {
      "id": 34,
      "name": "border-block-color",
      "prefix": "border",
      "description": "border-block-end-color は CSS のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color および border-bottom-color、または border-right-color および border-left-color のどちらかに対応し、どちらに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-block-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-color",
      "inheritance": false
    },
    {
      "id": 35,
      "name": "border-block-end",
      "prefix": "border",
      "description": "border-block-end は CSS のプロパティで、個々の論理的なブロック方向の末尾側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための一括指定プロパティです。",
      "shorthand_property": [
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-top-width": "medium",
        "border-top-style": "none",
        "border-top-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-end",
      "inheritance": false
    },
    {
      "id": 36,
      "name": "border-block-end-color",
      "prefix": "border",
      "description": "border-block-end-color は CSS のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color, border-right-color, border-bottom-color, border-left-color の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-block-end-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-end-color",
      "inheritance": false
    },
    {
      "id": 37,
      "name": "border-block-end-style",
      "prefix": "border",
      "description": "border-block-end-style は CSS のプロパティで、要素の論理的なブロックの終端側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style, border-right-style, border-bottom-style, border-left-style の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-block-end-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-end-style",
      "inheritance": false
    },
    {
      "id": 38,
      "name": "border-block-end-width",
      "prefix": "border",
      "description": "border-block-end-width は CSS のプロパティで、要素の論理的なブロックの終端側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width, border-right-width, border-bottom-width, border-left-width の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-block-end-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-end-width",
      "inheritance": false
    },
    {
      "id": 39,
      "name": "border-block-start",
      "prefix": "border",
      "description": "border-block-start は CSS のプロパティで、個々の論理的なブロック方向の先頭側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための一括指定プロパティです。",
      "shorthand_property": [
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-width": "medium",
        "border-style": "none",
        "color": "canvastext"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-start",
      "inheritance": false
    },
    {
      "id": 40,
      "name": "border-block-start-color",
      "prefix": "border",
      "description": "border-block-start-color は CSS のプロパティで、要素の論理的なブロックの先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color, border-right-color, border-bottom-color, border-left-color の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "border-color を参照してください。"
      },
      "initial_value": {
        "border-block-start-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-start-color",
      "inheritance": false
    },
    {
      "id": 41,
      "name": "border-block-start-style",
      "prefix": "border",
      "description": "border-block-start-style は CSS のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style, border-right-style, border-bottom-style, border-left-style の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界の線のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-block-start-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-start-style",
      "inheritance": false
    },
    {
      "id": 42,
      "name": "border-block-start-width",
      "prefix": "border",
      "description": "border-block-start-width は CSS のプロパティで、要素の論理的なブロックの先頭側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width, border-right-width, border-bottom-width, border-left-width の何れかに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-block-start-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-start-width",
      "inheritance": false
    },
    {
      "id": 43,
      "name": "border-block-style",
      "prefix": "border",
      "description": "border-block-style は CSS のプロパティで、要素の論理的なブロック方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style と border-bottom-style、または border-left-style と border-right-style のどちらかに対応し、どちらに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-block-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-style",
      "inheritance": false
    },
    {
      "id": 44,
      "name": "border-block-width",
      "prefix": "border",
      "description": "border-block-width は CSS のプロパティで、要素の論理的なブロック方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width と border-bottom-width、または border-left-width と border-right-width のどちらかに対応し、どちらに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-block-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-block-width",
      "inheritance": false
    },
    {
      "id": 45,
      "name": "border-bottom",
      "prefix": "border",
      "description": "border-bottom は一括指定の CSS のプロパティで、要素の下側の境界のプロパティをすべて設定します。",
      "shorthand_property": [
        "border-bottom-color",
        "border-bottom-style",
        "border-bottom-width"
      ],
      "values": {
        "<br-width>": "border-bottom-width を参照してください。",
        "<br-style>": "border-bottom-style を参照してください。",
        "<color>": "border-bottom-color を参照してください。"
      },
      "initial_value": {
        "border-bottom-width": "medium",
        "border-bottom-style": "none",
        "border-bottom-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom",
      "inheritance": false
    },
    {
      "id": 46,
      "name": "border-bottom-color",
      "prefix": "border",
      "description": "border-bottom-color は CSS のプロパティで、要素の下側の境界線の色を設定します。一括指定プロパティの border-color または border-bottom でも設定することができます。",
      "shorthand_property": null,
      "values": {
        "<color>": "下の境界線の色を定義します。"
      },
      "initial_value": {
        "border-bottom-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom-color",
      "inheritance": false
    },
    {
      "id": 47,
      "name": "border-bottom-left-radius",
      "prefix": "border",
      "description": "border-bottom-left-radius は CSS のプロパティで、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左下の角を丸めます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-bottom-left-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom-left-radius",
      "inheritance": false
    },
    {
      "id": 48,
      "name": "border-bottom-right-radius",
      "prefix": "border",
      "description": "border-bottom-right-radius は CSS のプロパティで、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の右下の角を丸めます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-bottom-right-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom-right-radius",
      "inheritance": false
    },
    {
      "id": 49,
      "name": "border-bottom-style",
      "prefix": "border",
      "description": "border-bottom-style は CSS のプロパティで、要素の下側の境界線 (border) のスタイルを設定します。",
      "shorthand_property": null,
      "values": {
        "border-bottom-style プロパティは、単一の <line-style> キーワード値で指定します。": null
      },
      "initial_value": {
        "border-bottom-style": "none"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom-style",
      "inheritance": false
    },
    {
      "id": 50,
      "name": "border-bottom-width",
      "prefix": "border",
      "description": "border-bottom-width は CSS のプロパティで、ボックスの下の境界の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<line-width>": "境界の幅を、明示的な非負の <length> またはキーワードで定義します。キーワードの場合、以下の値のいずれかでなければなりません。"
      },
      "initial_value": {
        "border-bottom-width": "medium"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-bottom-width",
      "inheritance": false
    },
    {
      "id": 51,
      "name": "border-color",
      "prefix": "border",
      "description": "border-color は一括指定を行う CSS のプロパティで、要素の境界の色を設定します。",
      "shorthand_property": [
        "border-bottom-color",
        "border-left-color",
        "border-right-color",
        "border-top-color"
      ],
      "values": {
        "<color>": "境界線の色を定義します。"
      },
      "initial_value": {
        "border-top-color": "currentcolor",
        "border-right-color": "currentcolor",
        "border-bottom-color": "currentcolor",
        "border-left-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-color",
      "inheritance": false
    },
    {
      "id": 52,
      "name": "border-collapse",
      "prefix": "border",
      "description": "border-collapse は CSS のプロパティで、表 (<table>) の中のセルが境界を共有するか分離するかを設定します。",
      "shorthand_property": null,
      "values": {
        "collapse": "隣接するセルで境界線を共有します (collapsed-border 表レンダリングモデル)。",
        "separate": "隣接するセルが個別に境界線を持ちます (separated-border 表レンダリングモデル)。"
      },
      "initial_value": {
        "border-collapse": "separate"
      },
      "applies_to": ["table および inline-table 要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-collapse",
      "inheritance": false
    },
    {
      "id": 53,
      "name": "border-end-end-radius",
      "prefix": "border",
      "description": "border-end-end-radius は CSS のプロパティで、要素の論理的な境界の半径を定義します。これは要素の writing-mode, direction, text-orientation に応じて、物理的な境界の半径に対応づけられます。これはテキストの方向や書字方向に依存せずにスタイルを構築する際に便利です。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径及び短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-end-end-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-end-end-radius",
      "inheritance": false
    },
    {
      "id": 54,
      "name": "border-end-start-radius",
      "prefix": "border",
      "description": "border-end-start-radius は CSS のプロパティで、要素の論理的な境界の半径を定義します。これは要素の writing-mode, direction, text-orientation に応じて、物理的な境界の半径に対応づけられます。これはテキストの方向や書字方向に依存せずにスタイルを構築する際に便利です。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-end-start-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-end-start-radius",
      "inheritance": false
    },
    {
      "id": 55,
      "name": "border-image",
      "prefix": "border",
      "description": "border-image は CSS のプロパティで、指定された要素の周りに画像を描きます。これは要素の通常の境界を置き換えます。",
      "shorthand_property": [
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width"
      ],
      "values": {
        "<'border-image-source'>": "元となる画像です。 border-image-source を参照してください。",
        "<'border-image-slice'>": "source の画像を領域に分割する座標です。4つまでの値が指定できます。 border-image-slice を参照してください。",
        "<'border-image-width'>": "境界画像の幅です。4つまでの値が指定できます。 border-image-width を参照してください。",
        "<'border-image-outset'>": "要素の縁から境界画像までの間隔です。4つまでの値が指定できます。 border-image-outset を参照してください。",
        "<'border-image-repeat'>": "source の画像の辺の領域を境界画像の寸法にどのように合わせるかを定義します。2つまでの値が指定できます。 border-image-repeat を参照してください。"
      },
      "initial_value": {
        "border-image-source": "none",
        "border-image-slice": "100%",
        "border-image-width": 1,
        "border-image-outset": 0,
        "border-image-repeat": "stretch"
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image",
      "inheritance": false
    },
    {
      "id": 56,
      "name": "border-image-outset",
      "prefix": "border",
      "description": "border-image-outset は CSS のプロパティで、要素の境界画像が境界ボックスからはみ出す幅を設定します。\n\n境界画像のうち、 border-image-outset によって要素の境界ボックスの外に表示された部分は、はみ出した際にスクロールバーを表示させたり、マウスイベントを受け取ったりすることはありません。",
      "shorthand_property": null,
      "values": {
        "<length>": "border-image がはみ出す寸法を長さ — 数値と単位で指定します。",
        "<number>": "border-image がはみ出す寸法を、要素の対応する border-width の倍数で指定します。例えば、要素が border-width: 1em 2px 0 1.5rem で、 border-image-outset: 2 であると、最終的な border-image-outset は 2em 4px 0 3rem として計算されます。"
      },
      "initial_value": {
        "border-image-outset": 0
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image-outset",
      "inheritance": false
    },
    {
      "id": 57,
      "name": "border-image-repeat",
      "prefix": "border",
      "description": "CSS の border-image-repeat プロパティは、元画像の辺の領域と中央の領域を、どうやって要素の境界画像に合うように合わせるかを定義します。 border-image-slice プロパティでキーワード \"fill\" を使用することで、中央の領域を表示することができます。",
      "shorthand_property": null,
      "values": {
        "stretch": "2 つの境界の間を埋めるために、元画像の辺の領域が引き伸ばされます。",
        "repeat": "2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域の一部が切り取られることがあります。",
        "round": "2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域が引き延ばされることがあります。",
        "space": "2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域間に間隔が置かれることがあります。"
      },
      "initial_value": {
        "border-image-repeat": "stretch"
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image-repeat",
      "inheritance": false
    },
    {
      "id": 58,
      "name": "border-image-slice",
      "prefix": "border",
      "description": "border-image-slice は CSS のプロパティで、 border-image-source で指定された画像を複数の領域に分割します。これらの領域は境界画像の部品を構成します。",
      "shorthand_property": null,
      "values": {
        "<number>": "縁からのオフセットを、ラスター画像の場合はピクセル数で、ベクター画像の場合は座標で表します。ベクター画像の場合、数値は元の画像の寸法ではなく、要素の寸法に対する相対値になるので、この場合は一般にパーセント値の方が適しています。",
        "<percentage>": "縁からのオフセットを、元の画像の寸法、つまり水平方向のオフセットであれば画像の幅、垂直方向のオフセットであれば画像の高さに対するパーセント値で表します。",
        "fill": "中央の画像領域を維持し、背景画像のように表示しますが、実際の background の上に重ねられます。幅と高さは、画像領域のそれぞれ上と左に一致するように拡縮されます。"
      },
      "initial_value": {
        "border-image-slice": "100%"
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image-slice",
      "inheritance": false
    },
    {
      "id": 59,
      "name": "border-image-source",
      "prefix": "border",
      "description": "border-image-source は CSS のプロパティで、要素の境界画像に使われる元の画像を設定します。",
      "shorthand_property": null,
      "values": {
        "none": "境界画像は使用されません。代わりに border-style で定義されたものが表示されます。",
        "<image>": "境界に使用する画像への参照です。"
      },
      "initial_value": {
        "border-image-source": "none"
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image-source",
      "inheritance": false
    },
    {
      "id": 60,
      "name": "border-image-width",
      "prefix": "border",
      "description": "border-image-width は CSS のプロパティで、要素の境界画像の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "境界の幅を、 <length> または <percentage> で指定します。パーセント値は水平オフセットにおいては境界画像の領域の幅、また垂直オフセットにおいては境界画像の領域の高さです。負の値であってはいけません。",
        "<number>": "境界の幅を、対応する border-width に対する倍率として指定します。負の値であってはいけません。",
        "auto": "境界の幅が、対応する border-image-slice の本質的な幅と高さ (もしあれば) と等しくなるようにします。画像が本質的な寸法を持っていないのであれば、対応する border-width が代わりに使用されます。"
      },
      "initial_value": {
        "border-image-width": 1
      },
      "applies_to": ["すべての要素。ただし border-collapse が collapse のときはテーブル要素内部にあるものを除く。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-image-width",
      "inheritance": false
    },
    {
      "id": 61,
      "name": "border-inline",
      "prefix": "border",
      "description": "border-inline は CSS のプロパティで、論理的なインライン方向のそれぞれの境界プロパティをスタイルシートの 1 ヶ所で設定する一括指定プロパティです。",
      "shorthand_property": [
        "border-inline-color",
        "border-inline-style",
        "border-inline-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-inline-width": "medium",
        "border-inline-style": "none",
        "border-inline-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline",
      "inheritance": false
    },
    {
      "id": 62,
      "name": "border-inline-color",
      "prefix": "border",
      "description": "border-inline-start-color は CSS のプロパティで、要素の論理的なインライン方向の先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color と border-bottom-color、または border-right-color と border-left-color の組み合わせのどちらかに対応し、どちらに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-inline-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-color",
      "inheritance": false
    },
    {
      "id": 63,
      "name": "border-inline-end",
      "prefix": "border",
      "description": "border-inline-end は CSS のプロパティで、個々の論理的なインライン方向の末尾側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための一括指定プロパティです。",
      "shorthand_property": [
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-inline-end-color": "currentcolor",
        "border-inline-end-style": "none",
        "border-inline-end-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-color",
      "inheritance": false
    },
    {
      "id": 64,
      "name": "border-inline-end-color",
      "prefix": "border",
      "description": "border-inline-end-color は CSS のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color、border-right-color、border-bottom-color、border-left-color の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-inline-end-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-color",
      "inheritance": false
    },
    {
      "id": 65,
      "name": "border-inline-end-style",
      "prefix": "border",
      "description": "border-inline-end-style は CSS のプロパティで、要素の論理的なインライン方向の終端側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style、border-right-style、border-bottom-style、border-left-style の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-inline-end-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-end-style",
      "inheritance": false
    },
    {
      "id": 66,
      "name": "border-inline-end-width",
      "prefix": "border",
      "description": "border-inline-end-width は CSS のプロパティで、要素の論理的なインライン方向の終端側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width、border-right-width、border-bottom-width、border-left-width の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-inline-end-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-end-width",
      "inheritance": false
    },
    {
      "id": 67,
      "name": "border-inline-start",
      "prefix": "border",
      "description": "border-inline-start は CSS のプロパティで、個々の論理的なインライン方向の先頭側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための一括指定プロパティです。",
      "shorthand_property": [
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。",
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。",
        "<'color'>": "境境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-top-width": "medium",
        "border-right-width": "medium",
        "border-bottom-width": "medium",
        "border-left-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-start",
      "inheritance": false
    },
    {
      "id": 68,
      "name": "border-inline-start-color",
      "prefix": "border",
      "description": "border-inline-start-color は CSS のプロパティで、要素の論理的なインライン方向の先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは border-top-color、border-right-color、border-bottom-color、border-left-color の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'color'>": "境界の色です。 color を参照してください。"
      },
      "initial_value": {
        "border-inline-start-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-start-color",
      "inheritance": false
    },
    {
      "id": 69,
      "name": "border-inline-start-style",
      "prefix": "border",
      "description": "border-inline-start-style は CSS のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style、border-right-style、border-bottom-style、border-left-style の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界の線のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-inline-start-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-start-style",
      "inheritance": false
    },
    {
      "id": 70,
      "name": "border-inline-start-width",
      "prefix": "border",
      "description": "border-inline-start-width は CSS のプロパティで、要素の論理的なインライン方向の先頭側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width、border-right-width、border-bottom-width、border-left-width の何れかに対応し、どれに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-inline-start-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-start-width",
      "inheritance": false
    },
    {
      "id": 71,
      "name": "border-inline-style",
      "prefix": "border",
      "description": "border-inline-style は CSS のプロパティで、要素の論理的なインライン方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは border-top-style と border-bottom-style、または border-left-style と border-right-style の組み合わせのどちらかに対応し、どちらに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "境界線のスタイルです。 border-style を参照してください。"
      },
      "initial_value": {
        "border-inline-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-style",
      "inheritance": false
    },
    {
      "id": 72,
      "name": "border-inline-width",
      "prefix": "border",
      "description": "border-inline-width は CSS のプロパティで、要素の論理的なインライン方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは border-top-width と border-bottom-width、または border-left-width と border-right-width の組み合わせのどちらかに対応し、どちらに対応するかは writing-mode、direction、text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "border-inline-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-inline-width",
      "inheritance": false
    },
    {
      "id": 73,
      "name": "border-left",
      "prefix": "border",
      "description": "border-left は一括指定の CSS のプロパティで、要素の左側の境界のプロパティをすべて設定します。",
      "shorthand_property": [
        "border-left-color",
        "border-left-style",
        "border-left-width"
      ],
      "values": {
        "<'border-width'>": "境界の幅です。 border-width を参照してください。"
      },
      "initial_value": {
        "<br-width>": "border-left-width を参照してください。",
        "<br-style>": "border-left-style を参照してください。",
        "<color>": "border-left-color を参照してください。"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-left",
      "inheritance": false
    },
    {
      "id": 74,
      "name": "border-left-color",
      "prefix": "border",
      "description": "border-left-color は CSS のプロパティで、要素の左側の境界線の色を設定します。一括指定プロパティの border-color または border-left でも設定することができます。",
      "shorthand_property": null,
      "values": {
        "<color>": "左の境界線の色を定義します。"
      },
      "initial_value": {
        "border-left-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-left-color",
      "inheritance": false
    },
    {
      "id": 75,
      "name": "border-left-style",
      "prefix": "border",
      "description": "border-left-style は CSS のプロパティで、要素の左側の境界線 (border) のスタイルを設定します。",
      "shorthand_property": null,
      "values": {
        "border-left-style プロパティは、単一の <line-style> キーワード値で指定します。": null
      },
      "initial_value": {
        "border-left-style": "none"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-left-style",
      "inheritance": false
    },
    {
      "id": 76,
      "name": "border-left-width",
      "prefix": "border",
      "description": "border-left-width は CSS のプロパティで、要素の左側の境界の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<line-width>": "境界の幅を、明示的な非負の <length> またはキーワードで定義します。キーワードの場合、以下の値のいずれかでなければなりません。"
      },
      "initial_value": {
        "border-left-width": "medium"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-left-width",
      "inheritance": false
    },
    {
      "id": 77,
      "name": "border-radius",
      "prefix": "border",
      "description": "border-radius は CSS のプロパティで、要素の境界の外側の角を丸めます。1 つの半径を設定すると円の角になり、2 つの半径を設定すると楕円の角になります。",
      "shorthand_property": [
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius"
      ],
      "values": {
        "<length>": "円の半径の長さ、または楕円の半長軸または半短軸の長さを、 length 値を使用して記述します。負の数は無効です。",
        "<percentage>": "円の半径の長さ、または楕円の半長軸または半短軸の長さを、 パーセント値を使用して記述します。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対するものです。負の数は無効です。"
      },
      "initial_value": {
        "border-top-left-radius": 0,
        "border-top-right-radius": 0,
        "border-bottom-right-radius": 0,
        "border-bottom-left-radius": 0
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-left-width",
      "inheritance": false
    },
    {
      "id": 78,
      "name": "border-right",
      "prefix": "border",
      "description": "border-right は一括指定の CSS のプロパティで、要素の右側の境界のプロパティをすべて設定します。",
      "shorthand_property": [
        "border-right-color",
        "border-right-style",
        "border-right-width"
      ],
      "values": {
        "border-right-color": "border-right-width を参照してください。",
        "border-right-style": "border-right-style を参照してください。",
        "border-right-width": "border-right-color を参照してください。"
      },
      "initial_value": {
        "border-right-color": "medium",
        "border-right-style": "none",
        "border-right-width": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-right",
      "inheritance": false
    },
    {
      "id": 79,
      "name": "border-right-color",
      "prefix": "border",
      "description": "border-right-color は CSS のプロパティで、要素の右側の境界線の色を設定します。一括指定プロパティの border-color または border-right でも設定することができます。",
      "shorthand_property": null,
      "values": {
        "<color>": "右の境界線の色を定義します。"
      },
      "initial_value": {
        "border-right-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-right-color",
      "inheritance": false
    },
    {
      "id": 80,
      "name": "border-right-style",
      "prefix": "border",
      "description": "border-right-style は CSS のプロパティで、要素の右側の境界線 (border) のスタイルを設定します。",
      "shorthand_property": null,
      "values": {
        "border-right-style プロパティは、単一の <line-style> キーワード値で指定します。": null
      },
      "initial_value": {
        "border-right-style": "none"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-right-style",
      "inheritance": false
    },
    {
      "id": 81,
      "name": "border-right-width",
      "prefix": "border",
      "description": "border-right-width は CSS のプロパティで、要素の右側の境界の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<line-width>": "境界の幅を、明示的な非負の <length> またはキーワードで定義します。キーワードの場合、以下の値のいずれかでなければなりません。"
      },
      "initial_value": {
        "border-right-width": "medium"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-right-width",
      "inheritance": false
    },
    {
      "id": 82,
      "name": "border-spacing",
      "prefix": "border",
      "description": "border-spacing は CSS のプロパティで、<table> における隣り合うセルの境界同士の間隔を定めます。このプロパティは border-collapse が separate のときのみ適用されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "固定値による間隔の大きさです。"
      },
      "initial_value": {
        "border-spacing": 0
      },
      "applies_to": ["table および inline-table 要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-spacing",
      "inheritance": false
    },
    {
      "id": 83,
      "name": "border-start-end-radius",
      "prefix": "border",
      "description": "border-start-end-radius は CSS のプロパティで、要素の論理的な境界の半径を定義します。これは要素の writing-mode, direction, text-orientation に応じて、物理的な境界の半径に対応づけられます。これはテキストの方向や書字方向に依存せずにスタイルを構築する際に便利です。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径及び短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-start-end-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-start-end-radius",
      "inheritance": false
    },
    {
      "id": 84,
      "name": "border-start-start-radius",
      "prefix": "border",
      "description": "border-start-start-radius は CSS のプロパティで、要素の論理的な境界の半径を定義します。これは要素の writing-mode, direction, text-orientation に応じて、物理的な境界の半径に対応づけられます。これはテキストの方向や書字方向に依存せずにスタイルを構築する際に便利です",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径及び短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント値はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-start-start-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-start-start-radius",
      "inheritance": false
    },
    {
      "id": 85,
      "name": "border-style",
      "prefix": "border",
      "description": "border-style は一括指定の CSS プロパティで、要素の境界線の 4 辺すべての線のスタイルを設定します。",
      "shorthand_property": [
        "border-bottom-style",
        "border-left-style",
        "border-right-style",
        "border-top-style"
      ],
      "values": {
        "<line-style>": "境界のスタイルを記述します。以下の値を使用することができます。"
      },
      "initial_value": {
        "border-bottom-style": "none",
        "border-left-style": "none",
        "border-right-style": "none",
        "border-top-style": "none"
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-start-start-radius",
      "inheritance": false
    },
    {
      "id": 86,
      "name": "border-top",
      "prefix": "border",
      "description": "border-top は一括指定の CSS のプロパティで、要素の上側の境界のプロパティをすべて設定します。",
      "shorthand_property": [
        "border-top-color",
        "border-top-style",
        "border-top-width"
      ],
      "values": {
        "<br-width>": "border-top-width を参照してください。",
        "<br-style>": "border-top-style を参照してください。",
        "<color>": "border-top-color を参照してください。"
      },
      "initial_value": {
        "border-top-color": "medium",
        "border-top-style": "none",
        "border-top-width": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top",
      "inheritance": false
    },
    {
      "id": 87,
      "name": "border-top-color",
      "prefix": "border",
      "description": "border-top-color は CSS のプロパティで、要素の上側の境界線の色を設定します。一括指定プロパティの border-color または border-top でも設定することができます。",
      "shorthand_property": null,
      "values": {
        "<color>": "上の境界線の色を定義します。"
      },
      "initial_value": {
        "border-top-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top-color",
      "inheritance": false
    },
    {
      "id": 88,
      "name": "border-top-left-radius",
      "prefix": "border",
      "description": "border-top-left-radius は CSS のプロパティは、角の曲率を定義する楕円の半径 (または半長軸と半短軸の半径) を指定することで、要素の左上の角を丸くします。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-top-left-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top-left-radius",
      "inheritance": false
    },
    {
      "id": 89,
      "name": "border-top-right-radius",
      "prefix": "border",
      "description": "border-top-right-radius は CSS のプロパティで、角の曲率を定義する楕円の半径 (または半長軸と半短軸) を指定することで、要素の右上の角を丸めます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-top-right-radius": 0
      },
      "applies_to": ["すべての要素。ただし、ユーザーエージェントは border-collapse が collapse である場合にtable および inline-table 要素に適用する必要はない。内部表要素での動作は、今のところ未定義。。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top-right-radius",
      "inheritance": false
    },
    {
      "id": 90,
      "name": "border-top-style",
      "prefix": "border",
      "description": "border-top-style は CSS のプロパティで、要素の上側の境界 (border) における線のスタイルを設定します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "円の半径または楕円の長半径および短半径を示します。絶対的な長さの場合は、 CSS の <length> データ型で表現することができます。水平軸のパーセント値はボックスの幅、垂直軸のパーセント軸はボックスの高さに対する値です。負の数は無効です。"
      },
      "initial_value": {
        "border-top-style": "none"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top-style",
      "inheritance": false
    },
    {
      "id": 91,
      "name": "border-top-width",
      "prefix": "border",
      "description": "border-top-width は CSS のプロパティで、要素の上側の境界の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<line-width>": "境界の幅を、明示的な非負の <length> またはキーワードで定義します。キーワードの場合は、以下の値の何れかでなければなりません。"
      },
      "initial_value": {
        "border-top-width": "medium"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-top-width",
      "inheritance": false
    },
    {
      "id": 92,
      "name": "border-width",
      "prefix": "border",
      "description": "border-width は一括指定の CSS のプロパティで、要素の境界の幅を設定します。",
      "shorthand_property": [
        "border-bottom-width",
        "border-left-width",
        "border-right-width",
        "border-top-width"
      ],
      "values": {
        "<line-width>": "境界の幅を、明示的な非負の <length> またはキーワードで定義します。キーワードの場合は、以下の値の何れかでなければなりません。"
      },
      "initial_value": {
        "border-bottom-width": "medium",
        "border-left-width": "medium",
        "border-right-width": "medium",
        "border-top-width": "medium"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/border-width",
      "inheritance": false
    },
    {
      "id": 93,
      "name": "bottom",
      "prefix": null,
      "description": "bottom は CSS のプロパティで、位置指定要素の垂直位置の設定に関与します。位置指定されていない要素には効果はありません。",
      "shorthand_property": null,
      "values": {
        "<length>": "負、null、または正の <length> で、以下のものを表します。",
        "<percentage>": "包含ブロックの高さに対する <percentage> です。",
        "<auto>": "以下のように指定します。",
        "inherit": "値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は <length>, <percentage>, または auto キーワードと同様に扱われます。"
      },
      "initial_value": {
        "bottom": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/bottom",
      "inheritance": false
    },
    {
      "id": 94,
      "name": "box-decoration-break",
      "prefix": "box",
      "description": "box-decoration-break は CSS のプロパティで、要素の断片が複数の行、段、ページに渡る場合に描画する方法を指定します。",
      "shorthand_property": null,
      "values": {
        "slice": "要素は最初、ボックスが断片化していないかのように描画され、その後でこの仮想ボックスに描画されたものが、それぞれの行/段/ページの部分に分割されます。なお、仮想ボックスはインライン方向に分割された場合には独自の高さを使用し、ブロック方向に分割された場合は独自の幅を使用するため、それぞれの断片ごとに異なる場合があることに注意してください。詳しくは CSS の仕様書を参照してください。",
        "clone": "それぞれの断片が、それぞれの断片を囲む指定された境界、パディング、マージンを伴って個別に描画されます。 border-radius, border-image, box-shadow はそれぞれの断片に個別に適用されます。背景もそれぞれの断片で個別に描画されます。つまり、 background-repeat: no-repeat がついた背景画像であっても、複数回繰り返されます。"
      },
      "initial_value": {
        "box-decoration-break": "slice"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/box-decoration-break",
      "inheritance": false
    },
    {
      "id": 95,
      "name": "box-shadow",
      "prefix": "box",
      "description": "box-shadow は CSS のプロパティで、要素のフレームの周囲にシャドウ効果を追加します。カンマで区切ることで、複数の効果を設定することができます。ボックスの影は要素からの相対的な X および Y のオフセット、ぼかしと拡散の半径、色で記述します。",
      "shorthand_property": null,
      "values": {
        "<color>": "影の色を指定します。可能なキーワード及び記述方法については <color> の値を参照してください。 値が指定されなかった場合、親要素で定義された color プロパティの値が使用されます。",
        "<length>": "影をずらす距離を指定します。この引数は 2 つ、 3 つ、 4 つの値を受け入れます。 3 つ目と 4 つ目の値はオプションです。これらは以下のように解釈されます。",
        "inset": "影を外側のボックスシャドウから内側のボックスシャドウに変更します（コンテンツがボックスの中に窪んでいるようになります）。インセットシャドウは、ボックスの境界線の内側に描画され（境界線が透明な場合でも）、背景の上、コンテンツの下に現れます。既定では、シャドウはドロップシャドウのように動作し、ボックスがコンテンツよりも上にあるように現れます。これは inset を指定しない場合の既定での動作です。"
      },
      "initial_value": {
        "box-shadow": "none"
      },
      "applies_to": ["すべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow",
      "inheritance": false
    },
    {
      "id": 96,
      "name": "box-sizing",
      "prefix": "box",
      "description": "box-sizing は CSS のプロパティで、要素の全体の幅と高さをどのように計算するのかを設定します。",
      "shorthand_property": null,
      "values": {
        "content-box": "これは、 CSS 標準で規定されている初期値および既定値です。 width および height プロパティの寸法は、コンテンツ領域のみを含むものとなり、パディング、境界、マージン領域は含みません。例えば .box {width: 350px; border: 10px solid black;} とすると 370px の幅のボックスを描画します。\n\nこの場合、それぞれの要素の寸法は、幅 = コンテンツの幅、高さ = コンテンツの高さとして計算されます。 (境界やパディングは計算に含まれません。)",
        "border-box": "width および height プロパティは、コンテンツ、パディング、境界の各領域を含みますが、マージンは含みません。なお、パディングと境界はボックスの内側に置かれることに注意してください。例えば .box {width: 350px; border: 10px solid black;} とすると、ボックスの幅が 350px、コンテンツ領域の幅が 330px として描画されます。コンテンツボックスは負の値にできず 0 に丸められますので、border-box を使用して要素を非表示にすることはできません。\n\nこの場合、それぞれの要素の寸法は、幅 = 境界 + パディング + コンテンツの幅、高さ = 境界 + パディング + コンテンツの高さとして計算されます。"
      },
      "initial_value": {
        "box-sizing": "content-box"
      },
      "applies_to": ["width および height を受け付ける全ての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/box-sizing",
      "inheritance": false
    },
    {
      "id": 97,
      "name": "break-after",
      "prefix": "break",
      "description": "break-after は CSS のプロパティで、生成されたボックスの後で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。",
      "shorthand_property": null,
      "values": {
        "auto": "該当するボックスの直後に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。",
        "avoid": "該当するボックスの直後に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。",
        "always": "該当するボックスの直後で強制的に改ページを行います。この区切りの種類は断片化のコンテキストを直接含むものです。段組みコンテナーの中であれば強制的な段区切りとなり、ページ付きメディアの (ただし段組みコンテナーの中ではない) 場合はページ区切りになります。",
        "all": "該当するボックスの直後で強制的に改ページを行います。すべての分断しうるコンテキストを通して区切ります。よって、段組みコンテナーの中での区切りは、ページコンテナーの中であれば強制的に段組みとページを区切ります。",
        "avoid-page": "該当するボックスの直後の改ページを禁止します。",
        "page": "該当するボックスの直後で改ページを行います。",
        "left": "該当するボックスの直後で一つまたは二つの改ページを行い、次のページが左ページになるようにします。",
        "right": "該当するボックスの直後で一つまたは二つの改ページを行い、次のページが右ページになるようにします。",
        "recto": "該当するボックスの直後で一つまたは二つの改ページを行い、次のページが奇数ページになるようにします。 (奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。)",
        "verso": "該当するボックスの直後で一つまたは二つの改ページを行い、次のページが偶数ページになるようにします。 (奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。)",
        "avoid-column": "該当するボックスの直後の段区切りを禁止します。",
        "column": "該当するボックスの直後で段区切りを行います。",
        "avoid-region": "該当するボックスの直後の領域区切りを禁止します。",
        "region": "該当するボックスの直後で領域区切りを行います。"
      },
      "initial_value": {
        "break-after": "auto"
      },
      "applies_to": ["ブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/break-after",
      "inheritance": false
    },
    {
      "id": 98,
      "name": "break-before",
      "prefix": "break",
      "description": "CSS の break-before プロパティは、生成されたボックスの前で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。",
      "shorthand_property": null,
      "values": {
        "auto": "該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。",
        "avoid": "該当するボックスの直前に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。",
        "always": "該当するボックスの直前で強制的に改ページを行います。この区切りの種類は断片化のコンテキストを直接含むものです。段組みコンテナーの中であれば強制的な段区切りとなり、ページ付きメディアの (ただし段組みコンテナーの中ではない) 場合はページ区切りになります。",
        "all": "該当するボックスの直前で強制的に改ページを行います。すべての分断しうるコンテキストを通して区切ります。よって、段組みコンテナーの中での区切りは、ページコンテナーの中であれば強制的に段組みとページを区切ります。",
        "avoid-page": "該当するボックスの直前の改ページを禁止します。",
        "page": "該当するボックスの直前で改ページを行います。",
        "left": "該当するボックスの直前で一つまたは二つの改ページを行い、次のページが左ページになるようにします。",
        "right": "該当するボックスの直前で一つまたは二つの改ページを行い、次のページが右ページになるようにします。",
        "recto": "該当するボックスの直前で一つまたは二つの改ページを行い、次のページが奇数ページになるようにします。 (奇数ページは左から右に開く場合は右ページになり、右から左に開く場合は左ページになります。)",
        "verso": "該当するボックスの直前で一つまたは二つの改ページを行い、次のページが偶数ページになるようにします。 (奇数ページは左から右に開く場合は左ページになり、右から左に開く場合は右ページになります。)",
        "avoid-column": "該当するボックスの直前の段区切りを禁止します。",
        "column": "該当するボックスの直前で段区切りを行います。",
        "avoid-region": "該当するボックスの直前の領域区切りを禁止します。",
        "region": "該当するボックスの直前で領域区切りを行います。"
      },
      "initial_value": {
        "break-before": "auto"
      },
      "applies_to": ["ブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/break-before",
      "inheritance": false
    },
    {
      "id": 99,
      "name": "break-inside",
      "prefix": "break",
      "description": "break-inside は CSS のプロパティで、生成されたボックスの途中で、ページ、段、領域をどのように区切るかを設定します。ボックスが生成されない場合は、このプロパティは無視されます。",
      "shorthand_property": null,
      "values": {
        "auto": "主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを許可しますが、強制はしません。",
        "avoid": "主ボックスの途中に何らかの (ページ、段、領域の) 区切りを挿入することを禁止します。",
        "avoid-page": "主ボックスの途中の改ページを禁止します。",
        "avoid-column": "主ボックスの途中の段区切りを禁止します。",
        "void-region": "主ボックスの途中の領域区切りを禁止します。"
      },
      "initial_value": {
        "break-inside": "auto"
      },
      "applies_to": ["ブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/break-before",
      "inheritance": false
    },
    {
      "id": 100,
      "name": "caption-side",
      "prefix": null,
      "description": "caption-side は CSS のプロパティで、表 (<table>) の <caption> の中身を指定された側に配置します。この値は表の writing-mode に対する相対値です。",
      "shorthand_property": null,
      "values": {
        "top": "キャプションボックスを表のブロック方向の先頭に配置します。",
        "bottom": "キャプションボックスを表のブロック方向の末尾に配置します。",
        "inline-start": "キャプションボックスを表のインライン方向の先頭に配置します。",
        "inline-end": "キャプションボックスを表のインライン方向の末尾に配置します。"
      },
      "initial_value": {
        "caption-side": "top"
      },
      "applies_to": ["表のキャプション要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/caption-side",
      "inheritance": false
    },
    {
      "id": 101,
      "name": "caret-color",
      "prefix": null,
      "description": "caret-color は CSS のプロパティで、次に入力された文字が挿入される位置を示す可視マーカーである入力キャレットの色を設定します。これはテキスト入力カーソルと呼ばれることもあります。キャレットは <input> または contenteditableML/Global_attributes#contenteditable) 属性のついた要素などの中に現れます。ふつうキャレットは細い垂直線で、気づきやすくなるように点滅します。既定では黒ですが、このプロパティで色を変更することができます。",
      "shorthand_property": null,
      "values": {
        "auto": "ユーザーエージェントはキャレットの適切な色を選択します。これは一般的に currentcolor ですが、視認性や周囲のコンテンツとのコントラストを高めるために、ユーザーエージェントが currentcolor、背景色、影の色、その他の要因を考慮して、別な色を選択することがあります。",
        "<color>": "キャレットの色です。"
      },
      "initial_value": {
        "caret-color": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/caret-color",
      "inheritance": false
    },
    {
      "id": 102,
      "name": "clear",
      "prefix": null,
      "description": "clear は CSS のプロパティで、要素をその前にある浮動要素の下に移動 (clear) する必要があるかどうかを設定します。clear プロパティは、浮動要素と非浮動要素のどちらにも適用されます。",
      "shorthand_property": null,
      "values": {
        "none": "要素は先行する浮動要素と切り離されず、下に移動しません。",
        "left": "要素は先行する左の浮動要素と切り離され、下に移動します。",
        "right": "要素は先行する右の浮動要素と切り離され、下に移動します。",
        "both": "要素は先行する左右両方の浮動要素と切り離され、下に移動します。",
        "inline-start": "要素は、先行する包含ブロックの先頭側の浮動要素の下に移動することを示すキーワードです。これは左書きでは左側、右書きでは右側の浮動要素です。",
        "inline-end": "要素は、先行する包含ブロックの末尾側の浮動要素の下に移動することを示すキーワードです。これは左書きでは右側、右書きでは左側の浮動要素です。"
      },
      "initial_value": {
        "clear": "none"
      },
      "applies_to": ["ブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/clear",
      "inheritance": false
    },
    {
      "id": 103,
      "name": "clip-path",
      "prefix": null,
      "description": "clip-path は CSS のプロパティで、要素のどの部分を表示するかを設定するクリッピング領域を作ります。具体的には、領域の内部の部分は表示され、外側の部分は非表示になります。",
      "shorthand_property": null,
      "values": {
        "<clip-source>": "url() で、SVG の <clipPath> 要素を参照します。",
        "<basic-shape>": "<geometry-box> 値で寸法と位置が定義されるシェイプです。ジオメトリボックスが指定されない場合、参照ボックスとして border-box が使用されます。以下のいずれかです。",
        "<geometry-box>": "<basic-shape> と共に指定された場合、この値は基本シェイプの参照ボックスを定義します。単独で指定された場合、指定のボックスの辺を、角の形 (border-radius など) を含めてクリッピングパスにします。ジオメトリボックスは以下の値のうちの一つが指定できます。",
        "none": "クリッピングパスは作成されません。"
      },
      "initial_value": {
        "clip-path": "none"
      },
      "applies_to": ["ブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/clear",
      "inheritance": false
    },
    {
      "id": 104,
      "name": "color",
      "prefix": "color",
      "description": "CSS の color プロパティは、要素のテキストやテキスト装飾における前景色の色の値を設定し、 currentcolor の値を設定します。currentcolor は他のプロパティの間接的な値として使用される可能性があり、 border-color のような他の色に関するプロパティの既定値にもなったりします。",
      "shorthand_property": null,
      "values": {
        "<color>": "要素のテキストや装飾部分の色を設定します。"
      },
      "initial_value": {
        "color": "canvatext"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/color",
      "inheritance": false
    },
    {
      "id": 105,
      "name": "color-interpolation",
      "prefix": "color",
      "description": "CSS の color-interpolation プロパティは、SVG で用いられ、SVG 要素 <linearGradient> および <radialGradient> で用いる色空間を指定します。",
      "shorthand_property": null,
      "values": {
        "auth": "ユーザーエージェントが色の補間用に sRGB または linearRGB 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。",
        "sRGB": "色の補間を sRGB 色空間で行うべきであることを表します。 color-interpolation プロパティが設定されていない場合、初期値はこの値になります。",
        "linearRGB": "色の補間を sRGB の仕様書に記述されている通りの linearized RGB 色空間で行うべきであることを表します。"
      },
      "initial_value": {
        "color": "auto"
      },
      "applies_to": ["<linearGradient> および <radialGradient>"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/color-interpolation",
      "inheritance": false
    },
    {
      "id": 106,
      "name": "color-scheme",
      "prefix": "color",
      "description": "color-scheme は CSS のプロパティで、要素がどのような配色で快適に表示されるかを示すことができます。\n\nオペレーティングシステムの配色の一般的な選択肢は、「ライト」と「ダーク」、または「昼モード」と「夜モード」です。ユーザーがこれらの配色のいずれかを選択すると、 OS はユーザーインターフェースを調整します。これには、フォームコントロール、スクロールバー、および CSS システムカラーの使用値が含まれます。",
      "shorthand_property": null,
      "values": {
        "normal": "この要素がどの配色も認識しないため、ブラウザーの既定の配色でレンダリングするべきであることを示します。",
        "light": "オペレーティングシステムのライト配色を使用して要素をレンダリングできることを示します。",
        "dark": "オペレーティングシステムのダーク配色を使用して要素をレンダリングできることを示します。",
        "only": "ユーザーエージェントが要素の配色を上書きすることを禁じます。"
      },
      "initial_value": {
        "color-scheme": "normal"
      },
      "applies_to": ["すべての要素とテキスト"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/color-scheme",
      "inheritance": true
    },
    {
      "id": 107,
      "name": "column-count",
      "prefix": "column",
      "description": "column-count は CSS のプロパティで、指定された段数で要素の内容物を分割します。",
      "shorthand_property": null,
      "values": {
        "auto": "段数は column-width など、他の CSS プロパティによって決定されます。",
        "<integer>": "正の整数のみで、要素の中で流れる理想的な列の数を記述します。 column-width が auto 以外の値で一緒に設定された場合は、最大の列数を示します。"
      },
      "initial_value": {
        "column-count": "auto"
      },
      "applies_to": ["表ラッパーボックスを除くブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-count",
      "inheritance": false
    },
    {
      "id": 108,
      "name": "column-fill",
      "prefix": "column",
      "description": "column-fill は CSS のプロパティで、段組みレイアウトで要素の内容物が複数の段に分割されるとき、どのようにバランスを取るのかを制御します。",
      "shorthand_property": null,
      "values": {
        "auto": "column-fill は CSS のプロパティで、段組みレイアウトで要素の内容物が複数の段に分割されるとき、どのようにバランスを取るのかを制御します。",
        "balance": "コンテンツは各段に均等に分割されます。ページ付きメディアなどの断片化されたコンテキストでは、最後の断片のみが均等に分割されます。従ってページ付きメディアでは、最後のページのみが均等に分割されます。",
        "balance-all": "コンテンツは格段に均等に分割されます。ページ付きメディアなどの断片化されたコンテキストでは、すべての断片が均等になります。"
      },
      "initial_value": {
        "column-fill": "balance"
      },
      "applies_to": ["段組み要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-fill",
      "inheritance": false
    },
    {
      "id": 109,
      "name": "column-gap (grid-column-gap)",
      "prefix": "column",
      "description": "column-gap は CSS のプロパティで、要素の段または列の間の隙間 (溝) の寸法を設定します。",
      "shorthand_property": null,
      "values": {
        "normal": "列間 (段間) にはブラウザー既定の幅が使われます。段組みレイアウトでは 1em と指定され、他の種類のレイアウトでは 0 になります。",
        "<length>": "列間 (段間) の寸法を <length> として定義します。 <length> のプロパティ値は負の数であってはいけません。",
        "<percentage>": "列間 (段間) の寸法を <percentage> として定義します。 <percentage> のプロパティ値は負の数であってはいけません。"
      },
      "initial_value": {
        "column-gap (grid-column-gap)": "normal"
      },
      "applies_to": ["段組み要素、フレックスコンテナー、グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-gap",
      "inheritance": false
    },
    {
      "id": 110,
      "name": "column-rule",
      "prefix": "column",
      "description": "column-rule は一括指定を行う CSS のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さ、スタイル、色を設定します。",
      "shorthand_property": [
        "column-rule-width",
        "column-rule-style",
        "column-rule-color"
      ],
      "values": {
        "<'column-rule-width'>": "<length> または 3 つのキーワード、 thin、medium、thick のうちの 1 つです。詳しくは border-width を参照してください。",
        "<'column-rule-style'>": "有効な値と詳細は border-style を参照してください。",
        "<'column-rule-color'>": "<color> 値です。"
      },
      "initial_value": {
        "column-rule-width": "medium",
        "column-rule-style": "none",
        "column-rule-color": "currentcolor"
      },
      "applies_to": ["段組み要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-rule",
      "inheritance": false
    },
    {
      "id": 111,
      "name": "column-rule-color",
      "prefix": "column",
      "description": "column-rule-color は CSS のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の色を設定します。",
      "shorthand_property": null,
      "values": {
        "<color>": "段を分割する段間罫の色です。"
      },
      "initial_value": {
        "column-rule-color": "currentcolor"
      },
      "applies_to": ["段組み要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-rule-color",
      "inheritance": false
    },
    {
      "id": 112,
      "name": "column-rule-style",
      "prefix": "column",
      "description": "column-rule-style は CSS のプロパティで、段組みレイアウトで段の間に引かれる線 (段間罫) のスタイルを設定します。",
      "shorthand_property": null,
      "values": {
        "<'border-style'>": "border-style で定義されているキーワードで、段間罫のスタイルを指定します。スタイルは collasped の境界線モデルで解釈されます"
      },
      "initial_value": {
        "column-rule-style": "none"
      },
      "applies_to": ["段組み要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-rule-style",
      "inheritance": false
    },
    {
      "id": 113,
      "name": "column-rule-width",
      "prefix": "column",
      "description": "column-rule-width は CSS のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さを設定します。",
      "shorthand_property": null,
      "values": {
        "<'border-width'>": "border-width で定められたキーワードで段間罫の太さを指定します。 <length> または thin、 medium、 thick のキーワードのいずれかです。"
      },
      "initial_value": {
        "column-rule-width": "medium"
      },
      "applies_to": ["段組み要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-rule-width",
      "inheritance": false
    },
    {
      "id": 114,
      "name": "column-span",
      "prefix": "column",
      "description": "column-span は CSS のプロパティで、値に all を設定した場合、段組みレイアウトで要素をすべての段にまたがらせることができます。",
      "shorthand_property": null,
      "values": {
        "none": "この要素は複数の段にまたがりません。",
        "all": "この要素がすべての段にまたがります。この要素よりも前に現れた通常フローのコンテンツは、自動的にすべての段で均等になります。この要素は新しいブロック整形コンテキストを生成します。"
      },
      "initial_value": {
        "column-span": "none"
      },
      "applies_to": ["フロー内のブロックレベル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-span",
      "inheritance": false
    },
    {
      "id": 115,
      "name": "column-width",
      "prefix": "column",
      "description": "column-width は CSS のプロパティで、段組みレイアウトで理想的な段の幅を設定します。コンテナーは column-width の値よりも狭い段がないように、できるだけ多くの段を配置します。コンテナーの幅が指定された値よりも狭い場合、実際の段の幅はより狭くなることがあります。",
      "shorthand_property": null,
      "values": {
        "<length>": "段の最適な幅のヒントを与えます。実際の段の幅は指定された値と異なります。空間を埋める必要がある場合は広くなる可能性があり、利用可能な幅が狭すぎる場合は狭くなる可能性があります。この値は正の数だけで、そうでなければ宣言は無効になります。パーセント値も無効です。",
        "auto": "段の幅は column-count などの他の CSS プロパティによって決定されます。"
      },
      "initial_value": {
        "column-width": "auto"
      },
      "applies_to": ["表ラッパーボックスを除くブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/column-width",
      "inheritance": false
    },
    {
      "id": 116,
      "name": "columns",
      "prefix": null,
      "description": "columns は CSS 一括指定プロパティで、要素の内容物を描画する際に使用する段数や段の幅を設定します。",
      "shorthand_property": [
        "column-count",
        "column-width"
      ],
      "values": {
        "<'column-width'>": "理想的な段の幅であり、 <length> または auto キーワードで定義されます。実際の段の幅は、実際の空間に合わせて広くなったり狭くなったりします。 column-width を参照してください。",
        "<'column-count'>": "要素の内容物が流れる理想的な段の数であり、 <integer> または auto キーワードで定義します。この値と段の幅の両方が auto でない場合は、最大の段数を示します。 column-count を参照してください。"
      },
      "initial_value": {
        "column-count": "auto",
        "column-width": "auto"
      },
      "applies_to": ["表ラッパーボックスを除くブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/columns",
      "inheritance": false
    },
    {
      "id": 117,
      "name": "contain",
      "prefix": "contain",
      "description": "contain は CSS のプロパティで、ある要素とその内容が、できる限り多く、文書ツリーの他の部分から独立していることを示します。これによってブラウザーがレイアウト、スタイル、描画、寸法、およびその組み合わせの再計算を、ページ全体ではなく DOM の限られた領域に対して行うことで、性能上の明らかな利点をもたらします。",
      "shorthand_property": null,
      "values": {
        "none": "その要素が通常通り描画され、封じ込めを適用しないことを示します。",
        "strict": "style を除くすべての封じ込め規則がその要素に適用されることを示します。これは contain: size layout paint と同等です。",
        "content": "size および style 以外の封じ込め規則がその要素に適用されることを示します。これは contain: layout paint と同等です。",
        "size": "子孫の寸法を確認する必要なく、その要素の寸法を変更できることを示します。",
        "layout": "要素の外側が内部のレイアウトなどに影響しないことを示します。",
        "style": "ある要素とその子孫以外に影響を及ぼす可能性のあるプロパティの場合、その要素が含まれている要素をエスケープしないことを示します。",
        "print": "その要素の子孫を、境界の外に表示しないことを示します。包含ボックスが画面外の場合、ブラウザーは中の要素を描画する必要はありません。 — そのボックスに完全に含まれていれば、やはり画面外にあるからです。そして、子孫が包含要素の領域を溢れている場合、子孫は包含要素の境界ボックスで切り取られます。"
      },
      "initial_value": {
        "contain": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/contain",
      "inheritance": false
    },
    {
      "id": 118,
      "name": "container",
      "prefix": "container",
      "description": "container は CSS の一括指定プロパティで、この要素をクエリーコンテナーとして確立し、コンテナークエリーで使用される格納コンテキストの名前を指定します。",
      "shorthand_property": [
        "container-name",
        "container-type"
      ],
      "values": {
        "<container-name>": "格納コンテキストの大文字小文字を区別した名前です。 構文の詳細は、 container-name プロパティのページにあります。",
        "<container-type>": "格納コンテキストの種類です。 構文の詳細は、 container-type プロパティのページにあります。"
      },
      "initial_value": {
        "container-name": "none",
        "container-type": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/container",
      "inheritance": false
    },
    {
      "id": 119,
      "name": "container-name",
      "prefix": "container",
      "description": "container-name は CSS のプロパティで、コンテナークエリーにおいて @container アットルールで使用されるクエリーコンテナー名のリストを指定します。 コンテナークエリーでは、格納コンテキストを持つ最も近い祖先のサイズに基づいて要素にスタイルが適用されます。 コンテナーのコンテキストの名前が指定されたとき、コンテナーのコンテキストのある最も近い祖先の代わりに @container アットルールを用いて固有のターゲット仕様にすることができます。",
      "shorthand_property": null,
      "values": {
        "<container-name>": "コンテナーを識別するために使用する、大文字と小文字を区別する文字列です。"
      },
      "initial_value": {
        "container-name": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/container-name",
      "inheritance": false
    },
    {
      "id": 120,
      "name": "container-type",
      "prefix": "container",
      "description": "要素は、コンテナーサイズの問い合わせのためのクエリーコンテナーとして、 container-type という CSS プロパティを使用して確立することができます。 container-type は、コンテナークエリーで使用するサイズ格納方法の種類を定義するために使用します。\n\nこれはコンテナークエリーで無限ループを避けるために重要です。もしそうでなければ、コンテナークエリーの中にある CSS ルールがコンテンツサイズを変更する可能性があり、その結果、クエリーが偽に評価されて親要素のサイズが変更され、そして、コンテンツサイズが変更されてクエリーが真に戻る、といった動作になります。\n\nコンテナーサイズは、明示的に、あるいはコンテキストによって設定されます。例えば、ブロック要素、フレックスコンテナー、グリッドコンテナーは、親の幅いっぱいに伸びます。明示的またはコンテキストによるサイズが利用できない場合、サイズ抑制のある要素は折りたたまれます。",
      "shorthand_property": null,
      "values": {
        "size": "インラインおよびブロックの両方の寸法で コンテナーサイズクエリーのためのクエリー コンテナーを確立します。 コンテナーにレイアウト抑制、スタイル抑制、サイズ抑制を適用します。\n\nサイズ抑制は、インライン方向とブロック方向の両方で要素に適用されます。要素のサイズは、子要素を無視して単独で計算できます。",
        "inline-size": "コンテナーのインライン軸上の寸法クエリー用のクエリーコンテナーを確立します。 要素にレイアウト、スタイル、インラインサイズ抑制を適用します。\n\nインラインサイズ抑制が要素に適用されます。要素のインラインサイズは、子要素を無視して単独で計算されます。",
        "normal": "この要素はコンテナーサイズクエリーのクエリーコンテナーではありませんが、コンテナースタイルクエリーのクエリーコンテナーであることに変わりはありません。"
      },
      "initial_value": {
        "container-type": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/container-type",
      "inheritance": false
    },
    {
      "id": 121,
      "name": "content",
      "prefix": null,
      "description": "content は CSS のプロパティで、ある要素を生成された値で置き換えます。 content プロパティを使用して挿入されたオブジェクトは、無名の置換要素 になります。",
      "shorthand_property": null,
      "values": {
        "none": "擬似要素に適用された場合は、その擬似要素は生成されません。要素に適用された場合は、この値は効果がありません。",
        "normal": "::before および ::after 擬似要素では none として計算されます。",
        "<string>": "要素の「代替テキスト」を指定します。この値は任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスを使用してエンコードする必要があります。例えば、 000A9 は著作権記号を表します。",
        "<image>": "<image> です。 url() または <gradient> データ型、または element() 関数で定義されるウェブページの一部です。",
        "counter()": "CSS カウンターの値で、通常は <counter-reset> および <counter-increment> プロパティで定義され、計算によって生み出される数値です。 counter() または counters() 関数を使用して表示することができます。\n\ncounter() 関数には、 'counter(名前)' または 'counter(名前, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前の最も内側のカウンターです。<list-style-type> で指定されたスタイルで整形されます (decimal が既定値です)。\n\ncounters() 関数も、 'counters(名前, 文字列)' または 'counters(名前, 文字列, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前のすべてのカウンターの値であり、外側から内側に向けて、指定された文字列で区切られます。カウンターは指定されたスタイルで表示されます(decimal が既定値です)。",
        "attr(x)": "要素の属性の値 x を文字列として返します。属性 x が存在しない場合は、空文字列が返されます。属性名の大文字と小文字が区別されるかどうかは、文書の言語に依存します。",
        "open-quote | close-quote": "これらの値は quotes プロパティの対応する文字列に置き換えられます。",
        "no-open-quote | no-close-quote": "内容はありませんが、引用符の入れ子の階層を増加 (または減少) させます。"
      },
      "initial_value": {
        "content": "normal"
      },
      "applies_to": ["すべての要素、ツリーに現れる擬似要素、ページのマージンボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/content",
      "inheritance": false
    },
    {
      "id": 122,
      "name": "content",
      "prefix": "container",
      "description": "content は CSS のプロパティで、ある要素を生成された値で置き換えます。 content プロパティを使用して挿入されたオブジェクトは、無名の置換要素 になります。",
      "shorthand_property": null,
      "values": {
        "none": "擬似要素に適用された場合は、その擬似要素は生成されません。要素に適用された場合は、この値は効果がありません。",
        "normal": "::before および ::after 擬似要素では none として計算されます。",
        "<string>": "要素の「代替テキスト」を指定します。この値は任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスを使用してエンコードする必要があります。例えば、 000A9 は著作権記号を表します。",
        "<image>": "<image> です。 url() または <gradient> データ型、または element() 関数で定義されるウェブページの一部です。",
        "counter()": "CSS カウンターの値で、通常は <counter-reset> および <counter-increment> プロパティで定義され、計算によって生み出される数値です。 counter() または counters() 関数を使用して表示することができます。\n\ncounter() 関数には、 'counter(名前)' または 'counter(名前, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前の最も内側のカウンターです。<list-style-type> で指定されたスタイルで整形されます (decimal が既定値です)。\n\ncounters() 関数も、 'counters(名前, 文字列)' または 'counters(名前, 文字列, スタイル)' の二つの形式があります。生成されるテキストは、その擬似要素のスコープにおけるその名前のすべてのカウンターの値であり、外側から内側に向けて、指定された文字列で区切られます。カウンターは指定されたスタイルで表示されます(decimal が既定値です)。",
        "attr(x)": "要素の属性の値 x を文字列として返します。属性 x が存在しない場合は、空文字列が返されます。属性名の大文字と小文字が区別されるかどうかは、文書の言語に依存します。",
        "open-quote | close-quote": "これらの値は quotes プロパティの対応する文字列に置き換えられます。",
        "no-open-quote | no-close-quote": "内容はありませんが、引用符の入れ子の階層を増加 (または減少) させます。"
      },
      "initial_value": {
        "content": "normal"
      },
      "applies_to": ["すべての要素、ツリーに現れる擬似要素、ページのマージンボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/content",
      "inheritance": false
    },
    {
      "id": 123,
      "name": "counter-increment",
      "prefix": "counter",
      "description": "counter-increment は CSS のプロパティで、指定された値によって CSS カウンターの値を増加または減少させるためのプロパティです。",
      "shorthand_property": null,
      "values": {
        "<custom-ident>": "増加の対象となる、カウンターの名前です。",
        "<integer>": "カウンタに加える値です。指定されない場合は既定値の 1 になります。",
        "none": "カウンターは増加しません。これは既定値として使用されたり、より詳細度の高いルールで増加を取り消したりするために使用されたりします。"
      },
      "initial_value": {
        "counter-increment": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/counter-increment",
      "inheritance": false
    },
    {
      "id": 124,
      "name": "counter-reset",
      "prefix": "counter",
      "description": "counter-reset は CSS のプロパティで、 CSS カウンターを指定された値で初期化します。 このプロパティは新しいカウンターや逆行カウンターを、指定された要素の指定された名前で生成します。\n\n通常のカウンターは、初期値が 0 になっています。 逆行カウンターはカウントダウンのためのものであり、既定の初期値は現在のレベルでの要素の数に設定されます。 既定の初期値により、 2 つの最も一般的な数値のパターン、 1 から要素の数までのカウントアップと、要素の数から 1 までのカウントダウンを簡単に実装することができます。\n\nカウンターの値は CSS の counter-increment プロパティを使用して増加または減少させ、既存のカウンターの値は counter-set を使用して設定することができます。",
      "shorthand_property": null,
      "values": {
        "<custom-ident>": "初期化の対象となる、カウンターの名前です。",
        "<integer>": "要素が出現するごとに、カウンターを初期化するための値です。与えられない場合、初期値の 0 なります。",
        "none": "カウンターの初期化は行われません。これはより詳細度の低い規則によって定義された counter-reset を上書きするために使用することができます。"
      },
      "initial_value": {
        "counter-reset": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/counter-increment",
      "inheritance": false
    },
    {
      "id": 125,
      "name": "counter-set",
      "prefix": "counter",
      "description": "counter-set は CSS のプロパティで、CSS カウンターを指定された値に設定します。これは既存のカウンターの値を操作し、その要素に指定された名前のカウンターがまだ存在しない場合は新しいカウンターを生成します。。",
      "shorthand_property": null,
      "values": {
        "<custom-ident>": "設定するカウンターの名前です。",
        "<integer>": "この要素が現れるたびにカウンターに設定する値です。指定されなかった場合の既定値は 0 です。現在、この要素に指定された名前のカウンターが存在しない場合、この要素は指定された名前の新しいカウンターを、開始値 0 で指定します（ただし、その後で直ちに異なる値に設定されたり増加したりする可能性があります）。",
        "none": "カウンターの設定は行われません。これはより詳細度の低い規則によって定義された counter-set を上書きするために使用することができます。"
      },
      "initial_value": {
        "counter-set": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/counter-increment",
      "inheritance": false
    },
    {
      "id": 126,
      "name": "cursor",
      "prefix": null,
      "description": "cursor は CSS のプロパティで、マウスポインターが要素の上にいるときに表示されるマウスカーソルを設定します。\n\nカーソル設定により、テキスト選択、ヘルプやコンテキストメニューの有効化、コンテンツのコピー、表のリサイズなど、現在の位置で実行できるマウス操作をユーザーに知らせるべきです。 キーワードを使用してカーソルの種類を指定するか、使用する固有のアイコンを読み込むことができます（オプションで代替画像、そして最終的なフォールバックとしてキーワードが必須です）。",
      "shorthand_property": null,
      "values": {
        "<url>": "url() またはカンマ区切りのリスト url(), url(), … で画像の URL を指定します。複数の url() は、一部のカーソル画像形式に対応していなかった場合の代替として設定できます。 代替リストの最後には、キーワード値のいずれか 1 つ以上を指定しなければなりません。",
        "<x>, <y>": "任意でホットスポットの x 座標と y 座標を指定します。これはカーソルが指している先の詳細な位置です。\n\n数値は画像ピクセル単位です。 これらは画像の左上隅（\"0 0\"に相当）からの相対座標であり、カーソル画像の境界でクランプされます。 これらの値が指定されていない場合、ファイル自体から読み込まれることがあり、そうでない場合は画像の左上隅が既定値となります。",
        "keyword": "キーワード値は指定する必要があり、使用するカーソルの種類、または指定したアイコンをすべて読み込めなかった場合に使用する代替カーソルのどちらか示します。\n\n利用可能なキーワードは以下の一覧表に掲載されています。カーソルなしを意味している none 以外には、カーソルがどのように表示されるかを示す画像があります。表の行にマウスカーソルを当てると、さまざまなカーソルキーワードの値が現在のブラウザーに与える影響を見ることができます。"
      },
      "initial_value": {
        "cursor": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/cursor",
      "inheritance": true
    },
    {
      "id": 127,
      "name": "direction",
      "prefix": null,
      "description": "direction は CSS のプロパティで、テキスト、表の列、水平方向のはみ出しの方向を設定します。右書きの言語（ヘブライ語やアラビア語など）では rtl を、左書きの言語（英語やそれ以外の多くの言語）では ltr を使います。",
      "shorthand_property": null,
      "values": {
        "ltr": "テキストやその他の要素は左から右へと進みます。これが既定値です。",
        "rtl": "テキストやその他の要素は右から左へと進みます。"
      },
      "initial_value": {
        "direction": "ltr"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/direction",
      "inheritance": true
    },
    {
      "id": 128,
      "name": "display",
      "prefix": null,
      "description": "display は CSS のプロパティで、要素をブロックボックスとインラインボックスのどちらとして扱うか、およびその子要素のために使用されるレイアウト、例えば フローレイアウト、グリッド、フレックスなどを設定します。\n\n正式には、 display プロパティは要素の内側と外側の表示種別を設定します。外側の型は要素のフローレイアウトへの参加方法を設定し、内側の型は子要素のレイアウトを設定します。 display のいくつかの値は、それ自身の個別の仕様書で完全に定義されています。例えば、 display: flex が宣言されたときに何が起こるかの詳細は、 CSS Flexible Box Model 仕様書で定義されています。",
      "shorthand_property": null,
      "values": {
        "<display-outside>": "これらのキーワードは、本質的に要素のフローレイアウトにおける役割を表す、要素の外側の表示種別を指定します。",
        "<display-inside>": "これらのキーワードは、要素の内側の表示種別を指定します。これは、要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。",
        "<display-listitem>": "要素は内容のためにブロックボックスと、個別のリスト項目のインラインボックスを生成します。",
        "<display-internal>": "table や ruby のような一部のレイアウトモデルでは、複雑な内部構造があり、様々なその子要素や子孫要素が担う様々な役割があります。 この節ではこれらを「内部」表示値として定義し、特定のレイアウトモードでのみ意味を持ちます。",
        "<display-box>": "これらのキーワードは、要素が表示ボックスを作るかどうかを定義します。",
        "<display-legacy>": "CSS 2 では display プロパティで単一のキーワードによる構成済みの構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。"
      },
      "initial_value": {
        "display": "inline"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/direction",
      "inheritance": true
    },
    {
      "id": 129,
      "name": "empty-cells",
      "prefix": null,
      "description": "empty-cells は CSS のプロパティで、表のセルが目に見える内容を持たない場合に、周囲の境界と背景をユーザーエージェントがどのように描画するかを指定します",
      "shorthand_property": null,
      "values": {
        "show": "通常のセルのように、境界や背景を描くことを示すキーワードです。",
        "hide": "境界や背景を描かないことを示すキーワードです。"
      },
      "initial_value": {
        "empty-cells": "show"
      },
      "applies_to": ["表のセル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/empty-cells",
      "inheritance": false
    },
    {
      "id": 130,
      "name": "field-sizing",
      "prefix": null,
      "description": "field-sizing は CSS のプロパティで、フォームコントロール要素のような、既定の推奨サイズが指定された要素のサイズ設定を制御することができます。このプロパティを使用すると、既定のサイズ設定を上書きすることができ、あるフォームコントロールがそのコンテンツに合わせてサイズを調整できるようになります。\n\nこのプロパティは通常、テキスト <input> や <textarea> 要素のスタイル設定に使用され、フォームコントロールにテキストが入力されたときに、コンテンツを縮小したり、大きくしたりすることができます。",
      "shorthand_property": null,
      "values": {
        "content": "コンテンツに合わせて要素のサイズを調整できるようにします。",
        "fixed": "要素に固定サイズを設定します。これが既定値です。"
      },
      "initial_value": {
        "field-sizing": "fixed"
      },
      "applies_to": ["Elements with default preferred size"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/field-sizing",
      "inheritance": false
    },
    {
      "id": 131,
      "name": "filter",
      "prefix": null,
      "description": "filter は CSS のプロパティで、ぼかしや色変化などのグラフィック効果を要素に適用します。フィルターは画像、背景、境界の描画を調整するためによく使われます。\n\nいくつかの関数、例えば blur() や contrast() などが利用でき、あらかじめ定義された効果を実現するのに役立てることができます。",
      "shorthand_property": null,
      "values": {
        "blur()": "入力画像にガウスぼかしを適用します。",
        "brightness()": "関数は、入力画像に線形乗数を適用して明るさを明るくしたり暗くしたりします。 0% の値を設定すると、完全な黒の画像が作成されます。 100% の値を指定すると、入力は変更されません。 100% を超える値が許されており、より明るい結果が得られます。",
        "contrast()": "入力画像のコントラストを調整します。 0% の値を指定するとグレーの画像が作成されます。 100% の値を指定すると、入力画像は変更されません。 100% を超える値を指定すると、コントラストを増加させます。",
        "drop-shadow()": "引数 <shadow> を画像の輪郭に沿ってドロップシャドウとして適用します。影の構文は <box-shadow> （CSS 背景と境界モジュールで定義されています）と似ていますが、inset キーワードと spread 引数は使用できません。すべての filter プロパティ値と同様に、drop-shadow() 以降のフィルターが影に適用されます。",
        "grayscale()": "画像をグレースケールに変換します。値 100% は完全にグレースケールです。初期値の 0% は入力を変更しません。 0% と 100% の間の値は、効果に対する線形乗数です。",
        "hue-rotate()": "色相の角度を回転させます。 <angle> の値は、入力サンプルが調整される色相環の度数を定義します。 0deg の値では入力は変更されません。",
        "invert()": "入力画像のサンプルを反転します。 100% の値を指定すると、完全に反転されます。 0% では入力画像が変化しないままになります。 0% と 100% の間は効果の線形乗数になります。",
        "opacity()": "透過率を適用します。 0% は画像を完全に透明にし、 100% は画像をそのままにします。",
        "saturate()": "画像の彩度を設定します。 0% は完全に彩度をなくし、 100% はそのまま、 100% 以上の値は彩度を上げます。",
        "sepia()": "画像をセピア調にします。値を 100% にすると画像は完全にセピアになり、0% にすると何も変わりません。"
      },
      "initial_value": {
        "filter": "none"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/filter",
      "inheritance": false
    },
    {
      "id": 132,
      "name": "flex",
      "prefix": "flex",
      "description": "flex は CSS の一括指定プロパティで、フレックスアイテムをフレックスコンテナーの領域に収めるために、どのように伸長・収縮させるかを指定します。",
      "shorthand_property": [
        "flex-grow",
        "flex-shrink",
        "flex-basis"
      ],
      "values": {
        "initial": "アイテムは width および height プロパティによって寸法が決められます。コンテナーに合うように最小サイズまで収縮しますが、フレックスコンテナーの空き領域を埋めるために伸長することはありません。これは \"flex: 0 1 auto\" と同等です。",
        "auto": "アイテムは width および height プロパティによって寸法が決められますが、フレックスコンテナーの空き領域を埋めるために伸長したり、コンテナーに合うように最小サイズまで収縮したりします。これは \"flex: 1 1 auto\" と同等です。",
        "none": "アイテムは width および height プロパティによって寸法が決められます。寸法は完全に固定で、フレックスコンテナーに連動して収縮したり伸長したりすることはありません。これは\"flex: 0 0 auto\" と同等です。",
        "<'flex-grow'>": "フレックスアイテムの flex-grow を定義します。負の値は無効とみなされます。省略時の既定値は 1 です。 (初期値は 0)",
        "<'flex-shrink'>": "フレックスアイテムの flex-shrink を定義します。負の値は無効とみなされます。省略時の既定値は 1 です。 (初期値は 1)",
        "<'flex-basis'>": "フレックスアイテムの flex-basis を定義します。希望サイズが 0 ならば、自由度として解釈されないように単位をつけなければなりません。省略時の既定値は 0 です。 (初期値は auto)"
      },
      "initial_value": {
        "flex-grow": 0,
        "flex-shrink": 1,
        "flex-basis": "auto"
      },
      "applies_to": ["フロー内の擬似要素を含むフレックスアイテム"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex",
      "inheritance": false
    },
    {
      "id": 133,
      "name": "flex-basis",
      "prefix": "flex",
      "description": "flex-basis は CSS のプロパティで、フレックスアイテムの主要部分の初期の寸法を設定します。 box-sizing で設定していない限り、このプロパティはコンテンツボックスの寸法を定義します。",
      "shorthand_property": [
        "flex-grow",
        "flex-shrink",
        "flex-basis"
      ],
      "values": {
        "<'width'>": "以下の単位のいずれかです。",
        "content": "フレックスアイテムの内容物に基づいて、自動的に大きさを決めます。"
      },
      "initial_value": {
        "flex-basis": "auto"
      },
      "applies_to": ["フロー内の擬似要素を含むフレックスアイテム"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-basis",
      "inheritance": false
    },
    {
      "id": 134,
      "name": "flex-direction",
      "prefix": "flex",
      "description": "flex-direction は CSS のプロパティで、主軸の方向や向き（通常または逆方向）を定義することにより、フレックスコンテナー内でフレックスアイテムを配置する方法を設定します。",
      "shorthand_property": null,
      "values": {
        "row": "フレックスコンテナーの主軸は、書字方向と同じに定義されます。 main-start および main-end の位置は、コンテンツの書字方向と同様になります。",
        "row-reverse": "row と同様ですが、main-start および main-end の位置が入れ替わります。",
        "column": "フレックスコンテナーの主軸は、ブロック軸と同じになります。 main-start および main-end の位置は、 writing-mode における before および after の位置と同じになります。",
        "column-reverse": "column と同様ですが、 main-start および main-end の位置が入れ替わります。"
      },
      "initial_value": {
        "flex-direction": "row"
      },
      "applies_to": ["フレックスコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-direction",
      "inheritance": false
    },
    {
      "id": 135,
      "name": "flex-flow",
      "prefix": "flex",
      "description": "flex-flow は CSS の一括指定プロパティで、フレックスコンテナーの向きと折り返しの動作を同時に指定します。",
      "shorthand_property": [
        "flex-direction",
        "flex-wrap"
      ],
      "values": {
        "値に関して詳しくは、 flex-direction および flex-wrap をご覧ください。": null
      },
      "initial_value": {
        "flex-direction": "row",
        "flex-wrap": "nowrap"
      },
      "applies_to": ["フレックスコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-flow",
      "inheritance": false
    },
    {
      "id": 136,
      "name": "flex-grow",
      "prefix": "flex",
      "description": "flex-grow は CSS のプロパティで、フレックスコンテナー内の残りの空間が、どれだけフレックスアイテムの主軸方向の寸法に割り当てられるべきかを指定するフレックス伸長係数を設定します。\n\nフレックスコンテナーの主軸方向の寸法が、フレックスアイテムの主軸方向の寸法の合計よりも大きい場合、余った空間はフレックスアイテムに分配され、各アイテムが伸びる大きさは、コンテナーのすべてのアイテムのフレックス伸長係数の合計の割合で按分した値になります。",
      "shorthand_property": null,
      "values": {
        "<number>": "<number> をご覧ください。負の値は無効です。既定値は 0 です。"
      },
      "initial_value": {
        "flex-grow": 0
      },
      "applies_to": ["フロー内の擬似要素を含むフレックスアイテム"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-grow",
      "inheritance": false
    },
    {
      "id": 137,
      "name": "flex-shrink",
      "prefix": "flex",
      "description": "flex-shrink は CSS のプロパティで、フレックスアイテムの縮小係数を設定します。すべてのフレックスアイテムの寸法がフレックスコンテナーよりも大きい場合、アイテムは flex-shrink の数値に従って縮小して収まります。\n\n使用時は flex-shrink は flex-grow や flex-basis などの他のフレックスプロパティと共に使用され、ふつうは flex の一括指定を使用して定義されます。",
      "shorthand_property": null,
      "values": {
        "<number>": "<number> を参照してください。負の値は無効です。既定値は 1 です。"
      },
      "initial_value": {
        "flex-shrink": 1
      },
      "applies_to": ["フロー内の擬似要素を含むフレックスアイテム"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-shrink",
      "inheritance": false
    },
    {
      "id": 138,
      "name": "flex-wrap",
      "prefix": "flex",
      "description": "flex-wrap は CSS のプロパティで、フレックスアイテムを単一行に押し込むか、あるいは複数行に折り返してもよいかを指定します。折り返しを許可する場合は、行を積み重ねる方向の制御も可能です。",
      "shorthand_property": null,
      "values": {
        "nowrap": "フレックスアイテムは単一行に配置され、フレックスコンテナーからあふれることもあります。 cross-start は、 flex-direction の値に応じて start または before と同一になります。",
        "wrap": "フレックスアイテムは複数行に分割されます。 cross-start は flex-direction の値に応じて start または before と同一になり、 cross-end は、指定された cross-start の反対側になります。",
        "wrap-reverse": "wrap と同様に動作しますが、 cross-start と cross-end が入れ替わります。"
      },
      "initial_value": {
        "flex-wrap": "nowrap"
      },
      "applies_to": ["フレックスコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/flex-wrap",
      "inheritance": false
    },
    {
      "id": 139,
      "name": "float",
      "prefix": null,
      "description": "float は CSS のプロパティで、要素を包含ブロックの左右どちらかの側に沿うように設置し、テキストやインライン要素がその周りを回りこめるように定義します。要素はウェブページの通常のフローから外れますが、（絶対位置指定 とは対照的に）フローの一部であり続けます。",
      "shorthand_property": null,
      "values": {
        "left": "要素は、必ずその包含ブロックの左側に浮動します。",
        "right": "要素は、必ずその包含ブロックの右側に浮動します。",
        "none": "要素は決して浮動しません。",
        "inline-start": "要素は、必ずその包含ブロックの始端側に浮動します。左書きでは左側、右書きでは右側になります。",
        "inline-end": "要素は、必ずその包含ブロックの終端側に浮動します。左書きでは右側、右書きでは左側になります。"
      },
      "initial_value": {
        "float": "none"
      },
      "applies_to": ["すべての要素。ただし display が none なら効果を持ちません。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/float",
      "inheritance": false
    },
    {
      "id": 140,
      "name": "font",
      "prefix": "font",
      "description": "font は CSS の一括指定プロパティで、要素のフォントの様々なプロパティをすべて設定します。また、要素のフォントにシステムフォントを設定することもできます。",
      "shorthand_property": [
        "font-family",
        "font-size",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "font-height"
      ],
      "values": {
        "<'font-style'>": "font-style プロパティを参照。",
        "<'font-variant'>": "font-variant プロパティを参照。",
        "<'font-weight'>": "font-weight プロパティを参照。",
        "<'font-stretch'>": "font-stretch プロパティを参照。",
        "<'font-size'>": "font-size プロパティを参照。",
        "<'line-height'>": "line-height プロパティを参照。",
        "<'font-family'>": "font-family プロパティを参照。"
      },
      "initial_value": {
        "font-size": "medium",
        "font-stretch": "normal",
        "font-style": "normal",
        "font-variant": "normal",
        "font-weight": "normal",
        "font-height": "normal",
        "font-family": "ユーザエージェントに依存"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font",
      "inheritance": true
    },
    {
      "id": 141,
      "name": "font-family",
      "prefix": "font",
      "description": "CSS の font-family プロパティは、選択した要素に対して、フォントファミリー名や総称ファミリー名の優先順位リストを指定することができます。",
      "shorthand_property": null,
      "values": {
        "<family-name>": "フォントファミリーの名称。例えば、 \"Times\" や \"Helvetica\" はフォントファミリーです。空白を含むフォントファミリー名は、引用符で囲む必要があります。",
        "<generic-name>": "総称フォントファミリーは代替の仕組みです。この仕組みによって、指定されたフォントがどれも利用できなかった場合、スタイルシート製作者の意図を多少なりとも保つことができます。総称ファミリー名はキーワードであり、引用符で囲んではいけません。総称フォントファミリーは、フォントファミリー名リストの最終選択肢である必要があります。以下のキーワードが定義されています。"
      },
      "initial_value": {
        "font-family": "ユーザエージェントに依存"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-family",
      "inheritance": true
    },
    {
      "id": 142,
      "name": "font-feature-settings",
      "prefix": "font",
      "description": "font-feature-settings は CSS のプロパティで、 OpenType フォントの拡張書体の特性を制御します。",
      "shorthand_property": null,
      "values": {
        "normal": "テキストは既定の設定で配置されます。",
        "<feature-tag-value>": "テキストの描画時、 OpenType の特性タグ値のリストがテキストレイアウトエンジンに渡され、フォントの機能を有効化または無効化します。タグは常に 4 文字の ASCII 文字の <string> です。文字数がこれより少ないか多い場合、もしくはコードポイント U+20 - U+7E の範囲外の文字を含む場合、プロパティ全体が無効になります。\n値は正の整数です。キーワード on と off はそれぞれ 1 と 0 の別名です。値が設定されていなければ、既定値は 1 です。 論理値ではない OpenType 特性 (例: stylistic alternates) では、この値は選ばれる特定の字形を意味します。論理値の特性はオンとオフを切り替えます。"
      },
      "initial_value": {
        "font-feature-settings": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-feature-settings",
      "inheritance": true
    },
    {
      "id": 143,
      "name": "font-kerning",
      "prefix": "font",
      "description": "font-kerning CSS プロパティはフォントに存在するカーニング情報の使用を制御します。",
      "shorthand_property": null,
      "values": {
        "auto": "このキーワードは、カーニングを使用するかをブラウザーに任せます。フォントサイズが小さい場合はカーニングが不自然になることがあるため、ブラウザーは無効化するでしょう。これは既定値です。",
        "normal": "このキーワードは、カーニングを適用するよう要求します。",
        "none": "このキーワードは、ブラウザーがフォントのカーニング情報を使用しないようにします。"
      },
      "initial_value": {
        "font-kerning": "auto"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-kerning",
      "inheritance": true
    },
    {
      "id": 144,
      "name": "font-language-override",
      "prefix": "font",
      "description": "font-language-override は CSS のプロパティで、書体で言語に固有の字形の使用を制御します。",
      "shorthand_property": null,
      "values": {
        "normal": "lang 属性で指定された言語で適切なフォントの字形を使用するよう、ブラウザーに指示します。",
        "<string>": "文字列で指定された言語で適切なフォントの字形を使用するよう、ブラウザーに指示します。値は OpenType language system にある言語タグと一致している必要があります。例えば、 \"ENG\" は英語で、 \"KOR\" は韓国語です。。"
      },
      "initial_value": {
        "font-language-override": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-language-override",
      "inheritance": true
    },
    {
      "id": 145,
      "name": "font-optical-sizing",
      "prefix": "font",
      "description": "font-optical-sizing は CSS のプロパティで、テキストの描画をそれぞれの大きさでの表示に最適化して表示するかどうかを設定します。",
      "shorthand_property": null,
      "values": {
        "none": "ブラウザーは表示の最適化のために書体の形を変更しません。",
        "auto": "ブラウザーは表示の最適化のために書体の形を変更します。"
      },
      "initial_value": {
        "font-optical-sizing": "auto"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-optical-sizing",
      "inheritance": true
    },
    {
      "id": 146,
      "name": "font-palette",
      "prefix": "font",
      "description": "The font-palette CSS property allows specifying one of the many palettes contained in a color font that a user agent may use for the font. Users can also override the values in a palette or create a new palette by using the @font-palette-values at-rule.",
      "shorthand_property": null,
      "values": {
        "normal": "Specifies the default color palette or the default glyph colorization (set by the font maker) to be used for the font. With this setting, the palette in the font at index 0 is rendered.",
        "light": "Specifies the first palette in the font that matches 'light' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a light (close to white) background. If a font does not have this metadata, the light value behaves as normal.",
        "dark": "Specifies the first palette in the font that matches 'dark' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a dark (close to black) background. If a font does not have this metadata, the value behaves as normal.",
        "<palette-identifier>": "Allows you to specify your own values for the font palette by using the @font-palette-values at-rule. This value is specified using the <dashed-ident> format.",
        "palette-mix()": "Creates a new font-palette value by blending together two font-palette values by specified percentages and color interpolation methods."
      },
      "initial_value": {
        "font-palette": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette",
      "inheritance": true
    },
    {
      "id": 147,
      "name": "font-size",
      "prefix": "font",
      "description": "font-size は CSS のプロパティで、フォントの大きさを定義します。フォントの大きさを変更すると、フォントの大きさに相対的な <length> の単位例えば em, ex, なども更新されます。",
      "shorthand_property": null,
      "values": {
        "xx-small, x-small, small, medium, large, x-large, xx-large, xxx-large": "絶対的なサイズのキーワードで、ユーザーの既定のフォントサイズ (つまり medium) を基準とします。",
        "larger, smaller": "相対的なサイズのキーワードです。フォントは親要素のフォントサイズから相対的に、上記の絶対的サイズのキーワードで使われている倍率におよそ沿う形で拡大または縮小されます。",
        "<length>": "正の <length> の値。 (em や ex などの) フォント相対単位のほとんどは、親要素のフォントサイズに対する相対値です。\n\n(rem などの) ルートを基準としたフォント相対単位では、フォントサイズは <html> (ルート) 要素で使われているフォントのサイズからの相対値です。",
        "<percentage>": "正の <percentage> 値で、親要素のフォントサイズからの相対値です。"
      },
      "initial_value": {
        "font-size": "medium"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-size",
      "inheritance": true
    },
    {
      "id": 148,
      "name": "font-size-adjust",
      "prefix": "font",
      "description": "font-size-adjust は CSS のプロパティで、 (大文字の大きさを定義する) 現在のフォントサイズに相対的な小文字の大きさを設定します。",
      "shorthand_property": null,
      "values": {
        "normal": "font-size プロパティだけを基準にフォントサイズを選びます。",
        "ex-height | cap-height | ch-width | ic-width | ic-height": "正規化の対象となるフォントメトリックを指定します。既定値は ex-height です。次のいずれかです。",
        "<number>": "font-size に掛け合わせて小文字の高さ (そのフォントの文字 x の高さ) になるような値を指定し、フォントサイズを選びます。\n\n指定した数値は、通常は最初に選んだ font-family のアスペクト比 (文字 x の高さとフォントサイズの比率) にしてください。こうすれば、最初に選んだフォントが利用可能なら、ブラウザーが font-size-adjust に対応しているかどうかに関わらず、どのブラウザーでも同じサイズで表示されます。\n\n0 は高さが 0 のテキスト (非表示テキスト) になります。"
      },
      "initial_value": {
        "font-size-adjust": "none"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-size-adjust",
      "inheritance": true
    },
    {
      "id": 149,
      "name": "font-stretch",
      "prefix": "font",
      "description": "font-stretch は CSS のプロパティで、フォントの normal, condensed, expanded のフェイスを選択します。",
      "shorthand_property": null,
      "values": {
        "normal": "通常のフォントフェイスを指定します。",
        "semi-condensed, condensed, extra-condensed, ultra-condensed": "通常より幅の狭い (condensed) フォントフェイスを指定します。最も幅の狭いフェイスは ultra-condensed です。",
        "semi-expanded, expanded, extra-expanded, ultra-expanded": "通常より幅の広い (expanded) フォントフェイスを指定します。最も幅の広いフェイスは ultra-expanded です。",
        "<percentage>": "<percentage> 値です。このプロパティでは負の数は許可されていません。"
      },
      "initial_value": {
        "font-stretch": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-stretch",
      "inheritance": true
    },
    {
      "id": 150,
      "name": "font-style",
      "prefix": "font",
      "description": "font-style は CSS のプロパティで、font-family の中で通常体 (normal)、筆記体 (italic)、斜体 (oblique) のどのスタイルにするか設定します。",
      "shorthand_property": null,
      "values": {
        "normal": "font-family の中で normal に分類されているフォントを選択します。",
        "italic": "italic として分類されているフォントを選択します。 italic フェイスが使用できない場合は、代わりに oblique に分類されているフォントを選択します。どちらも利用できない場合は、スタイルは人工的にシミュレートされます。",
        "oblique": "oblique として分類されているフォントを選択します。 oblique フェイスが使用できない場合は、代わりに italic に分類されているフォントを選択します。どちらも利用できない場合は、スタイルは人工的にシミュレートされます。",
        "oblique <angle>": "oblique として分類されているフォントを選択し、加えてテキストの傾きの角度を指定します。選択されたフォントファミリで１つまたは複数の oblique フェイスが利用できる場合、指定した角度に最も近いものが選択されます。 oblique フェイスが利用できない場合、ブラウザーは通常のフェイスを指定した大きさだけ傾けることで、 oblique バージョンを作成します。有効な値は-90以上90以下の角度の値です。角度が指定されない場合、14度の角度が使用されます。正の数では行末に向けて傾け、負の数では行頭に向けて傾けます。\n\n一般に、要求された角度が14度以上の場合、大きな角度が推奨されます。その他の場合は、より小さい角度が推奨されます (アルゴリズムの詳細は、仕様書の font matching section を参照してください)。"
      },
      "initial_value": {
        "font-style": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-style",
      "inheritance": true
    },
    {
      "id": 151,
      "name": "font-synthesis",
      "prefix": "font",
      "description": "font-synthesis は CSS のプロパティで、太字やイタリックの字体がない場合に、ブラウザーが合成してよいかどうかを制御します。",
      "shorthand_property": null,
      "values": {
        "none": "太字およびイタリックの字体を合成しないことを示すキーワードです。",
        "weight": "必要であれば、太字の字体を合成してよいことを示すキーワードです。",
        "style": "必要であれば、イタリックの字体を合成してよいことを示すキーワードです。",
        "small-caps": "必要であれば、スモールキャップの字体を合成してよいことを示すキーワードです。"
      },
      "initial_value": {
        "font-synthesis": "weight style small-caps position"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-synthesis",
      "inheritance": true
    },
    {
      "id": 152,
      "name": "font-synthesis-position",
      "prefix": "font",
      "description": "The font-synthesis-position CSS property lets you specify whether or not a browser may synthesize the subscript and superscript \"position\" typefaces when they are missing in a font family, while using font-variant-position to set the positions.\n\nThe font-synthesis-position property has no effect when using the <sup> and <sub> elements.\n\nIt is often convenient to use the shorthand property font-synthesis to control all typeface synthesis values.",
      "shorthand_property": null,
      "values": {
        "auto": "Indicates that a missing position typeface may be synthesized by the browser if needed.",
        "none": "Indicates that the synthesis of a missing position typeface by the browser is not allowed."
      },
      "initial_value": {
        "font-synthesis-position": "none"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-position",
      "inheritance": true
    },
    {
      "id": 153,
      "name": "font-synthesis-small-caps",
      "prefix": "font",
      "description": "The font-synthesis-small-caps CSS property lets you specify whether or not the browser may synthesize small-caps typeface when it is missing in a font family. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.\n\nIt is often convenient to use the shorthand property font-synthesis to control all typeface synthesis values.",
      "shorthand_property": null,
      "values": {
        "auto": "Indicates that the missing small-caps typeface may be synthesized by the browser if needed.",
        "none": "Indicates that the synthesis of the missing small-caps typeface by the browser is not allowed."
      },
      "initial_value": {
        "font-synthesis-position": "auto"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-small-caps",
      "inheritance": true
    },
    {
      "id": 154,
      "name": "font-synthesis-style",
      "prefix": "font",
      "description": "The font-synthesis-style CSS property lets you specify whether or not the browser may synthesize the oblique typeface when it is missing in a font family.\n\nIt is often convenient to use the shorthand property font-synthesis to control all typeface synthesis values.",
      "shorthand_property": null,
      "values": {
        "auto": "Indicates that the missing oblique typeface may be synthesized by the browser if needed.",
        "none": "Indicates that the synthesis of the missing oblique typeface by the browser is not allowed."
      },
      "initial_value": {
        "font-synthesis-style": "auto"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-style",
      "inheritance": true
    },
    {
      "id": 155,
      "name": "font-synthesis-weight",
      "prefix": "font",
      "description": "The font-synthesis-weight CSS property lets you specify whether or not the browser may synthesize the bold typeface when it is missing in a font family.\n\nIt is often convenient to use the shorthand property font-synthesis to control all typeface synthesis values.",
      "shorthand_property": null,
      "values": {
        "auto": "Indicates that the missing bold typeface may be synthesized by the browser if needed.",
        "none": "Indicates that the synthesis of the missing bold typeface by the browser is not allowed."
      },
      "initial_value": {
        "font-synthesis-weight": "auto"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis-weight",
      "inheritance": true
    },
    {
      "id": 156,
      "name": "font-variant",
      "prefix": "font",
      "description": "font-variant は CSS の一括指定プロパティで、フォントのすべての変化形を設定することができます。\n\nCSS Level 2 (Revision 1) における font-variant の値 (つまり、 normal や small-caps) は、一括指定の font を用いて設定することもできます。",
      "shorthand_property": [
        "font-variant-alternates",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-ligatures",
        "font-variant-numeric"
      ],
      "values": {
        "normal": "通常のフォントフェイスを定義します。それぞれの個別指定プロパティは通常の初期値になります。 font-variant の個別指定プロパティは、 font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, font-variant-east-asian です。",
        "none": "font-variant-ligatures を none に、その他の個別指定プロパティを normal に、それぞれの初期値を設定します。",
        "<common-lig-values>, <discretionary-lig-values>, <historical-lig-values>, <contextual-alt-values>": "個別指定の font-variant-ligatures プロパティに関するキーワードを指定します。指定可能な値は、 common-ligatures, no-common-ligatures, discretionary-ligatures, no-discretionary-ligatures, historical-ligatures, no-historical-ligatures, contextual, no-contextual です。",
        "small-caps, all-small-caps, petite-caps, all-petite-caps, unicase, titling-caps": "個別指定の font-variant-caps プロパティに関するキーワードや関数を指定します。",
        "<numeric-figure-values>, <numeric-spacing-values>, <numeric-fraction-values>, ordinal, slashed-zero": "個別指定の font-variant-numeric プロパティに関するキーワードを指定します。指定可能な値は、 lining-nums, oldstyle-nums, proportional-nums, tabular-nums, diagonal-fractions, stacked-fractions, ordinal, slashed-zero です。",
        "<east-asian-variant-values>, <east-asian-width-values>, ruby": "個別指定の font-variant-east-asian プロパティに関するキーワードを指定します。指定可能な値は、 jis78, jis83, jis90, jis04, simplified, traditional, full-width, proportional-width, ruby です。"
      },
      "initial_value": {
        "font-variant": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant",
      "inheritance": true
    },
    {
      "id": 157,
      "name": "font-variant-alternates",
      "prefix": "font",
      "description": "font-variant-alternates は CSS のプロパティで、代替書体の使用を制御します。代替書体は @font-feature-values で定義された代替名で参照される可能性があります。",
      "shorthand_property": null,
      "values": {
        "normal": "このキーワードは代替書体を無効にします。",
        "historical-forms": "このキーワードは歴史的形式 — 過去には一般的だったけれども今日そうではない書体を有効にします。 OpenType の hist の値に対応します。",
        "stylistic()": "この関数は、個々の文字に対して表現の変更を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の salt の値に相当します (例: salt 2)。",
        "styleset()": "この関数は、一連の文字に対するスタイルの代替を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の ssXY の値に相当します (例: ss02)。",
        "character-variant()": "この関数は、文字に対して特定のスタイルの選択肢を有効にします。 styleset() に似ていますが、一連の文字に対してまとまった書体を作成するわけではありませんので、個々の文字は独立した、整合が取れているとは限らないスタイルになります。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の cvXY の値に相当します (例: cv02)。",
        "swash()": "この関数は、先端装飾書体を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の swsh および cswh の値に相当します (例: swsh 2 および cswh 2)。",
        "ornaments()": "この関数は、丸数字や鏡文字などの注釈表記を有効にします。この函数は丸数字又は鏡文字などの表記を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 OpenType の nalt の値に相当します (例: nalt 2)。"
      },
      "initial_value": {
        "font-variant-alternates": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-alternates",
      "inheritance": true
    },
    {
      "id": 158,
      "name": "font-variant-caps",
      "prefix": "font",
      "description": "font-variant-caps は CSS のプロパティで、大文字の代替字形の使用を制御します。",
      "shorthand_property": null,
      "values": {
        "normal": "代替字形の使用を無効にします。",
        "small-caps": "小さな大文字の表示を有効にします (OpenType 特性: smcp)。スモールキャピタルの字形はふつう、大文字の形をしていますが、小文字の大きさに縮小されています。",
        "all-small-caps": "大文字と小文字の両方でスモールキャピタルの表示を有効にします (OpenType 機能: c2sc, smcp)。",
        "petite-caps": "petite capital の表示を有効にします (OpenType 特性: pcap)。",
        "all-petite-caps": "大文字と小文字の両方で petite capital の表示を有効にします (OpenType 特性: c2pc, pcap)。",
        "unicase": "大文字のスモールキャピタルと通常の小文字の混合表示を有効にします (OpenType 特性: unic).",
        "titling-caps": "タイトルキャピタルの表示を有効化します (OpenType 特性: titl)。大文字の字形は、ふつう小文字と一緒に使用するためにデザインされています。すべて大文字のタイトル文字列で使用された場合、太くなりすぎることがあります。タイトルキャピタルはこの場合に専用のデザインが行われたものです。"
      },
      "initial_value": {
        "font-variant-caps": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-caps",
      "inheritance": true
    },
    {
      "id": 159,
      "name": "font-variant-east-asian",
      "prefix": "font",
      "description": "CSS の font-variant-numeric プロパティは、日本語と中国語のような東アジアの字形の違いを制御するために使用します。",
      "shorthand_property": null,
      "values": {
        "normal": "代替字形の使用をタイトルキャピタルの表示を有効化します無効にします。",
        "ruby": "このキーワードは、ルビ文字のための特殊な表記の使用を強制します。ふつうは小さめで、フォントの作者がよく特定の形状でデザインし、ふつうはコントラストを上げるためにわずかに太くします。このキーワードは OpenType の ruby の値に対応します。",
        "<east-asian-variant-values>": "これらの値は、表示に使用される字形の違いのセットを指定します。利用可能な値は以下の通りです。"
      },
      "initial_value": {
        "font-variant-east-asian": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-east-asian",
      "inheritance": true
    },
    {
      "id": 160,
      "name": "font-variant-emoji",
      "prefix": "font",
      "description": "font-variant-emoji は CSS のプロパティで、絵文字の表示についての既定の表現を指定します。\n\n従来は、変化形セレクター（テキストの場合は U+FE0E、絵文字の場合は U+FE0F）をこの点に付加することで行われていました。このプロパティの影響を受けるのは、Unicode emoji presentation sequence に掲載されている絵文字だけです。",
      "shorthand_property": null,
      "values": {
        "normal": "ブラウザーが絵文字を表示する方法を選べます。これは多くの場合、オペレーティングシステムの設定に従います。",
        "text": "Unicode テキスト変化形セレクター (U+FE0E) を使用しているかのように絵文字を描画します。",
        "emoji": "Unicode 絵文字変化形セレクター (U+FE0F) を使用しているかのように絵文字を描画します。",
        "unicode": "絵文字の表示プロパティに従って絵文字を表示します。U+FE0E または U+FE0F の変化形セレクターが存在する場合、この値の設定を上書きします。"
      },
      "initial_value": {
        "font-variant-emoji": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-emoji",
      "inheritance": true
    },
    {
      "id": 161,
      "name": "font-variant-ligatures",
      "prefix": "font",
      "description": "font-variant-ligatures は CSS のプロパティで、適用される用途の文字コンテンツで使われる合字および文脈に合わせた字形を制御します。これにより、結果のテキストでより調和した形を利用することができます。",
      "shorthand_property": null,
      "values": {
        "normal": "正しいレンダリングに必要な通常の合字や文脈書式を有効にします。有効になる合字と書式は、フォント、言語、および書法の種類によって異なります。これが既定値です。",
        "none": "一般的なものであっても、すべての合字や文脈書式を無効にします。",
        "<common-lig-values>": "fi, ffi, th などの、よくある合字を制御します。 OpenType の値 liga および clig に対応します。2 つの値が指定できます。",
        "<discretionary-lig-values>": "フォントに依存し文字デザイナーが定義する特定の合字を制御します。対応する OpenType の値は dlig です。2 つの値が指定できます。",
        "<historical-lig-values>": "古い本で歴史的に使用された、ドイツ語の tz を ꜩ と表示するような合字です。対応する OpenType の値は hlig です。2 つの値が指定できます。",
        "<contextual-alt-values>": "字形を文脈に合わせるかどうかを制御します。つまり、字形を周囲の文字に合わせるかどうかです。対応する OpenType の値は calt です。2 つの値が指定できます。"
      },
      "initial_value": {
        "font-variant-ligatures": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-ligatures",
      "inheritance": true
    },
    {
      "id": 162,
      "name": "font-variant-numeric",
      "prefix": "font",
      "description": "font-variant-numeric は CSS のプロパティで、数字、分数、序数記号の表記を制御するために使用します。",
      "shorthand_property": null,
      "values": {
        "normal": "このキーワードは、別形式の表記の使用を無効にします。",
        "ordinal": "このキーワードは、序数記号に対して特別な表記を使用します。英語では 1st, 2nd, 3rd, 4th、イタリア語では 1a です。 OpenType の ordn の値に対応します。",
        "slashed-zero": "このキーワードは、スラッシュ付きの 0 を使用します。これは O と 0 を明確に区別する必要がある場合に便利です。 OpenType の zero の値に対応します。",
        "<numeric-figure-values>": "これらの値は、数字の形状を制御します。2 つの値が利用できます。",
        "<numeric-spacing-values>": "これらの値は、数字の表記の大きさを制御します。2 つの値が利用できます。",
        "<numeric-fraction-values>": "これらの値は、分数の表示に使う表記を制御します。2 つの値が利用できます。"
      },
      "initial_value": {
        "font-variant-numeric": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-numeric",
      "inheritance": true
    },
    {
      "id": 163,
      "name": 
      "font-variant-position",
      "prefix": "font",
      "description": "font-variant-position は CSS のプロパティで、上付き文字または下付き文字として配置された小さな代替文字の使用を制御します。\n\n文字は変更されないまま、フォントのベースラインから相対的に配置されます。これらの文字はふつう、 <sub> と <sup> 要素で使用されます。",
      "shorthand_property": null,
      "values": {
        "normal": "上付き文字および下付き文字の字体の代替を無効にします。",
        "sub": "下付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。",
        "super": "上付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。"
      },
      "initial_value": {
        "font-variant-position": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variant-position",
      "inheritance": true
    },
    {
      "id": 164,
      "name": "font-variation-settings",
      "prefix": "font",
      "description": "font-variation-settings は CSS のプロパティで、変更したい特性の 4 文字の軸名と特性の値を指定することにより、可変フォントに対する低水準の制御を提供します。",
      "shorthand_property": null,
      "values": {
        "normal": "テキストは既定の設定を使用してレイアウトされます。",
        "<string> <number>": "テキストを描画する際、フォントの特性を有効または無効にするために可変フォントの軸名のリストがテキストレイアウトエンジンへ渡されます。それぞれの設定は常に、一つ以上の4文字の ASCII 文字の <string> と、続いて設定する軸の値を示す <number> の組み合わせから成ります。<string> の文字が多すぎたり少なすぎたり、文字が U+20 - U+7E のコードポイントの範囲を超えていたりした場合は、プロパティ全体が無効になります。フォントデザイナーによって定義された利用可能な値の範囲次第では、<number> は小数や負の数を取ることもできます。"
      },
      "initial_value": {
        "font-variation-settings": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-variation-settings",
      "inheritance": true
    },
    {
      "id": 165,
      "name": "font-weight",
      "prefix": "font",
      "description": "font-weight は CSS のプロパティで、フォントの太さ (あるいは重み) を指定します。実際に表示されるフォントの太さは、現在設定されている font-family に依存する場合があります。",
      "shorthand_property": null,
      "values": {
        "normal": "通常のフォントの太さです。 400 と同じです。",
        "bold": "太字のフォントの太さです。 700 と同じです。",
        "light": "フォントの太さが親要素よりも相対的に 1 つ細くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の相対的な太さの意味を参照してください。",
        "bolder": "フォントの太さが親要素よりも相対的に1つ太くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の相対的な太さの意味を参照してください。",
        "<number>": "1 以上 1000 以下の <number> 値です。数値が大きいと、数値が小さいものより太さが太い (または等しい) ことを表します。よく使用される値は、以下の一般的な太さ名との対応にあるように、共通の太さ名に対応しています。"
      },
      "initial_value": {
        "font-weight": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/font-weight",
      "inheritance": true
    },
    {
      "id": 166,
      "name": "forced-color-adjust",
      "prefix": null,
      "description": "forced-color-adjust は CSS のプロパティで、特定の要素を強制カラーモードから除外することができます。これにより、これらの値の制御が CSS に戻されます。",
      "shorthand_property": null,
      "values": {
        "auto": "強制カラーモードでは、要素の色がユーザーエージェントによって調整されます。これが既定値です。",
        "none": "強制カラーモードでも、要素の色はユーザーエージェントによって調整されません。"
      },
      "initial_value": {
        "forced-color-adjust": "normal"
      },
      "applies_to": ["すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/forced-color-adjust",
      "inheritance": true
    },
    {
      "id": 167,
      "name": "gap (grid-gap)",
      "prefix": null,
      "description": "gap は CSS のプロパティで、行や列の間のすき間 (溝) を定義します。これは row-gap および column-gap の一括指定です。",
      "shorthand_property": [
        "row-gap",
        "column-gap"
      ],
      "values": {
        "<length>": "グリッド線を隔てる溝の幅です。",
        "<percentage>": "要素の寸法に対する、グリッド線を隔てる溝の幅です。"
      },
      "initial_value": {
        "row-gap": "normal",
        "column-gap": "normal"
      },
      "applies_to": ["段組み要素、フレックスコンテナー、グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/gap",
      "inheritance": false
    },
    {
      "id": 168,
      "name": "grid",
      "prefix": "grid",
      "description": "grid は CSS のプロパティで、一括指定プロパティとして明示的・暗黙的なすべてのグリッドプロパティを単一の宣言で設定します。\n\ngrid を使用すると、一方の軸を grid-template-rows または grid-template-columns を使用して設定し、もう一方の軸でどのように内容物を自動反復させるかを、暗黙のグリッドプロパティである grid-auto-rows, grid-auto-columns, grid-auto-flow で設定します。",
      "shorthand_property": [
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows"
      ],
      "values": {
        "<'grid-template'>": "grid-template を定義し、これには grid-template-columns, grid-template-rows, grid-template-areas が含まれます。",
        "<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?": "grid-template-rows プロパティを明示的に設定 (および grid-template-columns プロパティを none に設定) することで行トラックを設定し、 grid-auto-columns プロパティを設定 (および grid-auto-rows を auto に設定) することで列トラックの自動反復方法を設定します。 dense が設定されていれば、 grid-auto-flow も column に設定されます。\n\nほかの grid のサブプロパティはすべて、初期値に初期化されます。",
        "[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>": "grid-template-columns プロパティを明示的に設定 (および grid-template-rows プロパティを none に設定) することで列トラックを設定し、 grid-auto-rows プロパティを設定 (および grid-auto-columns を auto に設定) することで行トラックの自動反復方法を設定します。 dense が設定されていれば、 grid-auto-flow も column に設定されます。\n\nほかの grid のサブプロパティはすべて、初期値に初期化されます。"
      },
      "initial_value": {
        "grid-auto-columns": "auto",
        "grid-auto-flow": "row",
        "grid-auto-rows": "auto",
        "grid-template-areas": "none",
        "grid-template-columns": "none",
        "grid-template-rows": "none",
        "grid-column-gap": 0,
        "grid-row-gap": 0,
        "column-gap": "normal",
        "row-gap": "normal"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid",
      "inheritance": false
    },
    {
      "id": 169,
      "name": "grid-area",
      "prefix": "grid",
      "description": "grid-area は CSS の一括指定プロパティで、グリッドアイテムの寸法とグリッド内での位置を指定し、線、スパン、指定するために、グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域の端を指定します",
      "shorthand_property": [
        "grid-row-start",
        "grid-column-start",
        "grid-row-end",
        "grid-column-end"
      ],
      "values": {
        "auto": "このプロパティがグリッドアイテムの配置に何も寄与しないことを示すキーワードで、自動配置または既定のスパン 1 を示します。",
        "<custom-ident>": "'<custom-ident>-start'/'<custom-ident>-end' という名前の付いた線がある場合、そのような最初の線グリッドのアイテムの配置に関与します.そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から n 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分にない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。"
      },
      "initial_value": {
        "grid-row-start": "auto",
        "grid-column-start": "auto",
        "grid-row-end": "auto",
        "grid-column-end": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-area",
      "inheritance": false
    },
    {
      "id": 170,
      "name": "grid-auto-columns",
      "prefix": "grid",
      "description": "grid-auto-columns は CSS のプロパティで、暗黙的に生成されたグリッドの列トラックまたはトラックのパターンの大きさを指定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "負の値ではない長さです。",
        "<percentage>": "グリッドコンテナーのインライン方向の寸法に対する相対値で、負ではない <percentage> です。グリッドコンテナーのインライン方向の寸法が不定の場合は、パーセント値は auto のように扱われます。",
        "<flex>": "fr の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 <flex> の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。\n\nminmax() 表記の外に現れた場合は、最小値が自動として扱われます (つまり minmax(auto, <flex>))。",
        "max-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。",
        "min-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。",
        "minmax(min, max)": "min 以上、max 以下の寸法の範囲を定義する関数記法です。 max が min より小さい場合は、 max は無視され、 min として扱われます。<flex> の値は、最大値として、トラックのフレックス係数を設定します。最小値としては、ゼロ（または、グリッドコンテナーの寸法が最小コンテンツの制約を受けている場合は、最小コンテンツ）として扱われます。",
        "fit-content( [ <length> | <percentage> ] )": "min(max-content, max(auto, argument)) という式を表します。この式は、トラックの寸法が auto の最小値よりも大きい場合に argument で固定されることを除いて、auto と同様 (すなわち minmax(auto, max-content)) に計算されます。",
        "auto": "最大値としては、そのトラック内のアイテムの最大の max-content のサイズを表します。\n\n最小値としては、そのトラック内のアイテムの最大の最小サイズ（アイテムの min-width/min-height で指定します）を表します。これは常にではありませんが、 min-content のサイズであることが多いです。\n\nminmax() 表記の外で使用した場合、 auto は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、 minmax(min-content,max-content) と同様の動作をします。"
      },
      "initial_value": {
        "grid-auto-columns": "auto"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-columns",
      "inheritance": false
    },
    {
      "id": 171,
      "name": "grid-auto-flow",
      "prefix": "grid",
      "description": "grid-auto-flow は CSS のプロパティで、自動配置のアルゴリズムの動作を制御し、自動配置されたアイテムがどのようにグリッドに流れ込むかを正確に指定するものです。",
      "shorthand_property": null,
      "values": {
        "row": "アイテムは、各行を順番に埋めていき、必要に応じて新しい行を追加していくことで配置されます。 row と column のどちらも指定されなかった場合は、 row とみなされます。",
        "column": "アイテムは、各列を順番に埋めていき、必要に応じて新しい列を追加していくことで配置されます。",
        "dense": "\"dense\" パッキングアルゴリズムは、小さいアイテムが後で出てきた場合、グリッドの早い段階で穴を埋めようとします。そのため、より大きなアイテムが残した穴を埋めるために、アイテムが順番通りに表示されないことがあります。\n\nこれを省略すると、 \"sparse\" アルゴリズムが使用され、配置アルゴリズムはアイテムを配置するときにグリッド内を「前に進む」だけで、穴を埋めるために後ろに戻ることはありません。これにより、自動配置されたアイテムはすべて「順番通り」に表示され、たとえ後から配置したアイテムで埋められるはずの穴が残っていたとしても、確実に埋められるようになります。"
      },
      "initial_value": {
        "grid-auto-flow": "row"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-flow",
      "inheritance": false
    },
    {
      "id": 172,
      "name": "grid-auto-rows",
      "prefix": "grid",
      "description": "grid-auto-rows は CSS のプロパティで、暗黙的に生成されたグリッドの行トラックまたはトラックのパターンの大きさを指定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "負の値ではない長さです。",
        "<percentage>": "グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない <percentage> です。グリッドコンテナーのブロック方向の寸法が不定の場合は、パーセント値は auto のように扱われます。",
        "<flex>": "fr の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 <flex> の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。\n\nminmax() 記法の外で使用された場合は、最小値が自動として扱われます（つまり minmax(auto, <flex>)）。",
        "max-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。",
        "min-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。",
        "minmax(min, max)": "min 以上、max 以下の寸法の範囲を定義する関数記法です。 max が min より小さい場合は、 max は無視され、 min として扱われます。<flex> の値は、最大値として、トラックのフレックス係数を設定します。最小値としては、ゼロ（または、グリッドコンテナーの寸法が最小コンテンツの制約を受けている場合は、最小コンテンツ）として扱われます。",
        "fit-content( [ <length> | <percentage> ] )": "min(max-content, max(auto, argument)) という式を表します。この式は、トラックの寸法が auto の最小値よりも大きい場合に argument で固定されることを除いて、auto と同様（すなわち minmax(auto, max-content)）に計算されます。",
        "auto": "最大値として使用された場合は、トラック内のアイテムのうち最大の max-content の寸法を表します。\n\n最小値として使用された場合は、そのトラック内のアイテムのうち最大の最小寸法を（各アイテムの min-width/min-height で指定された寸法）を表します。これは通常、常にとは限りませんが、 min-content の寸法です。\n\nminmax() 記法の外で使用された場合、 auto は上記の最小値と最大値の間の範囲を表します。多くの場合は minmax(min-content,max-content) のように動作します。"
      },
      "initial_value": {
        "grid-auto-rows": "auto"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-rows",
      "inheritance": false
    },
    {
      "id": 173,
      "name": "grid-column",
      "prefix": "grid",
      "description": "grid-column は CSS の一括指定プロパティで、グリッドアイテムの寸法とグリッド列内での位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域の行の先頭と末尾の端を指定します。",
      "shorthand_property": [
        "grid-column-end",
        "grid-column-start"
      ],
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置するか、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "<custom-ident>-start/<custom-ident>-end という名前の付いた線がある場合、これはそのような線の最初がグリッドのアイテムの配置に関わります。そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列側の先頭の端が末尾の端から n 行になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。"
      },
      "initial_value": {
        "grid-column-end": "auto",
        "grid-column-start": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-column",
      "inheritance": false
    },
    {
      "id": 174,
      "name": "grid-column-end",
      "prefix": "grid",
      "description": "grid-column-end は CSS のプロパティで、グリッド列内のグリッドアイテムの末尾位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域のブロック方向の末尾側の端を指定します。",
      "shorthand_property": null,
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "'<custom-ident>-end' という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列の末尾の端が先頭の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。\n\n<custom-ident> は span の値を取ることができません。"
      },
      "initial_value": {
        "grid-column-end": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-end#span_integer_custom-ident_",
      "inheritance": false
    },
    {
      "id": 175,
      "name": "grid-column-start",
      "prefix": "grid",
      "description": "grid-column-start は CSS のプロパティで、グリッド列内のグリッドアイテムの先頭位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域のブロック方向の先頭側の端を指定します。",
      "shorthand_property": null,
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "'<custom-ident>-start という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列の末尾の端が先頭の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。\n\n<custom-ident> は span の値を取ることができません。"
      },
      "initial_value": {
        "grid-column-start": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-start",
      "inheritance": false
    },
    {
      "id": 176,
      "name": "grid-row",
      "prefix": "grid",
      "description": "grid-row は CSS の一括指定プロパティで、グリッド行の中におけるグリッドアイテムの寸法と位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域のインライン方向の先頭と末尾の端を指定します。",
      "shorthand_property": [
        "grid-row-end",
        "grid-row-start"
      ],
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "'<custom-ident>-start という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列の末尾の端が先頭の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。"
      },
      "initial_value": {
        "grid-row-end": "auto",
        "grid-row-start": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-row",
      "inheritance": false
    },
    {
      "id": 177,
      "name": "grid-row-end",
      "prefix": "grid",
      "description": "grid-row-end は CSS のプロパティで、グリッド行の中におけるグリッドアイテムの末尾の位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域のインライン方向の末尾の端を指定します。",
      "shorthand_property": [
        "grid-row-end",
        "grid-row-start"
      ],
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "<custom-ident>-end という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。そうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。\n\n<custom-ident> は span の値を取ることができません。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の列の末尾の端が先頭の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。"
      },
      "initial_value": {
        "grid-row-end": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-end",
      "inheritance": false
    },
    {
      "id": 178,
      "name": "grid-row-start",
      "prefix": "grid",
      "description": "grid-row-start は CSS のプロパティで、グリッド行の中におけるグリッドアイテムの先頭の位置を指定します。グリッド配置に線や区間を指定したり、何も指定しなかったり（自動）することで、グリッド領域のインライン方向の先頭の端を指定します。",
      "shorthand_property": null,
      "values": {
        "auto": "プロパティをグリッドアイテムの配置に影響させず、自動的に配置し、間隔を自動的に取るか、既定の 1 とするためのキーワードです。",
        "<custom-ident>": "<custom-ident>-start という名前の付いた線がある場合、これはそのような線の先頭がグリッドアイテムの配置に関わります。\n\nそうでなければ、これは <custom-ident> に沿って整数の 1 が指定されたものとして扱われます。",
        "<integer> && <custom-ident>?": "n 番目のグリッド線をグリッドアイテムの配置に使用します。負の整数が指定された場合は、逆方向にカウントし、明示的なグリッドの末尾の端から始めます。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前がある線の数が十分にない場合は、この位置を探す目的においては、すべての暗黙のグリッド線がその名前を持つと仮定されます。\n\n0 の <integer> 値は無効です。",
        "span && [ <integer> || <custom-ident> ]": "グリッドアイテムのグリッド領域の行の先頭の端が終了の端から n 本になるように、グリッドアイテムの配置にグリッドスパンを設定します。\n\n名前が <custom-ident> として与えられた場合、その名前の付いた線のみがカウントされます。その名前を持つ線の数が十分おにない場合は、検索方向に対応する明示的グリッドの側にあるすべての暗黙的グリッド線が、この区間をカウントする目的でその名前を持つと仮定されます。\n\n<integer> が省略された場合の既定値は 1 です。負の数や 0 は無効です。\n\n<custom-ident> は span の値を取ることができません。"
      },
      "initial_value": {
        "grid-row-start": "auto"
      },
      "applies_to": ["包含ブロックがグリッドコンテナーであるグリッドアイテムまたは絶対位置指定のボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-start",
      "inheritance": false
    },
    {
      "id": 179,
      "name": "grid-template",
      "prefix": "grid",
      "description": "grid-template は CSS のプロパティで、一括指定プロパティとして グリッド列、グリッド行、グリッド領域 を定義します。",
      "shorthand_property": [
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows"
      ],
      "values": {
        "none": "3 個すべてのプロパティの値に none を設定するキーワードで、明示的なグリッドがないことを意味します。名前付きグリッド領域はありません。行と列は暗黙的に生成されます。これらのサイズは grid-auto-rows および grid-auto-columns プロパティによって決定されます。",
        "<'grid-template-rows'> / <'grid-template-columns'>": "grid-template-rows および grid-template-columns に特定の値を設定し、grid-template-areas の値に none を設定します。",
        "[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?": "grid-template-areas にリストの文字列を設定し、grid-template-rows にリストの各文字列に従ったトラックサイズを設定します (サイズ指定の足りない部分には auto が設定されます)。さらに、各サイズの前後で定義された名前付き線をつなぎ、grid-template-columns にトラックリストのスラッシュ記号の後で指定されたサイズを設定します (指定されていない場合は none が設定されます)。"
      },
      "initial_value": {
        "grid-template-areas": "none",
        "grid-template-columns": "none",
        "grid-template-rows": "none"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-template",
      "inheritance": false
    },
    {
      "id": 180,
      "name": "grid-template-areas",
      "prefix": "grid",
      "description": "grid-template-areas は CSS のプロパティで、グリッド内でセルを確立し、名前を割り当てることにより、名前付きの グリッド領域 を指定します。",
      "shorthand_property": null,
      "values": {
        "none": "グリッドコンテナーは名前付きのグリッド領域を定義しません。",
        "<string>+": "リストのすべての文字列ごとに行が生成され、文字列内の各セルごとに列が生成されます。行の中や行をまたがって同じ名前のセルトークンが複数あると、対応するグリッドセルにまたがる単一の名前付きグリッド領域を生成します。これらのセルが長方形にならないと、宣言は無効になります。"
      },
      "initial_value": {
        "grid-template-areas": "none"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-areas",
      "inheritance": false
    },
    {
      "id": 181,
      "name": "grid-template-columns",
      "prefix": "grid",
      "description": "grid-template-columns は CSS のプロパティで、グリッド列の線名とトラックのサイズ変更機能を定義します。",
      "shorthand_property": null,
      "values": {
        "none": "明示的なグリッドがないことを示します。どの列も暗黙的に生成され、それらのサイズは grid-auto-columns プロパティによって決定されます。",
        "[線名]": "<custom-ident> で、その位置にある線の名称を指定します。識別子には、予約語の span と auto 以外の有効な文字列を指定してください。行は、[line-name-a line-name-b]のように、角括弧内のスペースで区切られた複数の名前を持つことができます。",
        "<length>": "負の値ではない長さです。",
        "<percentage>": "グリッドコンテナーのインライン方向の寸法に対する相対値で、負ではない <percentage> です。グリッドコンテナーの寸法がトラックの寸法に依存する場合は、パーセント値を auto として扱う必要があります。 トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。",
        "<flex>": "fr の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 <flex> の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。\n\nminmax() 表記の外に現れた場合は、最小値が自動として扱われます (つまり minmax(auto, <flex>))。",
        "max-content": "グリッドトラックを占有しているグリッドアイテムの中で、最大コンテンツ貢献度を表すキーワードです。例えば、グリッドトラックの最初の要素が \"Repetitio est mater studiorum\" という文を保持しており、 2 つ目の要素が \"Dum spiro, spero\" という文を保持している場合、最大コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の文 \"Repetitio est mater studiorum\" のサイズによって定義されます。",
        "min-content": "グリッドトラックを占有しているグリッドアイテムの中で、最小コンテンツ貢献度を表すキーワードです。例えば、グリッドトラックの最初の要素が \"Repetitio est mater studiorum\" という文を保持しており、 2 つ目の要素が \"Dum spiro, spero\" という文を保持している場合、最小コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の単語 \"studiorum\" のサイズによって定義されます。",
        "minmax(min, max)": "min 以上、 max 以下の寸法の範囲を定義する関数表記法です。 max が min より小さい場合、 max は無視され、関数は min として扱われます。最大値として、 <flex> 値はトラックのフレックス係数を設定します。最小値としては無効です。",
        "auto": "最大値であれば max-content と同一のキーワードです。\n\n最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 (min-width/min-height で指定されたもの) を表します。ふつうは min-content ですが、必ずしもそうとは限りません。\n\nminmax() 表記以外で使われた場合、 auto は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、 minmax(min-content,max-content) と同じように動作します。",
        "fit-content( [ <length> | <percentage> ] )": "max(minimum, min(limit, max-content)) という式を表し、ここで minimum は auto の最小値 （常に min-content の最小値に等しいわけではありませんが、そうなることが多い） を表し、 limit は fit-content() に引数として渡されるトラックの大きさを計算する関数です。これは基本的に minmax(auto, max-content) と minmax(auto, limit) の小さい方として計算されます。",
        "repeat( [ <positive-integer> | auto-fill | auto-fit ] , <track-list> )": "トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の列をよりコンパクトな形式で記述できるようにします。",
        "masonry": "masonry の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。",
        "subgrid": "subgrid の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。"
      },
      "initial_value": {
        "grid-template-columns": "none"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-columns",
      "inheritance": false
    },
    {
      "id": 182,
      "name": "grid-template-rows",
      "prefix": "grid",
      "description": "grid-template-rows は CSS のプロパティで、グリッド行の線名とトラックのサイズ変更機能を定義します。",
      "shorthand_property": null,
      "values": {
        "none": "明示的なグリッドがないことを示すキーワードです。どの列も暗黙的に生成され、それらのサイズは grid-auto-rows プロパティによって決定されます。",
        "[線名]": "<custom-ident> で、その位置にある線の名称を指定します。識別子には、予約語の span と auto 以外の有効な文字列を指定してください。行は、[line-name-a line-name-b]のように、角括弧内のスペースで区切られた複数の名前を持つことができます。",
        "<length>": "負の値ではない長さで、列の幅を指定します。",
        "<percentage>": "グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない <percentage> です。グリッドコンテナーのサイズがそのトラックのサイズに依存している場合、グリッドコンテナーの内在サイズを計算するために、パーセント値は auto として扱われなければなりません。トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。",
        "<flex>": "fr の単位の付いた負の数ではない距離で、トラックのフレックス係数を指定します。 <flex> の寸法のトラックは、残りの空間をフレックス係数の割合に比例して共有します。 minmax() 表記の外に現れた場合は、最小値が自動として扱われます (つまり minmax(auto, <flex>))。",
        "max-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。",
        "min-content": "グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。",
        "minmax(min, max)": "min 以上、 max 以下の寸法の範囲を定義する関数表記法です。 max が min より小さい場合、 max は無視され、関数は min として扱われます。最大値として、 <flex> 値はトラックのフレックス係数を設定します。最小値としては無効です。",
        "auto": "最大値であれば max-content と同一のキーワードです。\n\n最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 (min-width/min-height で指定されたもの) を表します。ふつうは min-content ですが、必ずそうとは限りません。\n\nminmax() の外で使われた場合、 auto は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、minmax(min-content,max-content) と同じように動作します。",
        "fit-content( [ <length> | <percentage> ] )": "min(max-content, max(auto, argument)) の式を表し、 auto と同様に（すなわち minmax(auto, max-content) と）計算されますが、トラックの寸法が auto の最小値よりも大きい場合は argument でクランプされるところが異なります。",
        "repeat( [ <positive-integer> | auto-fill | auto-fit ] , <track-list> )": "トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の行をよりコンパクトな形式で記述できるようにします。",
        "masonry": "masonry の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。",
        "subgrid": "subgrid の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。"
      },
      "initial_value": {
        "grid-template-rows": "none"
      },
      "applies_to": ["グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-rows",
      "inheritance": false
    },
    {
      "id": 183,
      "name": "hanging-punctuation",
      "prefix": null,
      "description": "hanging-punctuation は CSS のプロパティで、区切り記号をテキストの行頭や行末にぶら下げるべきかどうかを指定します。ぶら下げられる区切り記号は行ボックスの外側に配置されれることがあります。",
      "shorthand_property": null,
      "values": {
        "none": "文字のぶら下げを行いません。",
        "first": "要素の最初の書式設定された行頭にある、開き括弧または引用符をぶら下げます。",
        "last": "要素の最後の書式設定された行末にある、閉じ括弧または引用符をぶら下げます。",
        "force-end": "行末の句読点をぶら下げます。",
        "allow-end": "句読点をぶら下げないと行末が揃わない場合に、句読点をぶら下げます。"
      },
      "initial_value": {
        "hanging-punctuation": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/hanging-punctuation",
      "inheritance": true
    },
    {
      "id": 184,
      "name": "height",
      "prefix": null,
      "description": "height は CSS のプロパティで、要素の高さを指定します。既定では、このプロパティはコンテンツ領域の高さを定義します。box-sizing が border-box に設定されていた場合は、 境界領域の高さを定義します。",
      "shorthand_property": null,
      "values": {
        "<length>": "絶対値で高さを定義します。",
        "<percentage>": "包含ブロックの高さのパーセントで高さを定義します。",
        "auto": "指定された要素の高さをブラウザーが計算して決めます。",
        "max-content": "本来の望ましい高さです。",
        "min-content": "本来の最小の高さです。",
        "fit-content(<length-percentage>)": "利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち min(max-content, max(min-content, <length-percentage>)) です。"
      },
      "initial_value": {
        "height": "auto"
      },
      "applies_to": ["非置換インライン要素、テーブルの列、列グループを除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/height",
      "inheritance": false
    },
    {
      "id": 185,
      "name": "hyphenate-character",
      "prefix": null,
      "description": "hyphenate-character は CSS のプロパティで、ハイフンによる改行の前で行末に使用される文字（または文字列）を設定します。\n\n自動ハイフネーション、ソフトハイフネーションのどちらでも、指定された hyphenate-character の値に従って表示されます。",
      "shorthand_property": null,
      "values": {
        "<string>": "<string> で、ハイフンによる改行の前で行末に使用されるものを表します。 使用される文字が長すぎる場合は、ユーザーエージェントが切り落とすことがあります。",
        "auto": "ユーザーエージェントは、内容の言語における書体の規則に基づいて適切な文字列を選択します。 これは既定のプロパティ値であり、明示的に指定する必要があるのは、異なる継承値を上書きする場合のみです。"
      },
      "initial_value": {
        "hyphenate-character": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/hyphenate-character",
      "inheritance": true
    },
    {
      "id": 186,
      "name": "hyphenate-limit-chars",
      "prefix": null,
      "description": "The hyphenate-limit-chars CSS property specifies the minimum word length to allow hyphenation of words as well as the minimum number of characters before and after the hyphen.\n\nThis property provides you with fine-grained control over hyphenation in text. This control enables you to avoid awkward hyphenations and set appropriate hyphenation for different languages, which, in turn, allows for better typography.",
      "shorthand_property": null,
      "values": {
        "x y z": "The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The third value is the minimum number of characters after the hyphen.",
        "x y": "The first value is the minimum word length before words should be hyphenated. The second value is the minimum number of characters before the hyphen. The minimum number of characters after the hyphen will be set equal to the second value.",
        "x": "The value is the minimum word length before words should be hyphenated. The minimum number of characters before and after the hyphen will be set to auto."
      },
      "initial_value": {
        "hyphenate-limit-chars": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/hyphenate-limit-chars",
      "inheritance": true
    },
    {
      "id": 187,
      "name": "hyphens",
      "prefix": null,
      "description": "hyphens は CSS のプロパティで、文字列を複数行にわたって折り返す際に、単語のハイフネーションを行う方法を指定します。ハイフネーションをまったく行わなかったり、手動で指定された位置で文字列のハイフネーションを行ったり、ブラウザーに適切な位置にハイフンを挿入させたりすることができます。",
      "shorthand_property": null,
      "values": {
        "none": "単語内で分割が提案されている文字の位置であっても、改行で単語を分割しません。行はホワイトスペースの位置のみで折り返します。",
        "manual": "単語内で分割が提案されている文字の位置でのみ、行の折り返しで単語を分割します。詳しくは改行候補位置の提案を参照してください。",
        "auto": "ブラウザーは自身が選択した規則に従って、ハイフネーションを行うのに適切な位置で自動的に単語を分割します。しかし、改行候補位置 (改行候補位置の提案を参照) があれば、自動的な改行位置の選択を上書きします。"
      },
      "initial_value": {
        "hyphens": "manual"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/hyphens",
      "inheritance": true
    },
    {
      "id": 188,
      "name": "image-orientation",
      "prefix": "image",
      "description": "image-orientation は CSS のプロパティで、画像の向きのレイアウトに依存しない修正を指定します。",
      "shorthand_property": null,
      "values": {
        "none": "追加の画像の回転を適用しません。画像はエンコードされた方向、または他の CSS プロパティの値で決められた方向になります。",
        "from-image": "既定の初期値です。画像に含まれている EXIF 情報を使用して、画像の向きを適切にします。"
      },
      "initial_value": {
        "image-orientation": "from-image"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/image-orientation",
      "inheritance": true
    },
    {
      "id": 189,
      "name": "image-rendering",
      "prefix": "image",
      "description": "CSS の image-rendering プロパティは、画像を拡大縮小するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。",
      "shorthand_property": null,
      "values": {
        "auto": "拡大縮小のアルゴリズムはユーザーエージェントに依存します。バージョン 1.9 (Firefox 3.0) から、Gecko はバイリニア (bilinear) 再サンプリングを使用します (high-quality)。",
        "crisp-edges": "画像は、画像内のコントラストとエッジを保つアルゴリズムにより拡大縮小されます、画像の処理過程で色の円滑化やぼかしを導入は行いません。最近傍 (nearest neighbor) 法や、 2×SaI や hqx-family のようなその他のスムーズ化が行われない拡大縮小アルゴリズムなどが適しています。この値はブラウザーゲームようなピクセルアート画像を想定しています。",
        "pixelated": "画像を拡大する時は、最近傍 (nearest neighbor) 法が使用され、画像は画像が大きなピクセルで構成されたように表示されます。縮小する時は auto と同じになります。"
      },
      "initial_value": {
        "image-rendering": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/image-rendering",
      "inheritance": true
    },
    {
      "id": 190,
      "name": "inline-size",
      "prefix": null,
      "description": "inline-size は CSS のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは width または height プロパティに相当し、 writing-mode の値によって変わります。\n\n書字方向が垂直方向であった場合、 inline-size の値は要素の高さに対応し、水平方向であった場合は要素の幅に対応します。関連プロパティの block-size が要素のもう一方の寸法を定義します。",
      "shorthand_property": null,
      "values": {
        "inline-size プロパティは、width や height プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inline-size": "auto"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inline-size",
      "inheritance": false
    },
    {
      "id": 191,
      "name": "inset",
      "prefix": "inset",
      "description": "inset は CSS のプロパティで、 top, right, bottom, left に対応する一括指定です。これは margin の一括指定における複数値の場合と同じ構文です。",
      "shorthand_property": [
        "top",
        "right",
        "bottom",
        "left"
      ],
      "values": {
        "inset プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "left": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset",
      "inheritance": false
    },
    {
      "id": 192,
      "name": "inset-block",
      "prefix": "inset",
      "description": "inset-block は CSS のプロパティで、要素におけるブロック方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 top と bottom、または right と left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": [
        "inset-block-end",
        "inset-block-start"
      ],
      "values": {
        "inset-block プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-block-end": "auto",
        "inset-block-start": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-block",
      "inheritance": false
    },
    {
      "id": 193,
      "name": "inset-block-end",
      "prefix": "inset",
      "description": "inset-block-end は CSS のプロパティで、要素における末尾からの論理的なオフセットを定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 top, right, bottom, left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": [
        "inset-block-end",
        "inset-block-start"
      ],
      "values": {
        "inset-block-end プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-block-end": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-block-end",
      "inheritance": false
    },
    {
      "id": 194,
      "name": "inset-block-start",
      "prefix": "inset",
      "description": "inset-block-start は CSS のプロパティで、要素における先頭からの論理的なオフセットを定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 top, right, bottom, left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": null,
      "values": {
        "inset-block-start プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-block-start": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-block-start",
      "inheritance": false
    },
    {
      "id": 194,
      "name": "inset-inline",
      "prefix": "inset",
      "description": "inset-inline は CSS のプロパティで、要素におけるインライン方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 top と bottom、または right と left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": [
        "inset-inline-end",
        "inset-inline-start"
      ],
      "values": {
        "inset-inline プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-inline-end": "auto",
        "inset-inline-start": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-inline",
      "inheritance": false
    },
    {
      "id": 195,
      "name": "inset-inline-end",
      "prefix": "inset",
      "description": "inset-inline-end は CSS のプロパティで、要素における行末からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的なオフセットに対応付けられます。 top, right, bottom, left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": null,
      "values": {
        "inset-inline-end プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-inline-end": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-inline-end",
      "inheritance": false
    },
    {
      "id": 196,
      "name": "inset-inline-start",
      "prefix": "inset",
      "description": "inset-inline-start は CSS のプロパティで、要素における行頭からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的なオフセットに対応付けられます。 top, right, bottom, left のいずれかのプロパティに、 writing-mode, direction, text-orientation で定義された値に従って対応します。",
      "shorthand_property": null,
      "values": {
        "inset-inline-start プロパティは left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "inset-inline-start": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/inset-inline-start",
      "inheritance": false
    },
    {
      "id": 197,
      "name": "isolation",
      "prefix": null,
      "description": "CSS の isolation プロパティは、要素が新しい重ね合わせコンテキストを生成する必要があるかどうかを定義します。",
      "shorthand_property": null,
      "values": {
        "auto": "何れかのプロパティが必要な要素に適用された場合にのみ、新しい重ね合わせコンテキストが作成されます。",
        "isolate": "新しい重ね合わせコンテキストが必ず作成されます。"
      },
      "initial_value": {
        "isolate": "auto"
      },
      "applies_to": ["すべての要素。 SVG では、コンテナー要素、グラフィック要素、グラフィック参照要素に適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/isolation",
      "inheritance": false
    },
    {
      "id": 198,
      "name": "justify-content",
      "prefix": "justify",
      "description": "CSS の justify-content プロパティは、フレックスコンテナーの主軸およびグリッドコンテナーのインライン軸に沿って、中身のアイテムの間や周囲に間隔を配置する方法を定義します。",
      "shorthand_property": null,
      "values": {
        "start": "各アイテムは、主軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。",
        "end": "各アイテムは、主軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。",
        "flex-start": "各アイテムは、フレックスコンテナーの主軸の先頭側を基準に、配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は start のように扱われます。",
        "flex-end": "各アイテムは、フレックスコンテナーの主軸の末尾側を基準に、配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は end のように扱われます。",
        "center": "各アイテムは、主軸方向で配置コンテナーの中央に向けて互いに寄せて配置されます。",
        "left": "アイテムは配置コンテナーの左端に向かって同じ高さに詰められます。プロパティの水平軸がインライン軸と平行でない場合、例えば flex-direction: column; が設定されている場合、この値は start のように動作します。",
        "right": "アイテムは、適切な軸で配置コンテナーの右端に向かって、互いに同じ高さに詰められます。このプロパティの軸が（グリッドコンテナーの）インライン軸や（フレックスボックスコンテナーの）主軸と平行でない場合、この値は start のように動作します。",
        "normal": "stretch として動作します。ただし、column-width が auto でない段組みコンテナーの場合、段はコンテナーいっぱいに引き延ばされるのではなく、指定した column-width の幅を取ります。フレックスコンテナーでは stretch は start として動作するので、normal も start として動作します。",
        "space-between": "各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。",
        "space-around": "各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。",
        "space-evenly": "各アイテムは、配置コンテナーの中で主軸方向に均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。",
        "stretch": "各アイテムの主軸に沿った寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が auto のアイテムは、 max-height/max-width (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、主軸方向の寸法の合計が配置コンテナーを満たすようになります。",
        "safe": "アイテムが配置コンテナーをあふれる場合、そのアイテムは配置モードが start であるかのように配置されます。指定した配置は行われません。",
        "unsafe": "アイテムが配置コンテナーをあふれる場合でも、指定した配置が実行されます。あふれ防止を優先して、希望する配置を行う safe とは異なります。"
      },
      "initial_value": {
        "justify-content": "auto"
      },
      "applies_to": ["フレックスコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/justify-content",
      "inheritance": false
    },
    {
      "id": 199,
      "name": "justify-items",
      "prefix": "justify",
      "description": "CSS の justify-items プロパティは、ボックスのすべてのアイテムに既定の justify-self を定義し、それぞれのボックスの調整を適切な軸に沿って、既定の方法で行ないます。",
      "shorthand_property": null,
      "values": {
        "auto": "使用される値は、ボックスに親があれば、親ボックスの justify-items プロパティ、そうでなければ絶対位置であり、このような場合、 auto は normal を表します。",
        "normal": "このキーワードの効果は、現在のレイアウトモードに依存します。",
        "start": "アイテムは適切な軸で配置コンテナーの末尾側に向かって、互いに接するように詰められます。",
        "end": "アイテムは適切な軸で配置コンテナーの先頭側に向かって、互いに接するように詰められます。",
        "flex-start": "フレックスコンテナーの子ではないアイテムにおいては、この値は start のように扱われます。",
        "flex-end": "フレックスコンテナーの子ではないアイテムにおいては、この値は end のように扱われます。",
        "self-start": "アイテムは適切な軸で、アイテムの先頭側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "self-end": "アイテムは適切な軸で、アイテムの末尾側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "center": "アイテムは配置コンテナーの中央で、互いに接するように詰められます。",
        "left": "アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は start のように動作します。",
        "right": "アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は start のように動作します。",
        "baseline, first baseline, last baseline": "first- または last-baseline 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。 first baseline の代替配置は start、last baseline の代替配置は end です。",
        "stretch": "アイテムの寸法の合計が配置コンテナーの寸法より小さい場合に、寸法が auto であるすべてのアイテムは (比例的にではなく) 均等に引き伸ばされます。ただし、 max-height/max-width (あるいは同等の機能) による制限は尊重します。これにより、寸法の合計が配置コンテナーを主軸に沿って完全に埋めるようになります。",
        "safe": "アイテムの寸法が配置コンテナーをあふれた場合、アイテムは配置モードが start であったかのように配置されます。",
        "unsafe": "アイテムのと配置コンテナーの寸法の関係にかかわらず、指定した値を尊重します。",
        "legacy": "値がボックスの子孫に継承されるようにします。なお、子孫が justify-self: auto の値を持っている場合、 legacy キーワードは子孫からは考慮されず、関連付けられた left, right, center の値のみが継承されます。"
      },
      "initial_value": {
        "justify-items": "legacy"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/justify-items",
      "inheritance": false
    },
    {
      "id": 200,
      "name": "justify-self",
      "prefix": "justify",
      "description": "CSS の justify-self プロパティは、配置コンテナーの適切な軸に沿って内部でボックスの位置合わせをする方法を設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "使用される値は、ボックスに親があれば、親ボックスの justify-items プロパティ、そうでなければ絶対位置であり、このような場合、 auto は normal を表します。",
        "normal": "このキーワードの効果は、現在のレイアウトモードに依存します。",
        "start": "アイテムは適切な軸で配置コンテナーの開始側に向かって、互いに接するように詰められます。",
        "end": "アイテムは適切な軸で配置コンテナーの終端側に向かって、互いに接するように詰められます。",
        "flex-start": "フレックスコンテナーの子ではないアイテムにおいては、この値は start のように扱われます。",
        "flex-end": "フレックスコンテナーの子ではないアイテムにおいては、この値は end のように扱われます。",
        "self-start": "アイテムは適切な軸で、アイテムの先頭側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "self-end": "アイテムは適切な軸で、アイテムの末尾側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "center": "アイテムは配置コンテナーの中央で、互いに接するように詰められます。",
        "left": "アイテムは配置コンテナーの左端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行でない場合は、この値は start のように動作します。",
        "right": "アイテムは配置コンテナーの右端に向かって、互いに接するように詰められます。プロパティの軸がインライン軸に平行ではない場合は、この値は start のように動作します。",
        "baseline, first baseline, last baseline": "first- または last-baseline 配置への参加を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。 first baseline の代替配置は start、last baseline の代替配置は end です。",
        "stretch": "アイテムの寸法の合計が配置コンテナーの寸法より小さい場合に、寸法が auto であるすべてのアイテムは (比例的にではなく) 均等に引き伸ばされます。ただし、 max-height/max-width (あるいは同等の機能) による制限は尊重します。これにより、寸法の合計が配置コンテナーを主軸に沿って完全に埋めるようになります。",
        "safe": "アイテムの寸法が配置コンテナーをあふれた場合、アイテムは配置モードが start であったかのように配置されます。",
        "unsafe": "アイテムのと配置コンテナーの寸法の関係にかかわらず、指定した値を尊重します。",
        "legacy": "値がボックスの子孫に継承されるようにします。なお、子孫が justify-self: auto の値を持っている場合、 legacy キーワードは子孫からは考慮されず、関連付けられた left, right, center の値のみが継承されます。"
      },
      "initial_value": {
        "justify-self": "auto"
      },
      "applies_to": ["block-level boxes, absolutely-positioned boxes, and grid items"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/justify-self",
      "inheritance": false
    },
    {
      "id": 201,
      "name": "left",
      "prefix": null,
      "description": "left は CSS のプロパティで、位置指定要素の水平位置の決定に関与します。位置指定されていない要素には効果はありません。",
      "shorthand_property": null,
      "values": {
        "<length>": "負、null、または正の <length> で、以下のものを表します。",
        "<percentage>": "包含ブロックの幅に対する <percentage> です。",
        "auto": "以下のように指定します。",
        "inherit": "値が親要素 (包含ブロックとは限りません) の計算値と同じであることを示すキーワードです。そして、この計算値は <length>, <percentage>, または auto キーワードと同様に扱われます。"
      },
      "initial_value": {
        "left": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/left",
      "inheritance": false
    },
    {
      "id": 202,
      "name": "letter-spacing",
      "prefix": "line",
      "description": "letter-spacing は CSS のプロパティで、テキストの水平方向の字間のスペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。 letter-spacing が正の値であった場合は、文字と文字の間が開き、 letter-spacing が負の値であった場合は、文字と文字が互いに近づきます。",
      "shorthand_property": null,
      "values": {
        "normal": "現在のフォントでの通常の字間になります。 0 の値とは異なり、この値はユーザーエージェントが文字列を両端揃えするために字間を変えることを許可します。",
        "<length>": "既定の字間に加える字間のスペースを指定します。負の値も指定可能ですが、実装に依存した制限があるかもしれません。ユーザーエージェントは文字列を両端揃えするために、字間スペースをさらに増減させることはありません。"
      },
      "initial_value": {
        "letter-spacing": "normal"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/letter-spacing",
      "inheritance": true
    },
    {
      "id": 203,
      "name": "line-break",
      "prefix": null,
      "description": "line-break は CSS のプロパティで、中国語、日本語、韓国語 (CJK) のテキストにおいて、句読点や記号を用いた場合の改行規則 (禁則処理) を設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "既定の改行規則を使用してテキストを改行します。",
        "loose": "最も制限の少ない改行規則を使用してテキストを改行します。一般的に、新聞などの短い行に使用されます。",
        "normal": "最も一般的な改行規則を使用してテキストを改行します。",
        "strict": "最も厳格な改行規則を使用してテキストを改行します。",
        "anywhere": "句読点や温存された空白、単語の途中も含め、すべての文字の間で折り返しできるようにし、 GL, WJ, ZWJ の文字クラスや、 word-break プロパティでもたらされる折り返しの禁止を一切無視します。どの折り返しの機会も優先されることはありません。ハイフネーションは適用されません。"
      },
      "initial_value": {
        "line-break": "auto"
      },
      "applies_to": ["すべての要素。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/line-break",
      "inheritance": true
    },
    {
      "id": 204,
      "name": "line-height",
      "prefix": "line",
      "description": "line-height は CSS のプロパティで、行ボックスの高さを設定します。これは主にテキストの行間を設定するために使用します。ブロックレベル要素では、要素に含まれる行ボックスの最小の高さを指定します。非置換インライン要素では、行ボックスの高さの計算に使われる高さを指定します。",
      "shorthand_property": null,
      "values": {
        "normal": "ユーザーエージェントに依存します。デスクトップブラウザー (Firefox を含む) は 要素の font-family によって決まる、おおよそ 1.2 という既定値を使います。",
        "<number>": "使用値は、この単位のない <number> に要素のフォントサイズを掛けたものになります。計算値は、指定された <number> と同じです。ほとんどの場合、継承時の予期しない結果を避けるために、これが line-height を設定する好ましい方法です。",
        "<length>": "行ボックスの高さの計算に、指定した <length> が使われます。em の単位で値が与えられると予期しない結果をになることがあります (下記の例を参照してください)。",
        "<percentage>": "要素自身のフォントサイズに対する相対値です。計算値はこの <percentage> に要素のフォントサイズの計算値を掛けたものです。パーセント値は予期しない結果を生む可能性があります (下記の第 2 の例を参照してください)。"
      },
      "initial_value": {
        "line-height": "normal"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/line-height",
      "inheritance": true
    },
    {
      "id": 205,
      "name": "list-style",
      "prefix": "list",
      "description": "list-style は CSS の一括指定プロパティで、リストのすべてのスタイルプロパティを設定します。",
      "shorthand_property": [
        "list-style-image",
        "list-style-position",
        "list-style-type"
      ],
      "values": {
        "list-style-type": "list-style-type を参照して下さい。",
        "list-style-image": "list-style-image を参照して下さい。",
        "list-style-position": "list-style-position を参照して下さい。",
        "none": "リストスタイルは使用されません。"
      },
      "initial_value": {
        "list-style-image": "none",
        "list-style-position": "outside",
        "list-style-type": "disc"
      },
      "applies_to": ["リスト項目"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/list-style",
      "inheritance": true
    },
    {
      "id": 206,
      "name": "list-style-image",
      "prefix": "list",
      "description": "list-style-image は CSS のプロパティで、リスト項目のマーカーとして使われる画像を設定します。\n\nふつうは一括指定の list-style を使ったほうが便利です。",
      "shorthand_property": null,
      "values": {
        "<image>": "マーカーとして使う画像の場所です。",
        "none": "画像をマーカーとして使用しないことを指定します。この値が設定された場合、代わりに list-style-type で定義されたマーカーが使われます。"
      },
      "initial_value": {
        "list-style-image": "none"
      },
      "applies_to": ["リスト項目"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/list-style-image",
      "inheritance": true
    },
    {
      "id": 207,
      "name": "list-style-position",
      "prefix": "list",
      "description": "list-style-position は CSS のプロパティで、リスト項目に対する ::marker の位置を指定します。",
      "shorthand_property": null,
      "values": {
        "inside": "::marker はリスト項目の最初の要素として配置されます。",
        "outside": "::marker は主要ブロックボックスの外に配置されます。"
      },
      "initial_value": {
        "list-style-position": "outside"
      },
      "applies_to": ["リスト項目"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/list-style-position",
      "inheritance": true
    },
    {
      "id": 208,
      "name": "margin",
      "prefix": "margin",
      "description": "margin は CSS のプロパティで、要素の全四辺のマージン領域を設定します。",
      "shorthand_property": [
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left"
      ],
      "values": {
        "<length>": "マージンの寸法を固定値で表したものです。",
        "<percentage>": "マージンの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。",
        "auto": "ブラウザーが適切なマージンを選択して使用します。例えば、要素を中央揃えするためにこの値を使用することもあります。"
      },
      "initial_value": {
        "margin-top": 0,
        "margin-right": 0,
        "margin-bottom": 0,
        "margin-left": 0
      },
      "applies_to": ["table-caption, table, inline-table 以外の表の display 種別を除くすべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin",
      "inheritance": false
    },
    {
      "id": 209,
      "name": "margin-block",
      "prefix": "margin",
      "description": "The margin-block は CSS の一括指定プロパティで、論理的なブロックの先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。",
      "shorthand_property": [
        "margin-block-start",
        "margin-block-end"
      ],
      "values": {
        "margin-block プロパティは、 margin プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-block-start": 0,
        "margin-block-end": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-block",
      "inheritance": false
    },
    {
      "id": 210,
      "name": "margin-block-end",
      "prefix": "margin",
      "description": "margin-block-end は CSS のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "margin-block-end プロパティは margin-left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-block-end": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-block-end",
      "inheritance": false
    },
    {
      "id": 211,
      "name": "margin-block-start",
      "prefix": "margin",
      "description": "margin-block-start は CSS のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "margin-block-start プロパティは margin-left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-block-start": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-block-start",
      "inheritance": false
    },
    {
      "id": 212,
      "name": "margin-bottom",
      "prefix": "margin",
      "description": "margin-bottom は CSS のプロパティで、要素の下側のマージン領域を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。",
      "shorthand_property": null,
      "values": {
        "<length>": "マージンの寸法を固定値で表したものです。",
        "<percentage>": "マージンの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。",
        "auto": "ブラウザ―が適切な値を選択して使用します。 margin を参照してください。"
      },
      "initial_value": {
        "margin-bottom": 0
      },
      "applies_to": ["table-caption, table, inline-table 以外の表の display 種別を除くすべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-bottom",
      "inheritance": false
    },
    {
      "id": 213,
      "name": "margin-inline",
      "prefix": "margin",
      "description": "The margin-inline は CSS の一括指定プロパティで、論理的なインライン方向の先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。",
      "shorthand_property": [
        "margin-inline-start",
        "margin-inline-end"
      ],
      "values": {
        "margin-inline プロパティは、 margin プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-inline-start": 0,
        "margin-inline-end": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-inline",
      "inheritance": false
    },
    {
      "id": 214,
      "name": "margin-inline-end",
      "prefix": "margin",
      "description": "margin-inline-end は CSS のプロパティで、要素のインライン方向の論理的な末尾側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。これは margin-top, margin-right, margin-bottom, margin-left の何れかのプロパティに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "margin-inline-end プロパティは margin-left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-inline-end": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-inline-end",
      "inheritance": false
    },
    {
      "id": 215,
      "name": "margin-inline-start",
      "prefix": "margin",
      "description": "margin-inline-start は CSS のプロパティで、要素のインライン方向の論理的な先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。これは margin-top, margin-right, margin-bottom, margin-left の何れかのプロパティに対応し、どれに対応するかは writing-mode, direction, text-orientation で定義された値によって決まります。",
      "shorthand_property": null,
      "values": {
        "margin-inline-start プロパティは margin-left プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "margin-inline-start": 0
      },
      "applies_to": ["margin と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-inline-start",
      "inheritance": false
    },
    {
      "id": 216,
      "name": "margin-left",
      "prefix": "margin",
      "description": "margin-left は CSS のプロパティで、要素の左側のマージン領域を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。",
      "shorthand_property": null,
      "values": {
        "<length>": "マージンの寸法を固定値で表したものです。",
        "<percentage>": "マージンの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。",
        "auto": "左マージンは未使用の水平方向の余白を共有します。これは主に使用されているレイアウトモードによって決定されます。 margin-left と margin-right の両方が auto の場合は、両方に均等に割り当てられます。それ以外の場合は以下の表のとおりです。"
      },
      "initial_value": {
        "margin-left": 0
      },
      "applies_to": ["table-caption, table, inline-table 以外の表の display 種別を除くすべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-left",
      "inheritance": false
    },
    {
      "id": 217,
      "name": "margin-right",
      "prefix": "margin",
      "description": "margin-right は CSS のプロパティで、要素の右側のマージン領域を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。",
      "shorthand_property": null,
      "values": {
        "<length>": "マージンの寸法を固定値で表したものです。",
        "<percentage>": "マージンの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。",
        "auto": "右マージンは未使用の水平方向の余白を共有します。これは主に使用されているレイアウトモードによって決定されます。 margin-left と margin-right の両方が auto の場合は、両方に均等に割り当てられます。それ以外の場合は以下の表のとおりです。"
      },
      "initial_value": {
        "margin-right": 0
      },
      "applies_to": ["table-caption, table, inline-table 以外の表の display 種別を除くすべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-right",
      "inheritance": false
    },
    {
      "id": 218,
      "name": "margin-top",
      "prefix": "margin",
      "description": "margin-top は CSS のプロパティで、要素の上側のマージン領域を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。",
      "shorthand_property": null,
      "values": {
        "<length>": "マージンの寸法を固定値で表したものです。",
        "<percentage>": "マージンの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。",
        "auto": "ブラウザーが適切な値を選択して使用します。 margin を参照してください。"
      },
      "initial_value": {
        "margin-top": 0
      },
      "applies_to": ["table-caption, table, inline-table 以外の表の display 種別を除くすべての要素。 ::first-letter にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/margin-top",
      "inheritance": false
    },
    {
      "id": 219,
      "name": "mask",
      "prefix": "mask",
      "description": "mask は CSS の一括指定プロパティで、指定された位置での画像のマスクまたは切り取りによって要素を (部分的または全体的に) 隠します。",
      "shorthand_property": [
        "mask-clip",
        "mask-composite",
        "mask-image",
        "mask-mode",
        "mask-origin",
        "mask-position",
        "mask-repeat",
        "mask-size"
      ],
      "values": {
        "<mask-reference>": "マスク画像のソースを設定します。 mask-image を参照してください。",
        "<masking-mode>": "マスク画像のマスクモードを設定します。 mask-mode を参照してください。",
        "<position>": "マスク画像の位置を設定します。 mask-position を参照してください。",
        "<bg-size>": "マスク画像の大きさを設定します。 mask-size を参照してください。",
        "<repeat-style>": "マスク画像の反復を設定します。 mask-repeat を参照してください。",
        "<geometry-box>": "<geometry-box> 値が 1 つのみが与えられた場合は、mask-origin と mask-clip の両方が設定されます。2 つの <geometry-box> 値が存在する場合、1 つ目値は mask-origin を設定し、2 つ目の値は mask-clip を設定します。",
        "<geometry-box> | no-clip": "マスク画像の影響を受ける範囲を設定します。 mask-clip を参照してください。",
        "<compositing-operator>": "現在のマスクレイヤーに使用する合成操作を設定します。 mask-composite を参照してください。"
      },
      "initial_value": {
        "mask-clip": "border-box",
        "mask-composite": "add",
        "mask-image": "none",
        "mask-mode": "match-source",
        "mask-origin": "border-box",
        "mask-position": "0% 0%",
        "mask-repeat": "repeat",
        "mask-size": "auto"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask",
      "inheritance": false
    },
    {
      "id": 220,
      "name": "mask-border",
      "prefix": "mask",
      "description": "mask-border は CSS の一括指定プロパティで、要素の境界の縁に沿ったマスクを生成することができます。",
      "shorthand_property": [
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width"
      ],
      "values": {
        "<'mask-border-source'>": "ソース画像です。mask-border-source を参照してください。",
        "<'mask-border-slice'>": "ソース画像を複数の領域に分割する幅です。mask-border-slice を参照してください。",
        "<'mask-border-width'>": "境界画像の幅です。4 つまでの値を指定することができます。mask-border-width を参照してください。",
        "<'mask-border-outset'>": "要素の外側の辺から境界画像までの距離です。4 つまでの値を指定することができます。mask-border-outset を参照してください。",
        "<'mask-border-repeat'>": "ソース画像の辺の領域を、境界マスクの幅に合わせて調整する方法を定義します。2 つまでの値を指定することができます。mask-border-repeat を参照してください。",
        "<'mask-border-mode'>": "ソース画像を輝度マスクとして扱うか、アルファマスクとして扱うかを定義します。mask-border-mode を参照してください。"
      },
      "initial_value": {
        "mask-border-mode": "alpha",
        "mask-border-outset": 0,
        "mask-border-repeat": "stretch",
        "mask-border-slice": 0,
        "mask-border-source": "none",
        "mask-border-width": "auto"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border",
      "inheritance": false
    },
    {
      "id": 221,
      "name": "mask-border-mode",
      "prefix": "mask",
      "description": "mask-border-mode は CSS のプロパティで、マスク境界の混合モードを指定します。",
      "shorthand_property": [
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width"
      ],
      "values": {
        "luminance": "マスク境界画像の輝度値がマスク値として使用されます。",
        "alpha": "マスク境界画像のアルファ値がマスク値として使用されます。"
      },
      "initial_value": {
        "mask-border-mode": "alpha"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-mode",
      "inheritance": false
    },
    {
      "id": 222,
      "name": "mask-border-outset",
      "prefix": "mask",
      "description": "mask-border-outset は CSS のプロパティで、要素のマスク境界の境界ボックスからの距離を指定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "マスク境界の辺からの距離を長さで表します。",
        "<number>": "マスク境界の辺からの距離を、対応する border-width の倍数で表します。"
      },
      "initial_value": {
        "mask-border-outset": 0
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-outset",
      "inheritance": false
    },
    {
      "id": 223,
      "name": "mask-border-repeat",
      "prefix": "mask",
      "description": "mask-border-repeat は CSS のプロパティで、どのように元の画像の辺の領域を要素のマスク境界の寸法に合うように調整するかを設定します。",
      "shorthand_property": null,
      "values": {
        "stretch": "元の画像の辺の領域は、それぞれの境界の間の溝を埋めるように引き伸ばされます。",
        "repeat": "元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように切り取られることがあります。",
        "round": "元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように引き伸ばされることがあります。",
        "space": "元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。正しく合うように間隔が配布されることがあります。"
      },
      "initial_value": {
        "mask-border-repeat": "stretch"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-repeat",
      "inheritance": false
    },
    {
      "id": 224,
      "name": "mask-border-slice",
      "prefix": "mask",
      "description": "mask-border-slice は CSS のプロパティで、mask-border-source で設定された画像を複数の領域に分割します。これらの領域は要素のマスク境界の部品を構成するために使用されます。",
      "shorthand_property": null,
      "values": {
        "<number>": "縁からのオフセットを、ラスター画像の場合はピクセル数で、ベクター画像の場合は座標で表します。ベクター画像の場合、数値は元の画像の寸法ではなく、要素の寸法に対する相対値になるので、この場合は一般にパーセント値の方が適しています。",
        "<percentage>": "縁からのオフセットを、元の画像の寸法、つまり水平方向のオフセットであれば画像の幅、垂直方向のオフセットであれば画像の高さに対するパーセント値で表します。",
        "fill": "中央の画像領域を維持します。幅と高さは、画像領域のそれぞれ上と左に一致するように拡縮されます。"
      },
      "initial_value": {
        "mask-border-slice": 0
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-slice",
      "inheritance": false
    },
    {
      "id": 225,
      "name": "mask-border-source",
      "prefix": "mask",
      "description": "mask-border-source は CSS のプロパティで、要素のマスク境界を生成するのに使われる元の画像を設定します。\n\nmask-border-slice プロパティは、元の画像を最終的なマスク境界に動的に適用する上で、複数の領域に分割するために使用されます。",
      "shorthand_property": null,
      "values": {
        "none": "マスク境界は使用されません。",
        "<image>": "マスク境界に使用する画像への参照です。"
      },
      "initial_value": {
        "mask-border-source": "none"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-source",
      "inheritance": false
    },
    {
      "id": 226,
      "name": "mask-border-width",
      "prefix": "mask",
      "description": "mask-border-width は CSS のプロパティで、要素のマスク境界の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "マスク境界の幅を、 <length> または <percentage> で指定します。パーセント値は左右のオフセットについては境界領域の幅に対する相対値、上下のオフセットについては境界領域の高さに対する相対値です。負の数であってはなりません。",
        "<number>": "マスク境界の幅を、対応する border-width の倍数で指定します。負の数であってはなりません。",
        "auto": "マスク境界の幅は、対応する mask-border-slice の固有の幅または高さ (適切な方) と等しくなります。画像が要求された固有の寸法を持っていない場合は、対応する border-width が代わりに使用されます。"
      },
      "initial_value": {
        "mask-border-width": "auto"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-border-width",
      "inheritance": false
    },
    {
      "id": 227,
      "name": "mask-clip",
      "prefix": "mask",
      "description": "mask-clip は CSS のプロパティで、マスクが影響する領域を指定します。要素の描画されるコンテンツはこの領域に制限されます。",
      "shorthand_property": null,
      "values": {
        "content-box": "描画されるコンテンツは、コンテンツボックスで切り取られます。",
        "padding-box": "描画されるコンテンツは、パディングボックスで切り取られます。",
        "border-box": "描画されるコンテンツは、境界ボックスで切り取られます。",
        "margin-box": "描画されるコンテンツは、マージンボックスで切り取られます。",
        "fill-box": "描画されるコンテンツは、オブジェクトの囲みボックスで切り取られます。",
        "stroke-box": "描画されるコンテンツは、オブジェクトの輪郭線ボックスで切り取られます。",
        "view-box": "直近の SVG ビューポートを参照ボックスとして使用します。 viewBox 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは viewBox 属性で示された座標系の原点に配置され、参照ボックスの寸法は viewBox 属性の幅と高さに設定されます。",
        "no-clip": "描画されるコンテンツは切り取られません。"
      },
      "initial_value": {
        "mask-clip": "border-box"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-clip",
      "inheritance": false
    },
    {
      "id": 228,
      "name": "mask-composite",
      "prefix": "mask",
      "description": "mask-composite は CSS のプロパティで、現在のマスクレイヤーとその下のマスクレイヤーとの間で使われる合成操作を表します。",
      "shorthand_property": null,
      "values": {
        "add": "source が destination の上に配置されます。",
        "subtract": "destination の外側に source が配置されます。",
        "intersect": "destination と重なっている source の部分が destination を置き換えます。",
        "exclude": "source と destination で重なっていない領域が結合されます。"
      },
      "initial_value": {
        "mask-composite": "add"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-composite",
      "inheritance": false
    },
    {
      "id": 229,
      "name": "mask-image",
      "prefix": "mask",
      "description": "mask-image は CSS のプロパティで、要素のマスクレイヤーとして使用される画像を設定します。 既定では、マスク画像のアルファチャンネルと要素のアルファチャンネルが乗算されることになります。これは mask-mode プロパティで制御することができます。",
      "shorthand_property": null,
      "values": {
        "none": "このキーワードは、透明な黒い画像レイヤーとして解釈されます。",
        "<mask-source>": "url() による <mask> または CSS 画像への参照です。",
        "<image>": "マスク画像レイヤーとして使用される画像の値です。"
      },
      "initial_value": {
        "mask-image": "none"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-image",
      "inheritance": false
    },
    {
      "id": 230,
      "name": "mask-mode",
      "prefix": "mask",
      "description": "mask-mode は CSS のプロパティで、 mask-image で定義されたマスクを、輝度とアルファマスクのどちらで扱うかを設定します。",
      "shorthand_property": null,
      "values": {
        "alpha": "このキーワードは、マスクレイヤーの透過性 (アルファチャンネル) の値をマスクの値として使用することを示します。",
        "luminance": "このキーワードは、マスクレイヤーの輝度の値をマスクの値として使用することを示します。",
        "match-source": "mask-image プロパティが <mask-source> 型であれば、マスクレイヤー画像の輝度の値がマスクの値として使用されます。\n\n<image> 型であれば、マスクレイヤー画像のアルファ値がマスクの値として使用されます。"
      },
      "initial_value": {
        "mask-mode": "match-source"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-mode",
      "inheritance": false
    },
    {
      "id": 231,
      "name": "mask-origin",
      "prefix": "mask",
      "description": "mask-origin は CSS のプロパティで、マスクの原点を設定します。",
      "shorthand_property": null,
      "values": {
        "content-box": "位置がコンテンツボックスからの相対位置になります。",
        "padding-box": "位置がパディングボックスからの相対位置になります。単純なボックスでは 0 0 がパディング辺の左上隅で、 100% 100% は右下隅です。",
        "border-box": "位置が境界ボックスからの相対位置になります。",
        "margin-box": "位置がマージンボックスからの相対位置になります。",
        "fill-box": "位置がオブジェクトの囲みボックスからの相対位置になります。",
        "stroke-box": "位置が輪郭線ボックスからの相対位置になります。",
        "view-box": "直近の SVG ビューポートを参照ボックスとして使用します。 viewBox 属性が SVG ビューポートを作成している要素に指定されると、参照ボックスは viewBox 属性で示された座標系の原点に配置され、参照ボックスの寸法は viewBox 属性の幅と高さに設定されます。"
      },
      "initial_value": {
        "mask-origin": "border-box"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-origin",
      "inheritance": false
    },
    {
      "id": 232,
      "name": "mask-position",
      "prefix": "mask",
      "description": "mask-position は CSS プロパティで、定義されたマスク画像それぞれについて、 mask-origin で設定されたマスク位置レイヤーに対する初期位置を設定します。",
      "shorthand_property": null,
      "values": {
        "<position>": "要素ボックスの辺からの二次元の位置を表す 1 つから 4 つの値です。相対または絶対オフセットを与えることができます。なお、位置は要素ボックスの外に設定することができます。"
      },
      "initial_value": {
        "mask-position": "0% 0%"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-position",
      "inheritance": false
    },
    {
      "id": 233,
      "name": "mask-repeat",
      "prefix": "mask",
      "description": "mask-repeat は CSS プロパティで、マスク画像をどのように繰り返すかを設定します。マスク画像は水平軸、垂直軸、両方の軸で繰り返すか、まったく繰り返さないようにすることができます。",
      "shorthand_property": null,
      "values": {
        "<repeat-style>": "単一の値の構文は、2 つの値の構文の一括指定です。"
      },
      "initial_value": {
        "mask-repeat": "repeat"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-repeat",
      "inheritance": false
    },
    {
      "id": 234,
      "name": "mask-size",
      "prefix": "mask",
      "description": "mask-size は CSS のプロパティで、マスク画像の寸法を指定します。内在的な比率を維持するために、画像のサイズは完全または部分的に制約されることがあります。",
      "shorthand_property": null,
      "values": {
        "<length>": "<length> の値は、マスク画像の対応する軸を、指定された長さに拡大縮小します。負の長さは許可されていません。",
        "<percentage>": "<percentage> の値は、マスク画像の対応する軸を、mask-origin の値で決定されるマスク配置領域に対する指定されたパーセント値に拡大縮小します。マスク配置領域は、既定では、ボックスのコンテンツとそのパディングを含む領域ですが、コンテンツのみの領域や、境界、パディング、コンテンツを含む領域に変更することもできます。負のパーセント値は許されません。",
        "auto": "マスク画像の対応する軸を、固有の比率を維持するように拡大縮小するキーワードです。",
        "contain": "画像を可能な限り大きく拡大し、画像のアスペクト比を維持する (画像がゆがまない) ようにするキーワードです。画像はコンテナー内でレターボックスになります。画像は、mask-position のような他のプロパティで上書きされない限り、自動的に中央に配置されます。",
        "cover": "contain の逆バージョンのキーワードです。画像を可能な限り大きく拡大縮小し、画像のアスペクト比を維持する (画像がゆがまない) ようにします。画像は、コンテナーの幅または高さ全体を「カバー」します。画像とコンテナーの寸法が異なる場合、画像は左右または上下のいずれかで切り取られます。"
      },
      "initial_value": {
        "mask-size": "auto"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-size",
      "inheritance": false
    },
    {
      "id": 235,
      "name": "mask-type",
      "prefix": "mask",
      "description": "mask-type は CSS のプロパティで、 SVG の <mask> 要素を輝度マスクとアルファマスクのどちらとして扱うかを設定します。これは <mask> 要素自身に設定します。",
      "shorthand_property": null,
      "values": {
        "luminance": "関連付けられたマスク画像が輝度マスクであることを示すキーワードです。すなわち、適用時に相対輝度値が使用されます。",
        "alpha": "関連付けられたマスク画像がアルファマスクであることを示すキーワードです。すなわち、適用時にアルファチャネル値が使用されます。"
      },
      "initial_value": {
        "mask-type": "luminance"
      },
      "applies_to": ["すべての要素。 SVG の場合は defs 要素やすべてのグラフィック要素を除いたコンテナー要素に適用される"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mask-type",
      "inheritance": false
    },
    {
      "id": 236,
      "name": "math-depth",
      "prefix": "math",
      "description": "math-depth プロパティは、数式の各要素について、その数式の最上位コンテナーに対する 深さ の概念を記述します。これは、 font-size: math が適用されたとき、要素の font-size の計算値を調整するために使用されます。",
      "shorthand_property": null,
      "values": {
        "auto-add": "継承された math-style が compact の場合、継承された math-depth に 1 を足した値を設定します。",
        "add": "継承された math-depth に指定した整数を足した値に設定します。",
        "<integer>": "指定された整数に設定します。"
      },
      "initial_value": {
        "math-depth": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/math-depth",
      "inheritance": false
    },
    {
      "id": 237,
      "name": "math-style",
      "prefix": "math",
      "description": "math-style プロパティは、 MathML の数式を通常の高さで表示するか、コンパクトな高さで表示するかを指定します。",
      "shorthand_property": null,
      "values": {
        "normal": "初期値であり、通常のレンダリングを示します。",
        "compact": "子孫の数式のレイアウトの論理高を最小化しようとします。"
      },
      "initial_value": {
        "math-style": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/math-style",
      "inheritance": false
    },
    {
      "id": 238,
      "name": "max-block-size",
      "prefix": "max",
      "description": "max-block-size は CSS のプロパティで、 writing-mode で指定された書字方向とは逆の向きの要素の最大寸法を指定します。すなわち、書字方向が水平 (横書き) であれば、 max-block-size は max-height と等価になります。書字方向が垂直 (縦書き) であれば、 max-block-size は max-width と同じになります。\n\nもう一方の方向の最大長は、 max-inline-size プロパティを使用して指定します。\n\nmax-width は常に水平方向の寸法に使われ、 max-height は常に垂直方向の寸法に使われるため、このプロパティはテキストコンテンツの寸法に基づいて寸法を設定する必要がある場合、書字方向を意識して指定する必要がある場合に便利です。\n\nふつう max-height または max-width を使用する場面でいつでも、代わりに max-block-size をコンテンツの最大の「高さ」を設定するために使用し (これは垂直の値ではない可能性がありますが)、 max-inline-sizeをコンテンツの最大の「幅」を設定するために使用してください (これが横書きではなく縦書きである場合であっても)。様々な書字方向を表す writing-mode の 例をご覧ください。",
      "shorthand_property": null,
      "values": {
        "<length>": "max-block-size を絶対的な値で定義します。",
        "<percentage>": "max-block-size を包含ブロックの幅に対するパーセント値で定義します。",
        "none": "ボックスの寸法を制限しません。",
        "max-content": "内容物が推奨する max-block-size です。",
        "min-content": "内容物の最小の max-block-size です。",
        "fit-content(<length-percentage>)": "利用可能な空白を指定された引数で置き換えた fit-content 式を使用します。すなわち、 min(max-content, max(min-content, 引数)) です。"
      },
      "initial_value": {
        "max-block-size": "none"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/max-block-size",
      "inheritance": false
    },
    {
      "id": 239,
      "name": "max-height",
      "prefix": "max",
      "description": "max-height は CSS のプロパティで、要素の最大高を設定します。これは height プロパティの使用値が、 max-height に指定した値を上回ることを防ぎます。",
      "shorthand_property": null,
      "values": {
        "<length>": "max-height を絶対的な値で定義します",
        "<percentage>": "max-height を包含ブロックの高さに対するパーセント値で定義します。",
        "none": "ボックスの寸法を制限しません。",
        "max-content": "内容物が推奨する max-height です。",
        "min-content": "内容物の最小の max-height です。",
        "fit-content(<length-percentage>)": "利用可能な空白を指定された引数で置き換えた fit-content 式を使用します。すなわち、 min(max-content, max(min-content, 引数)) です。"
      },
      "initial_value": {
        "max-height": "none"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/max-height",
      "inheritance": false
    },
    {
      "id": 240,
      "name": "max-inline-size",
      "prefix": "max",
      "description": "max-inline-size は CSS のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最大の寸法を定義します。これは max-width または max-height のどちらかのプロパティと、 writing-mode の値に応じて対応します。\n\n書字方向が垂直方向であった場合、 max-inline-size の値は要素の最大の高さに対応します。そうでなければ、要素の最大幅に対応します。関連プロパティとして、 max-block-size が要素のもう一方の寸法を定義します。",
      "shorthand_property": null,
      "values": {
        "max-inline-size プロパティは max-width および max-height の各プロパティと同じ値を取ります。": null
      },
      "initial_value": {
        "max-inline-size": "none"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/max-inline-size",
      "inheritance": false
    },
    {
      "id": 241,
      "name": "max-width",
      "prefix": "max",
      "description": "max-width は CSS のプロパティで、要素の最大幅を設定します。これは width プロパティの使用値が、 max-width で指定した値を上回ることを防ぎます。",
      "shorthand_property": null,
      "values": {
        "<length>": "max-width を絶対的な値で定義します。",
        "<percentage>": "max-width を包含ブロックの幅に対するパーセント値で定義します。",
        "none": "ボックスの寸法を制限しません。",
        "max-content": "内容物が推奨する max-width です。",
        "min-content": "内容物の最小の max-width です。",
        "fit-content(<length-percentage>)": "利用可能な空白を指定された引数で置き換えた fit-content 式を使用します。すなわち、 min(max-content, max(min-content, 引数)) です。"
      },
      "initial_value": {
        "max-width": "none"
      },
      "applies_to": ["置換要素でないインライン要素、テーブルの行、行グループを除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/max-width",
      "inheritance": false
    },
    {
      "id": 242,
      "name": "min-block-size",
      "prefix": "min",
      "description": "min-block-size は CSS のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは min-width または min-height のどちらかのプロパティと、 writing-mode の値に応じて対応します。\n\n書字方向が垂直方向であった場合、 min-block-size の値は要素の最小幅に対応します。そうでなければ、要素の最小の高さに対応します。関連プロパティの min-inline-size が要素のもう一方の寸法を定義します。",
      "shorthand_property": null,
      "values": {
        "min-block-size": "min-width および min-height の各プロパティと同じ値を取ります。"
      },
      "initial_value": {
        "min-block-size": 0
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/min-block-size",
      "inheritance": false
    },
    {
      "id": 243,
      "name": "min-height",
      "prefix": "min",
      "description": "min-height は CSS のプロパティで、要素の最小高を設定します。これは height プロパティの使用値が、min-height で指定した値を下回ることを防ぎます。",
      "shorthand_property": null,
      "values": {
        "<length>": "min-height を絶対的な値で定義します。",
        "<percentage>": "min-height を包含ブロックの高さに対するパーセント値で定義します。",
        "auto": "ブラウザーが指定された要素の min-height を計算して選択します。",
        "max-content": "内容物が推奨する min-height です。",
        "min-content": "内容物の最小の min-height です。",
        "fit-content(<length-percentage>)": "利用可能な空白を指定された引数で置き換えた fit-content 式を使用します。すなわち、 min(max-content, max(min-content, 引数)) です。"
      },
      "initial_value": {
        "min-height": "auto"
      },
      "applies_to": ["非置換インライン要素、テーブルの列、列グループを除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/min-height",
      "inheritance": false
    },
    {
      "id": 244,
      "name": "min-inline-size",
      "prefix": "min",
      "description": "min-inline-size は CSS のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは min-width または min-height のどちらかのプロパティと、 writing-mode の値に応じて対応します。",
      "shorthand_property": null,
      "values": {
        "min-inline-size": "min-width および min-height の各プロパティと同じ値を取ります。"
      },
      "initial_value": {
        "min-inline-size": 0
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/min-inline-size",
      "inheritance": false
    },
    {
      "id": 245,
      "name": "min-width",
      "prefix": "min",
      "description": "min-width は CSS のプロパティで、要素の最小幅を設定します。これは width プロパティの使用値が、min-width で指定した値を下回ることを防ぎます。",
      "shorthand_property": null,
      "values": {
        "<length>": "min-width を絶対的な値で定義します。",
        "<percentage>": "min-width を包含ブロックの高さに対するパーセント値で定義します。",
        "auto": "ブラウザーが指定された要素の min-width を計算して選択します。",
        "max-content": "内容物が推奨する min-width です。",
        "min-content": "内容物の最小の min-width です。",
        "fit-content(<length-percentage>)": "利用可能な空白を指定された引数で置き換えた fit-content 式を使用します。すなわち、 min(max-content, max(min-content, 引数)) です。"
      },
      "initial_value": {
        "min-width": "auto"
      },
      "applies_to": ["width および height と同じ"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/min-width",
      "inheritance": false
    },
    {
      "id": 246,
      "name": "mix-blend-mode",
      "prefix": null,
      "description": "mix-blend-mode は CSS のプロパティで、要素の内容物と親要素の内容物や要素の背景をどのように混合するかを設定します。",
      "shorthand_property": null,
      "values": {
        "<blend-mode>": "適用する混合モードを表す <blend-mode> です。"
      },
      "initial_value": {
        "mix-blend-mode": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/mix-blend-mode",
      "inheritance": false
    },
    {
      "id": 247,
      "name": "object-fit",
      "prefix": null,
      "description": "CSS の object-fit プロパティは、置換要素、例えば <img> や <video> などの中身を、コンテナーにどのようにはめ込むかを設定します。\n\n要素のボックス内における置換要素の中身のオブジェクトの配置を変更するには、 object-position プロパティを使用することができます。",
      "shorthand_property": null,
      "values": {
        "contain": "置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックスに収まるように拡大縮小されます。オブジェクト全体がボックス内に表示され、アスペクト比が維持されるので、オブジェクトのアスペクト比とボックスのアスペクト比が合わない場合は、レターボックス表示になります。",
        "cover": "置換コンテンツはアスペクト比を維持したまま、要素のコンテンツボックス全体を埋めるように拡大縮小されます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトの方が合うように切り取られます。",
        "fill": "置換コンテンツは、要素のコンテンツボックス全体を埋めるサイズになります。オブジェクト全体が完全にボックスの中を埋めます。オブジェクトのアスペクト比がボックスのアスペクト比と合わない場合は、オブジェクトは合うように引き伸ばされます。",
        "none": "置換コンテンツは、拡大縮小されません。",
        "scale-down": "コンテンツは none または contain を指定したかのようにサイズが決められ、オブジェクトの実際のサイズが小さいほうを採用します。"
      },
      "initial_value": {
        "object-fit": "fill"
      },
      "applies_to": ["置換要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/object-fit",
      "inheritance": false
    },
    {
      "id": 248,
      "name": "object-position",
      "prefix": null,
      "description": "object-position は CSS のプロパティで、ボックス内における置換要素の中身の配置を指定します。ボックスの領域内で置換要素のオブジェクトに覆われていない部分は、要素の背景が表示されます。\n\n置換要素のオブジェクトの内在サイズ（すなわち、自然なサイズ）を、その要素のボックス内に合わせる方法を調整するために、object-fit プロパティを使用することができます。",
      "shorthand_property": null,
      "values": {
        "<position>": "要素のボックスの端に対する 2D 上の位置を表す、1 個から 4 個の値です。相対値または絶対値のオフセットを指定できます。"
      },
      "initial_value": {
        "object-position": "50% 50%"
      },
      "applies_to": ["置換要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/object-position",
      "inheritance": false
    },
    {
      "id": 249,
      "name": "offset",
      "prefix": "offset",
      "description": "offset は CSS の一括指定プロパティで、要素を定義された経路に沿って動かすのに必要なすべてのプロパティを設定します。",
      "shorthand_property": [
        "offset-anchor",
        "offset-distance",
        "offset-path",
        "offset-position",
        "offset-rotate"
      ],
      "values": {
        "offset-anchor": "offset-anchorを参照",
        "offset-distance": "offset-distanceを参照",
        "offset-path": "offset-pathを参照",
        "offset-position": "offset-positionを参照",
        "offset-rotate": "offset-rotateを参照"
      },
      "initial_value": {
        "offset-anchor": "auto",
        "offset-distance": 0,
        "offset-path": "none",
        "offset-position": "normal",
        "offset-rotate": "auto"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset",
      "inheritance": false
    },
    {
      "id": 250,
      "name": "offset-anchor",
      "prefix": "offset",
      "description": "offset-anchor は CSS のプロパティで、 offset-path に沿って実際に移動している要素のボックス内の点を指定します。",
      "shorthand_property": [
        "offset-anchor",
        "offset-distance",
        "offset-path",
        "offset-position",
        "offset-rotate"
      ],
      "values": {
        "auto": "offset-anchor には要素の transform-origin と同じ値が与えられます。ただし、 offset-path が none の場合は offset-position から値が取得されます。",
        "<position>": "<position> は x/y 座標を定義し、要素のボックスの端から相対的に項目を配置するために使用されます。これは、 1 つから 4 つの値を用いて定義することができます。詳細については、<position> と background-position のリファレンスページを参照してください。 3 つの値を持つ position構 文は、background(-position)を除いて、<position>のどのような使い方でも機能しないことに注意してください。"
      },
      "initial_value": {
        "offset-anchor": "auto"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset-anchor",
      "inheritance": false
    },
    {
      "id": 251,
      "name": "offset-distance",
      "prefix": "offset",
      "description": "offset-distance は CSS プロパティで、 offset-path 上の要素を配置する位置を指定します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "要素が (offset-path で定義された) パス上のどのくらいの距離にあるかを指定する長さです。\n\n100% はパスの全長を表します。 (offset-path が基本シェイプまたは path() として定義されている場合)。"
      },
      "initial_value": {
        "offset-distance": 0
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset-distance",
      "inheritance": false
    },
    {
      "id": 252,
      "name": "offset-path",
      "prefix": "offset",
      "description": "offset-path は CSS のプロパティで、要素がたどる移動経路と、親コンテナーまたは SVG 座標系の中での要素の配置を指定します。",
      "shorthand_property": null,
      "values": {
        "ray()": "最大 3 つの値を取り、ボックスの位置から始まり、指定された角度で定義された方向に進む線分であるパスを定義します。定義は角度で、 CSS のグラデーションの角度と同様に、 0deg を上にして正の角度を時計回り方向に増加させます。続く寸法の値は CSS の半径方向のグラデーションの寸法の値に似ており、 closest-side から farthest-corner まで、そしてキーワード contain です。",
        "url()": "SVG 図形の ID の参照です。 — circle, ellipse, line, path, polygon, polyline, rect — のいずれかで、図形の形状をパスとして使用します。",
        "<basic-shape>": "CSS シェイプ、たとえば circle(), ellipse(), inset(), polygon(), path() を指定します。",
        "none": "モーションパスを全く定義しません。"
      },
      "initial_value": {
        "offset-path": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset-path",
      "inheritance": false
    },
    {
      "id": 253,
      "name": "offset-position",
      "prefix": "offset",
      "description": "offset-position は CSS のプロパティで、 offset-path の初期位置を定義します。",
      "shorthand_property": null,
      "values": {
        "auto": "初期位置は position プロパティで指定されたボックスの位置です。",
        "<position>": "<position> です。位置は x/y 座標を定義し、要素のボックスの辺から相対的にアイテムを配置します。 1 つから 4 つの値を使って定義することができます。キーワード以外の値を 2 つ指定した場合、 1 つ目の値は水平方向の位置を、 2 つ目の値は垂直方向の位置を表します。 1 つの値のみを指定した場合は、 2 番目の値は center とみなされます。 3 つまたは 4 つの値が使用される場合、長さとパーセントの値は、前のキーワード値からのオフセットとなります。これらの値タイプの詳細については、 background-position を参照してください。"
      },
      "initial_value": {
        "offset-position": "normal"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset-position",
      "inheritance": false
    },
    {
      "id": 254,
      "name": "offset-rotate",
      "prefix": "offset",
      "description": "offset-rotate は CSS のプロパティで、要素が offset-path に沿って配置された場合の向き/方向を定義します。",
      "shorthand_property": null,
      "values": {
        "auto": "要素は正方向の X 軸から見た offset-path 方向の角度で回転します。これが既定値です。",
        "<angle>": "要素は指定された回転角によって、時計方向に固定値で回転変換されます。",
        "auto <angle>": "auto に <angle> が続いた場合、その角度が auto の計算値に加算されます。",
        "reverse": "要素は auto と同様に回転しますが、反対方向を向きます。 auto 180deg の値を指定したのと同等です。"
      },
      "initial_value": {
        "offset-rotate": "auto"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/offset-rotate",
      "inheritance": false
    },
    {
      "id": 255,
      "name": "opacity",
      "prefix": null,
      "description": "opacity は CSS のプロパティで、要素の不透明度を設定します。不透明度は要素の裏にあるコンテンツが隠れる度合いであり、透明度の逆です。",
      "shorthand_property": null,
      "values": {
        "<alpha-value>": "<number> を 0.0 以上 1.0 以下で、また <percentage> を 0% 以上 100% 以下で、チャネルの不透明度（つまり、アルファチャネルの値）を表します。範囲外の数値も有効ですが、近い方の限界値に丸められます。"
      },
      "initial_value": {
        "opacity": 1
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/opacity",
      "inheritance": false
    },
    {
      "id": 256,
      "name": "order",
      "prefix": null,
      "description": "order は CSS のプロパティで、フレックスコンテナーやグリッドコンテナーの中で、アイテムを並べる順序を設定します。コンテナー内のアイテムは order の値の昇順に配置され、さらにソースコード内の順序で配置されます。",
      "shorthand_property": null,
      "values": {
        "<integer>": "アイテムが割り当てられる順序グループを表します。"
      },
      "initial_value": {
        "order": 0
      },
      "applies_to": ["フレックスアイテム、グリッドアイテム、フレックスおよびグリッドコンテナーの絶対位置指定の子"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/order",
      "inheritance": false
    },
    {
      "id": 257,
      "name": "orphans",
      "prefix": null,
      "description": "orphans は CSS のプロパティで、ページ、領域、段の最下部に表示されるブロックコンテナーの最小行数を設定します。",
      "shorthand_property": null,
      "values": {
        "<integer>": "区切りの前の新しい断片の末尾に残すことができる最小行数です。値は正の数である必要があります。"
      },
      "initial_value": {
        "orphans": 2
      },
      "applies_to": ["ブロックコンテナー要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/orphans",
      "inheritance": true
    },
    {
      "id": 258,
      "name": "outline",
      "prefix": "outline",
      "description": "outline は CSS の一括指定プロパティで、輪郭線 (outline) に関する大部分のプロパティを単一の宣言で設定します。",
      "shorthand_property": [
        "outline-color",
        "outline-style",
        "outline-width"
      ],
      "values": {
        "<'outline-color'>": "輪郭線の色を設定します。既定値は、対応しているブラウザーでは invert で、それ以外では currentcolor です。 outline-color を参照してください。",
        "<'outline-style'>": "輪郭線の種類を設定します。未指定の場合の既定値は none です。 outline-style を参照してください。",
        "<'outline-width'>": "輪郭線の太さを設定します。未指定の場合の既定値は medium です。 outline-width を参照してください。"
      },
      "initial_value": {
        "outline-color": "auto",
        "outline-style": "none",
        "outline-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/outline",
      "inheritance": false
    },
    {
      "id": 259,
      "name": "outline-color",
      "prefix": "outline",
      "description": "outline-color は CSS のプロパティで、要素の輪郭線の色を設定します。",
      "shorthand_property": null,
      "values": {
        "<color>": "輪郭線の色で、<color> で指定します。"
      },
      "initial_value": {
        "outline-color": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/outline-color",
      "inheritance": false
    },
    {
      "id": 260,
      "name": "outline-offset",
      "prefix": "outline",
      "description": "CSS の outline-offset プロパティは、要素の辺や境界線と輪郭線との空間の量を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "要素とその輪郭線との空間の幅です。負の値を指定すると輪郭線は要素の内側に表示されます。 0 を指定すると輪郭線は要素との隙間を置かずに表示されます。"
      },
      "initial_value": {
        "outline-offset": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/outline-offset",
      "inheritance": false
    },
    {
      "id": 261,
      "name": "outline-style",
      "prefix": "outline",
      "description": "CSS の outline-style プロパティは、要素の輪郭線のスタイルを設定します。輪郭線とは要素の周りに描かれる線のことで、 border よりも外側です。",
      "shorthand_property": null,
      "values": {
        "auto": "ユーザーエージェントに輪郭線の描画を任せます。",
        "none": "輪郭線を描きません。outline-width は 0 です。",
        "dotted": "点線の輪郭線です。",
        "dashed": "破線の輪郭線です。",
        "solid": "1 本の実線の輪郭線です。",
        "double": "2 本の実線の輪郭線です。outline-width は 2 本の線とその隙間の合計です。",
        "groove": "ページに刻まれたかのように見える輪郭線です。",
        "ridge": "groove の逆で、ページから押し出されたように見える輪郭線です。",
        "inset": "領域がページに埋め込まれたかのように見える輪郭線です。",
        "outset": "inset の逆で、領域がページから隆起しているように見える輪郭線です。"
      },
      "initial_value": {
        "outline-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/outline-style",
      "inheritance": false
    },
    {
      "id": 262,
      "name": "outline-width",
      "prefix": "outline",
      "description": "CSS の outline-width プロパティは、要素の輪郭線の太さを設定します。輪郭線とは要素の周りに描かれる線のことで、 border よりも外側です。",
      "shorthand_property": null,
      "values": {
        "<length>": "輪郭線の太さを <length> で指定します。",
        "thin": "ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は 1px です。",
        "medium": "ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は 3px です。",
        "thick": "ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は 5px です。"
      },
      "initial_value": {
        "outline-width": "medium"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/outline-width",
      "inheritance": false
    },
    {
      "id": 263,
      "name": "overflow",
      "prefix": "overflow",
      "description": "overflow は CSS の一括指定プロパティで、要素のオーバーフロー時、すなわち、要素の内容が多すぎてブロック整形コンテキストに収まらない場合の望ましい動作を両方向について設定します。",
      "shorthand_property": [
        "overflow-x",
        "overflow-y"
      ],
      "values": {
        "visible": "内容はクリッピングされず、パディングボックスの外側に表示されることがあります。",
        "hidden": "内容は、必要に応じてパディングボックスに合わせて切り取られます。スクロールバーは表示されず、ユーザーがスクロールできるようにするための対応 (ドラッグやスクロールホイールによる方法) もありません。内容はプログラム的に (例えば、 offsetLeft のようなプロパティの値を設定する方法などで) スクロールすることができますので、要素はスクロールコンテナーになります。",
        "clip": "hidden と同様に、コンテンツは要素のパディングボックスに合わせて切り取られます。 clip と hidden の違いは、 clip キーワードがプログラム的なスクロールも含め、すべてのスクロールを禁止することです。ボックスはスクロールコンテナーにはならず、新しい整形コンテキストを始めることもありません。新しい整形コンテキストを始めたいのであれば、 display: flow-root を使用して実現することができます。",
        "scroll": "内容は、必要に応じてパディングボックスに合わせて切り取られます。コンテンツが変化したときに、スクロールバーが現れたり消えたりするのを防ぐため、ブラウザーは内容がクリッピングされるかどうかに関わらず、スクロールバーを常に表示します。プリンターはあふれた部分の内容を印刷する可能性があります。",
        "auto": "ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は visible と同じように表示されますが、新しいブロック整形コンテキストを生成します。デスクトップブラウザーは内容があふれる場合、スクロールバーを表示します。"
      },
      "initial_value": {
        "overflow": "visible"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow",
      "inheritance": false
    },
    {
      "id": 264,
      "name": "overflow-anchor",
      "prefix": "overflow",
      "description": "overflow-anchor は CSS のプロパティで、コンテンツの移動を最小化するためにスクロール位置を調整する、ブラウザーのスクロールアンカリングの動作をオプトアウトする方法を提供します。\n\nスクロールアンカリングの動作は、対応しているすべてのブラウザーで既定で有効になっています。したがって、このプロパティを変更するのは通常、文書または文書の一部でスクロールアンカリングによって操作上の問題が発生し、この動作をオフにする必要がある場合のみです。",
      "shorthand_property": null,
      "values": {
        "auto": "その要素は、スクロール位置を調整するときにアンカー候補になります。",
        "none": "その要素はアンカー候補として選択されません。"
      },
      "initial_value": {
        "overflow-anchor": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-anchor",
      "inheritance": false
    },
    {
      "id": 265,
      "name": "overflow-block",
      "prefix": "overflow",
      "description": "overflow-block は CSS プロパティで、内容がブロックの先頭およびブロックの末尾の端をあふれた時にどのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させる、のいずれかになります。",
      "shorthand_property": null,
      "values": {
        "visible": "内容は切り取られず、パディングボックスのブロックの先頭とブロックの末尾の辺よりも外側に表示される可能性があります。",
        "hidden": "ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。",
        "scroll": "ブロック方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。",
        "auto": "ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は visible と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。"
      },
      "initial_value": {
        "overflow-block": "auto"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-block",
      "inheritance": false
    },
    {
      "id": 266,
      "name": "overflow-clip-margin",
      "prefix": "overflow",
      "description": "overflow-clip-margin は CSS のプロパティで、 overflow: clip を持つ要素がクリップされる前に、要素の辺からどれだけ外側に描画できるかを指定します。",
      "shorthand_property": null,
      "values": {
        "overflow-clip-margin": "長さで指定します。負の値は許可されていません。"
      },
      "initial_value": {
        "overflow-clip-margin": "0px"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-clip-margin",
      "inheritance": false
    },
    {
      "id": 267,
      "name": "overflow-inline",
      "prefix": "overflow",
      "description": "overflow-inline は CSS のプロパティで、内容がボックスのインライン方向の先頭および末尾方向の端をはみ出した時に、どのように表示するかを設定します。これは表示なし、スクロールバー付き、内容をはみ出させるの何れかになります。",
      "shorthand_property": null,
      "values": {
        "visible": "内容は切り取られず、パディングボックスのインライン方向の先頭と末尾の辺よりも外側に表示される可能性があります。",
        "hidden": "インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。",
        "scroll": "インライン方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。",
        "auto": "ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は visible と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。"
      },
      "initial_value": {
        "overflow-inline": "auto"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-inline",
      "inheritance": false
    },
    {
      "id": 268,
      "name": "overflow-wrap",
      "prefix": "overflow",
      "description": "overflow-wrap は CSS のプロパティで、インライン要素に対して、テキストが行ボックスをあふれないように、ブラウザーが分割できない文字列の途中で改行を入れるかどうかの設定を適用します。",
      "shorthand_property": null,
      "values": {
        "normal": "通常の単語の分割位置 (2 つの単語の間の空白など) でのみ改行することを示します。",
        "anywhere": "あふれることを避けるために、行内にその他の分割可能な位置がない場合、その他の分割できない文字列 — 長い単語や URL — が任意の場所で分割されることがあります。分割位置にハイフン文字は挿入されません。コンテンツの最小固有寸法を計算する時には、単語分割によって導入された折り返し可能位置が考慮されます。",
        "break-word": "anywhere の値と同様に、行内にその他の分割可能な位置がない場合、通常は分割可能でない単語が任意の場所で分割されますが、コンテンツの最小固有寸法を計算する時に、単語分割によって導入された折り返し可能位置が考慮されません。"
      },
      "initial_value": {
        "overflow-wrap": "normal"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-wrap",
      "inheritance": true
    },
    {
      "id": 269,
      "name": "overflow-x",
      "prefix": "overflow",
      "description": "overflow-x は CSS のプロパティで、ブロックレベル要素の内容が左右の境界からあふれた場合、どのように表示するのかを設定します。表示しないか、スクロールバーを表示するか、あふれさせるかを設定できます。",
      "shorthand_property": null,
      "values": {
        "visible": "内容は切り取られず、パディングボックスの左右の辺よりも外側に表示される可能性があります。 overflow-y が hidden, scroll, auto のいずれかであり、このプロパティが visible である場合は、暗黙に auto に計算します。",
        "hidden": "水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。",
        "scroll": "水平方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。",
        "auto": "ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は visible と同じように表示されますが、新しいブロック整形文脈を生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。"
      },
      "initial_value": {
        "overflow-x": "visible"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-x",
      "inheritance": false
    },
    {
      "id": 270,
      "name": "overflow-y",
      "prefix": "overflow",
      "description": "overflow-y は CSS のプロパティで、ブロックレベル要素の内容が上下の境界からあふれた場合、どのように表示するのかを設定します。表示しないか、スクロールバーを表示するか、あふれさせるかを設定できます。",
      "shorthand_property": null,
      "values": {
        "visible": "内容は切り取られず、パディングボックスの上下の辺よりも外側に表示される可能性があります。",
        "hidden": "垂直方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。スクロールバーは表示されません。",
        "scroll": "垂直方向にパディングボックスに合わせる必要がある場合は、内容を切り取ります。ブラウザーは内容が実際に切り取られるかどうかにかかわらず、スクロールバーを表示します。 (これは内容が変化したときにスクロールバーが表示されたり非表示になったりすることを防ぎます。) プリンターははみ出す内容を印刷するかもしれません。",
        "auto": "ユーザーエージェントに依存します。内容がパディングボックス内に収まる場合は visible と同じように表示されますが、新しいブロック整形コンテキストを生成します。内容があふれる場合、デスクトップブラウザーはスクロールバーを表示します。"
      },
      "initial_value": {
        "overflow-y": "visible"
      },
      "applies_to": ["ブロックコンテナー, フレックスコンテナー, グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overflow-y",
      "inheritance": false
    },
    {
      "id": 271,
      "name": "overscroll-behavior",
      "prefix": "overscroll",
      "description": "overscroll-behavior は CSS のプロパティで、スクロール領域の境界に達したときにブラウザーが何をするかを設定します。これは overscroll-behavior-x および overscroll-behavior-y の一括指定です。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールの末端における既定の振る舞いが通常通りに発生します。",
        "contain": "この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。",
        "none": "隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。"
      },
      "initial_value": {
        "overscroll-behavior": "auto"
      },
      "applies_to": ["非置換ブロックレベル要素と非置換インラインブロック要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overscroll-behavior",
      "inheritance": false
    },
    {
      "id": 272,
      "name": "overscroll-behavior-block",
      "prefix": "overscroll",
      "description": "overscroll-behavior-block は CSS のプロパティで、スクロール領域のブロック方向の境界に達したときのブラウザーの挙動を設定します。\n\n全体的な説明は overscroll-behavior を参照してください。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールの末端における既定の振る舞いが通常通りに発生します。",
        "contain": "この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。",
        "none": "隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。"
      },
      "initial_value": {
        "overscroll-behavior-block": "auto"
      },
      "applies_to": ["非置換ブロックレベル要素と非置換インラインブロック要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overscroll-behavior-block",
      "inheritance": false
    },
    {
      "id": 273,
      "name": "overscroll-behavior-inline",
      "prefix": "overscroll",
      "description": "overscroll-behavior-inline は CSS のプロパティで、スクロール領域のインライン方向の境界に達したときのブラウザーの挙動を設定します。\n\n全体的な説明は overscroll-behavior を参照してください。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールの末端における既定の振る舞いが通常通りに発生します。",
        "contain": "この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。",
        "none": "隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。"
      },
      "initial_value": {
        "overscroll-behavior-inline": "auto"
      },
      "applies_to": ["非置換ブロックレベル要素と非置換インラインブロック要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overscroll-behavior-inline",
      "inheritance": false
    },
    {
      "id": 274,
      "name": "overscroll-behavior-x",
      "prefix": "overscroll",
      "description": "overscroll-behavior-x は CSS のプロパティで、スクロール領域の水平方向の境界に達したときのブラウザーの挙動を設定します。\n\n全体的な説明は overscroll-behavior を参照してください。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールの末端における既定の振る舞いが通常通りに発生します。",
        "contain": "この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。",
        "none": "隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。"
      },
      "initial_value": {
        "overscroll-behavior-x": "auto"
      },
      "applies_to": ["非置換ブロックレベル要素と非置換インラインブロック要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overscroll-behavior-x",
      "inheritance": false
    },
    {
      "id": 275,
      "name": "overscroll-behavior-y",
      "prefix": "overscroll",
      "description": "overscroll-behavior-y は CSS のプロパティで、スクロール領域の垂直方向の境界に達したときのブラウザーの挙動を設定します。\n\n全体的な説明は overscroll-behavior を参照してください。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールの末端における既定の振る舞いが通常通りに発生します。",
        "contain": "この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。",
        "none": "隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。"
      },
      "initial_value": {
        "overscroll-behavior-y": "auto"
      },
      "applies_to": ["非置換ブロックレベル要素と非置換インラインブロック要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/overscroll-behavior-y",
      "inheritance": false
    },
    {
      "id": 276,
      "name": "padding",
      "prefix": "padding",
      "description": "padding は CSS の一括指定プロパティで、要素の全四辺のパディング領域を一度に設定します。",
      "shorthand_property": [
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left"
      ],
      "values": {
        "<length>": "パディングの寸法を固定値で表したものです。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding",
      "inheritance": false
    },
    {
      "id": 277,
      "name": "padding-block",
      "prefix": "padding",
      "description": "padding-block は CSS の一括指定プロパティで、論理的なブロック方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。",
      "shorthand_property": [
        "padding-block-start",
        "padding-block-end"
      ],
      "values": {
        "padding-block": "padding-left プロパティと同じ値を取ります。"
      },
      "initial_value": {
        "padding-block-start": 0,
        "padding-block-end": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-block",
      "inheritance": false
    },
    {
      "id": 278,
      "name": "padding-block-end",
      "prefix": "padding",
      "description": "padding-block-end は CSS のプロパティで、要素のブロック方向の論理的な末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-block-end": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-block-end",
      "inheritance": false
    },
    {
      "id": 279,
      "name": "padding-block-start",
      "prefix": "padding",
      "description": "padding-block-start は CSS のプロパティで、要素のブロック方向の論理的な先頭側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-block-start": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-block-start",
      "inheritance": false
    },
    {
      "id": 280,
      "name": "padding-bottom",
      "prefix": "padding",
      "description": "padding-bottom は CSS のプロパティで、要素のパディング領域における下側の高さを設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-bottom": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素。::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-bottom",
      "inheritance": false
    },
    {
      "id": 281,
      "name": "padding-inline",
      "prefix": "padding",
      "description": "padding-inline は CSS の一括指定プロパティで、論理的なインライン方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。",
      "shorthand_property": [
        "padding-inline-end",
        "padding-inline-start"
      ],
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-inline-end": 0,
        "padding-inline-start": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-inline",
      "inheritance": false
    },
    {
      "id": 282,
      "name": "padding-inline-end",
      "prefix": "padding",
      "description": "padding-inline-end は CSS のプロパティで、要素のインライン方向の論理的な末尾側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-inline-end": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-inline-end",
      "inheritance": false
    },
    {
      "id": 283,
      "name": "padding-inline-start",
      "prefix": "padding",
      "description": "padding-inline-start は CSS のプロパティで、要素のインライン方向の論理的な先頭側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-inline-start": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-inline-start",
      "inheritance": false
    },
    {
      "id": 284,
      "name": "padding-left",
      "prefix": "padding",
      "description": "padding-left は CSS のプロパティで、要素のパディング領域における左側の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-left": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-left",
      "inheritance": false
    },
    {
      "id": 285,
      "name": "padding-right",
      "prefix": "padding",
      "description": "padding-right は CSS のプロパティで、要素のパディング領域における右側の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-right": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-right",
      "inheritance": false
    },
    {
      "id": 286,
      "name": "padding-top",
      "prefix": "padding",
      "description": "padding-top は CSS のプロパティで、要素のパディング領域における右側の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "パディングの寸法を固定値で指定します。負の値は指定できません。",
        "<percentage>": "パディングの寸法を包含ブロックのインラインサイズ（writing-mode で横書き言語と定義されている場合は width）に対するパーセント値で示したものです。負の数であってはいけません。"
      },
      "initial_value": {
        "padding-top": 0
      },
      "applies_to": ["table-row-group, table-header-group, table-footer-group, table-row, table-column-group, table-column を除くすべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/padding-right",
      "inheritance": false
    },
    {
      "id": 287,
      "name": "page",
      "prefix": "page",
      "description": "The page CSS property is used to specify the named page, a specific type of page defined by the @page at-rule.\n\nIf there are multiple selectors that are using a named page consecutively then a forced page break using break-after may be needed.",
      "shorthand_property": null,
      "values": {
        "auto": "Default value. Use the value of the nearest ancestor with a non-auto value. If no ancestor has a named page value set, the used value for auto is the empty string.",
        "<custom-ident>": "Case-sensitive name defined in a @page at-rule."
      },
      "initial_value": {
        "page": "auto"
      },
      "applies_to": ["block-level elements in the normal flow of the root element. User agents may also apply it to other elements like table-row elements."],
      "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/page",
      "inheritance": false
    },
    {
      "id": 288,
      "name": "perspective",
      "prefix": null,
      "description": "perspective は CSS のプロパティで、 z=0 の平面とユーザーとの間の距離を定めて 3D に配置された要素に遠近感を与えます。",
      "shorthand_property": null,
      "values": {
        "none": "perspective は CSS のプロパティで、 z=0 の平面とユーザーとの間の距離を定めて 3D に配置された要素に遠近感を与えます。",
        "<length>": "ユーザーと z=0 平面間の距離を表す <length> です。立体的な座標変換を要素とその内容に適用するときに使います。 0 や負の値ならば、立体的な座標変換は適用されません。"
      },
      "initial_value": {
        "perspective": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/perspective",
      "inheritance": false
    },
    {
      "id": 289,
      "name": "perspective-origin",
      "prefix": null,
      "description": "perspective-origin は CSS のプロパティで、閲覧者の視点の位置を決めます。これは perspective プロパティによって消点として使われます。",
      "shorthand_property": null,
      "values": {
        "x-position": "消失点の横座標上の位置を示します。次のいずれかの値です。",
        "y-position": "消失点の縦座標上の位置を示します。次のいずれかの値です。"
      },
      "initial_value": {
        "perspective-origin": "50% 50%"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/perspective-origin",
      "inheritance": false
    },
    {
      "id": 290,
      "name": "place-content",
      "prefix": "place",
      "description": "place-content は CSS の一括指定プロパティで、ブロック方向とインライン方向の内容物の配置 (すなわち align-content および justify-content) を、グリッドやフレックスボックスなどのレイアウトシステムにおいて、一度に指定することができます。",
      "shorthand_property": [
        "align-content",
        "justify-content"
      ],
      "values": {
        "start": "各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。",
        "end": "各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。",
        "flex-start": "各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の先頭側である配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は start のように扱われます。",
        "flex-end": "各アイテムは、フレックスコンテナーに依存して、主軸または交差軸の末尾側である配置コンテナーの端に向けて互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は end のように扱われます。",
        "center": "各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。",
        "left": "各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は start のように動作します。",
        "right": "各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は start のように動作します。",
        "space-between": "各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムは主軸の先頭側に寄せられ、最後のアイテムは主軸の末尾側に寄せられます。",
        "baseline, first baseline, last baseline": "first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。 first baseline の代替配置は start、last baseline の代替配置は end です。",
        "space-around": "各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔は同じになります。最初のアイテムの前と最後のアイテムの後の余白は、隣接するアイテム同士の間隔の半分の幅になります。",
        "space-evenly": "各アイテムは、配置コンテナーの中で均等に配置されます。隣接するアイテム同士の間隔、最初のアイテムの前の余白、最後のアイテムの後の余白は、まったく同じ幅になります。",
        "stretch": "各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が auto のアイテムは、 max-height/max-width (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。"
      },
      "initial_value": {
        "align-content": "normal",
        "justify-content": "normal"
      },
      "applies_to": ["複数行のフレックスコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/place-content",
      "inheritance": false
    },
    {
      "id": 291,
      "name": "place-items",
      "prefix": "place",
      "description": "CSS の place-items は一括指定プロパティで、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち align-items および justify-items プロパティ) を、グリッドやフレックスボックスなどのレイアウトシステムにおいて、一度に指定することができます。2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。",
      "shorthand_property": [
        "align-items",
        "justify-items"
      ],
      "values": {
        "auto": "使用される値は、ボックスに親があれば、親ボックスの justify-items プロパティ、そうでなければ絶対位置であり、このような場合、 auto は normal を表します。",
        "normal": "このキーワードの効果は、現在のレイアウトモードに依存します。",
        "start": "各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。",
        "end": "各アイテムは、適切な軸方向で配置コンテナーの末尾側の端に向けて互いに寄せて配置されます。",
        "flex-start": "アイテムは、配置コンテナーの主軸または交差軸の先頭側の端に向けて、互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は start のように扱われます。",
        "flex-end": "アイテムは、配置コンテナーの主軸または交差軸の末尾側の端に向けて、互いに寄せて配置されます。 これはフレックスレイアウトのアイテムのみに適用されます。フレックスコンテナーの子ではないアイテムでは、この値は end のように扱われます。",
        "self-start": "アイテムは適切な軸で、アイテムの開始側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "self-end": "アイテムは適切な軸で、アイテムの終端側にある配置コンテナーの辺に向けて、互いに接するよう詰められます。",
        "center": "各アイテムは、配置コンテナーの中央に向けて互いに寄せて配置されます。",
        "left": "各アイテムは、適切な軸方向で配置コンテナーの左側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は start のように動作します。",
        "right": "各アイテムは、適切な軸方向で配置コンテナーの右側の端に向けて互いに寄せて配置されます。プロパティの軸がインライン軸と平行でない場合は、この値は start のように動作します。",
        "baseline, first baseline, last baseline": "first-baseline 配置または last-baseline 配置への関与を指定します。ボックスの最初または最後のベースラインセットの配置ベースラインを、ベースライン共有グループ内のすべてのボックスで共有される最初または最後のベースラインセットで対応するベースラインに揃えます。 first baseline の代替配置は start、last baseline の代替配置は end です。",
        "stretch": "各アイテムの寸法の合計が配置コンテナーの寸法よりも小さい場合、寸法が auto のアイテムは、 max-height/max-width (または同等の機能) での制約を尊重しつつ、 (比例的にではなく) 均等に引き伸ばされ、寸法の合計が配置コンテナーを満たすようになります。"
      },
      "initial_value": {
        "align-items": "normal",
        "justify-items": "legacy"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/place-items#baseline",
      "inheritance": false
    },
    {
      "id": 292,
      "name": "place-self",
      "prefix": "place",
      "description": "place-self は CSS の一括指定プロパティで、アイテムのブロック軸およびインライン軸に沿ったアイテムの配置 (すなわち align-self および justify-self プロパティ) を、グリッドやフレックスボックスなどのレイアウトシステムにおいて、一度に指定することができます。2 番目の値が設定されていない場合、最初の値がそちらにも使用されます。",
      "shorthand_property": [
        "align-self",
        "justify-self"
      ],
      "values": {
        "auto": "使用される値は、ボックスに親があれば、親ボックスの justify-items プロパティ、そうでなければ絶対位置であり、このような場合、 auto は normal を表します。",
        "normal": "このキーワードの効果は、現在のレイアウトモードに依存します。",
        "start": "各アイテムは、適切な軸方向で配置コンテナーの先頭側の端に向けて互いに寄せて配置されます。"
      },
      "initial_value": {
        "align-items": "normal",
        "justify-items": "legacy"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/place-self",
      "inheritance": false
    },
    {
      "id": 293,
      "name": "pointer-events",
      "prefix": null,
      "description": "pointer-events は CSS のプロパティで、特定のグラフィック要素がポインターイベントの対象になる可能性のある環境（存在する場合）を設定します。",
      "shorthand_property": [
        "align-self",
        "justify-self"
      ],
      "values": {
        "auto": "要素は、 pointer-events プロパティが指定されていないときと同様にふるまいます。SVG コンテンツ内では visiblePainted を指定したときと同じ効果になります。",
        "none": "要素がポインターイベントの対象になることはありません。しかし、子孫要素が pointer-events の別の値をセットされていた場合は、その子孫要素自体はポインターイベントのターゲットとなりえます。その場合、ポインターイベントはイベントキャプチャ/バブリングの過程で必要に応じて親要素のイベントリスナーをトリガーします。"
      },
      "initial_value": {
        "pointer-events": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/pointer-events",
      "inheritance": true
    },
    {
      "id": 294,
      "name": "position",
      "prefix": null,
      "description": "position は CSS のプロパティで、文書内で要素がどのように配置されるかを設定します。 top, right, bottom, left の各プロパティが、配置された要素の最終的な位置を決めます。",
      "shorthand_property": null,
      "values": {
        "static": "要素は文書の通常のフローに従って配置されます。 top, right, bottom, left, z-index プロパティは効果がありません。これが既定値です。",
        "relative": "要素は文書の通常のフローに従って配置され、 top, right, bottom, left の値に基づいて自分自身からの相対オフセットで配置されます。オフセットは他の要素の配置には影響を与えません。つまり、ページレイアウト内で要素に与えられる空間は、位置が static であった時と同じです。\n\nz-index の値が auto でない場合、新しい重ね合わせコンテキストを生成します。 table-*-group, table-row, table-column, table-cell, table-caption の要素における効果は未定義です。",
        "absolute": "要素は文書の通常のフローから除外され、ページレイアウト内にこの要素のための空間が作成されません。この要素に直近の位置指定されている祖先があればそれに対して、そうでなければ、初期の包含ブロックに対して相対配置されます。最終的な位置は top, right, bottom, left の値によって決定されます。\n\nこの値では、 z-index の値が auto ではない場合、新しい重ね合わせコンテキストを作成します。絶対位置指定ボックスのマージンは、他の要素のマージンと相殺されません。",
        "sticky": "要素は文書の通常のフローに従って配置され、直近のスクロールする祖先および包含ブロック（直近のブロックレベル祖先、表関連要素を含む）に対して top, right, bottom, left の値に基づいて相対配置されます。このオフセットは他の要素の配置には影響を与えません。\n\nこの値は、常に新しい重ね合わせコンテキストを生成します。なお粘着要素は、直近の祖先がスクロールしない場合でも、「スクロールの仕組み」を持つ直近の祖先（overflow が hidden, scroll, auto, overlay として作成されたもの）に「粘着」します。"
      },
      "initial_value": {
        "position": "static"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/position",
      "inheritance": false
    },
    {
      "id": 295,
      "name": "print-color-adjust",
      "prefix": null,
      "description": "print-color-adjust は CSS のプロパティで、ユーザーエージェントが出力端末上で要素の外観を最適化するために、何らかの調整を行うことができるかを設定します。 既定では、ブラウザーは、出力端末の種類や能力を得た上で、必要かつ賢明であると判断した要素の外観に対する調整を行うことができます。",
      "shorthand_property": null,
      "values": {
        "economy": "ユーザーエージェントは、レンダリングされる端末に合わせて出力を最適化するために、適切かつ賢明と思われるように要素を調整することができます。 例えば、印刷する場合、ブラウザーは背景画像をすべて取り除き、白い紙で読むためにコントラストが最適化されるようにテキストの色を調整することを選ぶかもしれません。 これが既定値です。",
        "exact": "要素のコンテンツは、色、画像、スタイルを慎重かつ重要な方法で使用するように固有かつ慎重に作成されており、ブラウザーによって変更されることは、事態を良くするどころかむしろ悪くするかもしれません。 コンテンツの外観は、ユーザーからのリクエスト以外では変えてはいけません。 例えば、あるページに、背景色が白と薄い灰色の間で交互に変化する行を持つ情報のリストを記載することがあります。 背景色が除去されると、コンテンツの可読性が低下します。"
      },
      "initial_value": {
        "print-color-adjust": "economy"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/print-color-adjust",
      "inheritance": true
    },
    {
      "id": 296,
      "name": "quotes",
      "prefix": null,
      "description": "quotes は CSS のプロパティで、 content プロパティの open-quotes や close-quotes を使用して追加された引用符をどのように表示するかを設定します。",
      "shorthand_property": null,
      "values": {
        "none": "content プロパティの open-quote および close-quote の値で引用符を生成しません。",
        "auto": "選択された要素に設定された言語の値（すなわち、 lang 属性）で使用される適切な引用符が使用されます。",
        "[<string> <string>]+": "open-quote および close-quote を表す <string> の 1 つ以上の組。最初の組は、引用符を表示する要素が入れ子になった際の、最上層のものの引用符を表します。以下、順次下位レベルの引用符に対応します。"
      },
      "initial_value": {
        "quotes": "ユーザエージェントに依存"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/quotes",
      "inheritance": true
    },
    {
      "id": 297,
      "name": "resize",
      "prefix": null,
      "description": "resize は CSS のプロパティで、要素の寸法を変更できるかどうか、もしそうなら、どの方向に変更できるかを設定します。",
      "shorthand_property": null,
      "values": {
        "none": "ユーザーが要素の寸法を制御する方法を提供しません。",
        "both": "要素はユーザーが寸法を変更できる仕組みを、垂直方向と水平方向の両方について表示します。",
        "horizontal": "要素はユーザーが寸法を変更できる仕組みを、水平方向について表示します。",
        "vertical": "要素はユーザーが寸法を変更できる仕組みを、垂直方向について表示します。"
      },
      "initial_value": {
        "resize": "none"
      },
      "applies_to": ["overflow が visible 以外である要素、任意で画像、動画、iframe を表す置換要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/resize",
      "inheritance": false
    },
    {
      "id": 298,
      "name": "right",
      "prefix": null,
      "description": "right は CSS のプロパティで、位置指定要素の水平位置の決定に関与します。位置指定されていない要素には効果はありません。",
      "shorthand_property": null,
      "values": {
        "<length>": "負、null、または正の <length> で、以下のものを表します。",
        "<percentage>": "包含ブロックの幅に対する <percentage> です。",
        "auto": "以下のように指定します。",
        "inherit": "値が親要素（包含ブロックとは限りません）の計算値と同じであることを示すキーワードです。そして、この計算値は <length>, <percentage>, または auto キーワードと同様に扱われます。"
      },
      "initial_value": {
        "right": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/right",
      "inheritance": false
    },
    {
      "id": 299,
      "name": "rotate",
      "prefix": null,
      "description": "rotate は CSS のプロパティで、 transform とは個別に独立して回転変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 transform の値で座標変換関数を指定する実際の順序を覚えておく手間を軽減します。",
      "shorthand_property": null,
      "values": {
        "角度値": "<angle> で、 z 軸の周囲を該当する要素を貫いて回転させる角度を指定します。rotate() (二次元回転) 関数と等価です。",
        "x, y, z 軸と角度値": "該当する要素を回転する軸の名前 (\"x\", \"y\", \"z\") と、要素を貫いて回転する角度を指定する <angle> です。 rotateX()/rotateY()/rotateZ() (三次元回転) 関数と等価です。",
        "ベクトルと角度値": "要素を回転させたい直線を表す原点を中心としたベクトルを表す 3 つの数値 <number> と、要素を貫いて回転する角度を指定する <angle> です。 rotate3d() (三次元回転) 関数と等価です。",
        "none": "回転を適用しないことを表します。"
      },
      "initial_value": {
        "rotate": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/rotate",
      "inheritance": false
    },
    {
      "id": 300,
      "name": "row-gap (grid-row-gap)",
      "prefix": null,
      "description": "row-gap は CSS のプロパティで、要素のグリッド行の間のすき間 (溝) の寸法を定義します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "行を隔てる溝の幅です。 <percentage> 値は要素の寸法に対する相対値です。"
      },
      "initial_value": {
        "row-gap (grid-row-gap)": "normal"
      },
      "applies_to": ["段組み要素、フレックスコンテナー、グリッドコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/row-gap",
      "inheritance": false
    },
    {
      "id": 301,
      "name": "ruby-position",
      "prefix": null,
      "description": "ruby-position は CSS のプロパティで、ベース要素に対するルビ要素の位置を定義します。要素の上方 (over)、下方 (under)、文字の間の右側 (inter-character) に配置できます。",
      "shorthand_property": null,
      "values": {
        "over": "ルビを主テキストの上 (横書きの場合) または右 (縦書きの場合) に配置することを示すキーワードです。",
        "under": "ルビを主テキストの下 (横書きの場合) または左 (縦書きの場合) に配置することを示すキーワードです。",
        "inter-character": "ルビをそれぞれの文字の間に配置することを示すキーワードです。",
        "alternate": "複数のレベルの注釈があった場合に、ルビが上と下の間で交互に表示されることを示すキーワードです。"
      },
      "initial_value": {
        "ruby-position": "alternate"
      },
      "applies_to": ["ルビ注釈コンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/ruby-position",
      "inheritance": true
    },
    {
      "id": 302,
      "name": "scale",
      "prefix": null,
      "description": "scale は CSS のプロパティで、 transform とは個別に独立しての変倍変換を指定することができます。これは一般のユーザーインターフェイスの利用においてはより適しており、 transform の値で座標変換関数を指定する実際の順序を思い出す手間を軽減します。",
      "shorthand_property": null,
      "values": {
        "1 つの数値": "該当する要素の変倍率を指定する <number> または <percentage> であり、 X および Y 軸で同じの変倍になります。 scale() （2D の変倍）関数に 1 つの値を指定した場合と等価です。",
        "2 つの長さ/パーセント値": "2 つの <number> または <percentage> 値で、2D の変倍における X 軸と Y 軸の変倍率を（それぞれ）指定します。 scale() （2D の変倍）関数に 2 つの値を指定した場合と等価です。",
        "3 つの長さ/パーセント値": "3 つの <number> または <percentage> 値で、3D の変倍における X 軸と Y 軸と Z 軸の変倍率を（それぞれ）指定します。 scale3d() （3D の変倍）関数と等価です。",
        "none": "変倍が適用されないことを示します。"
      },
      "initial_value": {
        "scale": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scale",
      "inheritance": false
    },
    {
      "id": 303,
      "name": "scroll-behavior",
      "prefix": "scroll",
      "description": "scroll-behavior は CSS のプロパティで、ナビゲーションや CSSOM のスクローリング API によってスクロールするボックスにスクロールが発生した際の、そのスクロールの振る舞いを設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "スクロールするボックスは瞬時にスクロールします。",
        "smooth": "スクロールするボックスは、ユーザーエージェント定義のタイミング関数を使い、ユーザーエージェント定義の時間をかけて、円滑にスクロールします。もし存在するなら、ユーザーエージェントはプラットフォームの慣例に従うべきです。"
      },
      "initial_value": {
        "scroll-behavior": "auto"
      },
      "applies_to": ["スクロールするボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-behavior",
      "inheritance": false
    },
    {
      "id": 304,
      "name": "scroll-margin",
      "prefix": "scroll",
      "description": "scroll-margin は一括指定プロパティで、要素のスクロールマージンを一度にすべて、ちょうど margin プロパティが個別指定の margin-* に値を割り当てるように、値を割り当てます。",
      "shorthand_property": [
        "scroll-margin-bottom",
        "scroll-margin-left",
        "scroll-margin-right",
        "scroll-margin-top"
      ],
      "values": {
        "<length>": "スクロールコンテナーの辺からの張り出し部分です。"
      },
      "initial_value": {
        "scroll-margin-bottom": 0,
        "scroll-margin-left": 0,
        "scroll-margin-right": 0,
        "scroll-margin-top": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin",
      "inheritance": false
    },
    {
      "id": 305,
      "name": "scroll-margin-block",
      "prefix": "scroll",
      "description": "scroll-margin-block は一括指定プロパティで、ブロック方向のスクロールマージンを設定します。",
      "shorthand_property": [
        "scroll-margin-block-end",
        "scroll-margin-block-start"
      ],
      "values": {
        "<length>": "スクロールコンテナーの対応する辺からの距離です。"
      },
      "initial_value": {
        "scroll-margin-block-end": 0,
        "scroll-margin-block-start": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-block",
      "inheritance": false
    },
    {
      "id": 306,
      "name": "scroll-margin-block-end",
      "prefix": "scroll",
      "description": "scroll-margin-block-end プロパティは、スクロールスナップ領域のインライン方向における末尾側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーのブロック方向における末尾側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-block-end": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-block-end",
      "inheritance": false
    },
    {
      "id": 307,
      "name": "scroll-margin-block-start",
      "prefix": "scroll",
      "description": "scroll-margin-block-start プロパティは、スクロールスナップ領域のインライン方向における先頭側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーのブロック方向における先頭側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-block-start": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-block-start",
      "inheritance": false
    },
    {
      "id": 308,
      "name": "scroll-margin-bottom",
      "prefix": "scroll",
      "description": "scroll-margin-bottom プロパティは、スクロールスナップ領域の下側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーの下側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-bottom": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-bottom",
      "inheritance": false
    },
    {
      "id": 309,
      "name": "scroll-margin-inline",
      "prefix": "scroll",
      "description": "scroll-margin-inline は一括指定プロパティで、インライン方向のスクロールマージンを設定します。",
      "shorthand_property": [
        "scroll-margin-inline-end",
        "scroll-margin-inline-start"
      ],
      "values": {
        "<length>": "スクロールコンテナーの対応する辺からの距離です。"
      },
      "initial_value": {
        "scroll-margin-inline-end": 0,
        "scroll-margin-inline-start": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-inline",
      "inheritance": false
    },
    {
      "id": 310,
      "name": "scroll-margin-inline-end",
      "prefix": "scroll",
      "description": "scroll-margin-inline-end プロパティは、スクロールスナップ領域のインライン方向における末尾側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーのインライン方向における末尾側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-inline-end": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-inline-end",
      "inheritance": false
    },
    {
      "id": 311,
      "name": "scroll-margin-inline-start",
      "prefix": "scroll",
      "description": "scroll-margin-inline-start プロパティは、スクロールスナップ領域のインライン方向における先頭側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーのインライン方向における先頭側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-inline-start": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-inline-start",
      "inheritance": false
    },
    {
      "id": 312,
      "name": "scroll-margin-left",
      "prefix": "scroll",
      "description": "scroll-margin-left プロパティは、スクロールスナップ領域の左側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーの左側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-left": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-left",
      "inheritance": false
    },
    {
      "id": 313,
      "name": "scroll-margin-right",
      "prefix": "scroll",
      "description": "scroll-margin-right プロパティは、スクロールスナップ領域の右側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーの右側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-right": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-right",
      "inheritance": false
    },
    {
      "id": 314,
      "name": "scroll-margin-top",
      "prefix": "scroll",
      "description": "scroll-margin-top プロパティは、スクロールスナップ領域の上側のマージンを定義し、このボックスをスナップポートにスナップするために使用されます。スクロールスナップ領域は変換された境界ボックスによって定義され、四角形の囲みボックスを探して (スクロールコンテナーの座標空間における軸に合わせられ)、それから指定された外部距離が追加されます。",
      "shorthand_property": null,
      "values": {
        "<length>": "スクロールコンテナーの上側の辺からみた外部の距離です。"
      },
      "initial_value": {
        "scroll-margin-top": 0
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-margin-top",
      "inheritance": false
    },
    {
      "id": 315,
      "name": "scroll-padding",
      "prefix": "scroll",
      "description": "scroll-padding は一括指定プロパティで、要素のすべての辺に一度にスクロールパディングを設定します。 padding プロパティで要素のパディングを設定するのとよく似ています。",
      "shorthand_property": [
        "scroll-padding-bottom",
        "scroll-padding-left",
        "scroll-padding-right",
        "scroll-padding-top"
      ],
      "values": {
        "<length-percentage>": "スクロールポートの対応する縁からの内側へのオフセットを、有効な <length> または <percentage> として指定します。",
        "auto": "オフセットがユーザーエージェントによって決定されます。これは一般的には 0px になりますが、ゼロ以外の値がより適切であれば、ユーザエージェントは自由に検出して他の値を取ることができます。"
      },
      "initial_value": {
        "scroll-padding-bottom": "auto",
        "scroll-padding-left": "auto",
        "scroll-padding-right": "auto",
        "scroll-padding-top": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding",
      "inheritance": false
    },
    {
      "id": 316,
      "name": "scroll-padding-block",
      "prefix": "scroll",
      "description": "scroll-padding-block は一括指定プロパティで、要素のブロック軸のスクロールパディングを設定します。",
      "shorthand_property": [
        "scroll-padding-block-end",
        "scroll-padding-block-start"
      ],
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントによって特定されます。これは一般に 0px になりますが、ユーザーエージェントはゼロ以外の値がもっと適切である場合を検出して他のことを行うことができます。"
      },
      "initial_value": {
        "scroll-padding-block-end": "auto",
        "scroll-padding-block-start": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-block",
      "inheritance": false
    },
    {
      "id": 317,
      "name": "scroll-padding-block-end",
      "prefix": "scroll",
      "description": "scroll-padding-block-end プロパティは、スクロールポートの最適表示領域のブロック方向における末尾側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-block-end": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-block-end",
      "inheritance": false
    },
    {
      "id": 318,
      "name": "scroll-padding-block-start",
      "prefix": "scroll",
      "description": "scroll-padding-block-start プロパティは、スクロールポートの最適表示領域のブロック方向における先頭側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-block-start": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-block-start",
      "inheritance": false
    },
    {
      "id": 319,
      "name": "scroll-padding-bottom",
      "prefix": "scroll",
      "description": "scroll-padding-bottom プロパティは、スクロールポートの最適表示領域の下のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-bottom": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-bottom",
      "inheritance": false
    },
    {
      "id": 320,
      "name": "scroll-padding-bottom",
      "prefix": "scroll",
      "description": "scroll-padding-bottom プロパティは、スクロールポートの最適表示領域の下のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からの内側のオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-bottom": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-bottom",
      "inheritance": false
    },
    {
      "id": 321,
      "name": "scroll-padding-inline",
      "prefix": "scroll",
      "description": "scroll-padding-inline プロパティは、インライン方向の scroll-padding の個別指定を設定する一括指定プロパティです。",
      "shorthand_property": [
        "scroll-padding-inline-end",
        "scroll-padding-inline-start"
      ],
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-inline-end": "auto",
        "scroll-padding-inline-start": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-inline",
      "inheritance": false
    },
    {
      "id": 322,
      "name": "scroll-padding-inline-end",
      "prefix": "scroll",
      "description": "scroll-padding-inline-end プロパティは、スクロールポートの最適表示領域のインライン方向における末尾側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-inline-end": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-inline-end",
      "inheritance": false
    },
    {
      "id": 323,
      "name": "scroll-padding-inline-start",
      "prefix": "scroll",
      "description": "scroll-padding-inline-start プロパティは、スクロールポートの最適表示領域のインライン方向における先頭側のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-inline-start": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-inline-start",
      "inheritance": false
    },
    {
      "id": 324,
      "name": "scroll-padding-left",
      "prefix": "scroll",
      "description": "scroll-padding-left プロパティは、スクロールポートの最適表示領域の左のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-left": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-left",
      "inheritance": false
    },
    {
      "id": 325,
      "name": "scroll-padding-right",
      "prefix": "scroll",
      "description": "scroll-padding-right プロパティは、スクロールポートの最適表示領域のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-right": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-right",
      "inheritance": false
    },
    {
      "id": 326,
      "name": "scroll-padding-top",
      "prefix": "scroll",
      "description": "scroll-padding-top プロパティは、スクロールポートの最適表示領域のオフセットを定義します。ユーザーのビュー内でものを配置するためのターゲット領域として使用される領域です。これにより、他のコンテンツ (固定位置のツールバーやサイドバーなど) によって隠されているスクロールポートの領域を除外したり、単にターゲット要素とスクロールポートの端との間により多くの余裕を持たせたりすることができます",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "スクロールポートの対応する辺からのオフセットで、有効な長さまたはパーセント値です。",
        "auto": "オフセットはユーザーエージェントが決定します。これは一般に 0px になりますが、ゼロ以外の値がもっと適切である場合をユーザーエージェントが検出して、他の値を採用することもできます。"
      },
      "initial_value": {
        "scroll-padding-top": "auto"
      },
      "applies_to": ["スクロールコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-padding-top",
      "inheritance": false
    },
    {
      "id": 327,
      "name": "scroll-snap-align",
      "prefix": "scroll",
      "description": "scroll-snap-align プロパティは、ボックスのスナップ位置を、そのスナップコンテナーの (配置コンテナーとしての) スナップポート内における (配置主体としての) スナップ領域の配置として指定します。2つの値は、それぞれブロック軸とインライン軸内のスナップ位置合わせを指定します。値が1つだけ指定された場合、2番目の値は同じ値を既定値とします。",
      "shorthand_property": null,
      "values": {
        "none": "このボックスでは、その軸のスナップ位置を定義しません。",
        "start": "このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の先頭位置がこの軸のスナップ位置になります。",
        "end": "このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の末尾位置がこの軸のスナップ位置になります。",
        "center": "このスクロールコンテナーのスナップポートの中で、このボックスのスクロールスナップ領域の中央位置がこの軸のスナップ位置になります。"
      },
      "initial_value": {
        "scroll-snap-align": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-snap-align",
      "inheritance": false
    },
    {
      "id": 328,
      "name": "scroll-snap-stop",
      "prefix": "scroll",
      "description": "scroll-snap-stop は CSS のプロパティで、スクロールコンテナーが可能なスナップ位置を「通り過ぎる」ことを許可するかどうかを定義します。",
      "shorthand_property": null,
      "values": {
        "normal": "スクロールコンテナーの視覚ビューポートがスクロールされた時、可能なスナップ位置を「通り過ぎる」ことを許可します。",
        "always": "スクロールコンテナーは可能なスナップ位置を「通り過ぎる」ことを許可しません。最初の要素のスナップ位置にスナップします。"
      },
      "initial_value": {
        "scroll-snap-stop": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-snap-stop",
      "inheritance": false
    },
    {
      "id": 329,
      "name": "scroll-snap-type",
      "prefix": "scroll",
      "description": "scroll-snap-type は CSS のプロパティで、スナップ点が存在する場合にスクロールコンテナーにどれだけ厳密にスナップ点を強制するかを設定します。",
      "shorthand_property": null,
      "values": {
        "none": "このスクロールコンテナーの視覚ビューポートがスクロールする時は、スナップ点を無視しなければなりません。",
        "x": "スクロールコンテナーは水平軸のみで、スナップ位置に合わせられます。",
        "y": "スクロールコンテナーは垂直軸のみで、スナップ位置に合わせられます。",
        "block": "スクロールコンテナーはブロック軸のみで、スナップ位置に合わせられます。",
        "inline": "スクロールコンテナーはインライン軸のみで、スナップ位置に合わせられます。",
        "both": "スクロールコンテナーは両方の軸で、個別にスナップ位置に合わせられます (それぞれの軸で異なる要素に位置が合わせられる可能性があります)。",
        "mandatory": "このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければスナップ点に合わせられます。これはスクロールアクションが終了した際に、可能であればその点にはまるということを意味しています。内容が追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されます。",
        "proximity": "このスクロールコンテナーの視覚ビューポートは、現在スクロール中でなければ、ユーザーエージェントのスクロール引数を考慮しつつスナップ点に載るよう動作する可能性があります。コンテンツが追加、移動、削除、リサイズされた場合、スクロール量のオフセットは、そのスナップ点に載り続けるよう調整されることがあります。"
      },
      "initial_value": {
        "scroll-snap-type": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scroll-snap-type",
      "inheritance": false
    },
    {
      "id": 330,
      "name": "scrollbar-color",
      "prefix": "scrollbar",
      "description": "scrollbar-color は CSS のプロパティで、スクロールバーのトラックとつまみの色を設定します。\n\nトラックはスクロールバーの背景を表し、一般的にスクロール位置にかかわらず固定されています。\n\nつまみはスクロールバーの動く部分で、ふつうはトラックの上を動きます。",
      "shorthand_property": null,
      "values": {
        "<scrollbar-color>": "スクロールバーの色を定義します。"
      },
      "initial_value": {
        "scrollbar-color": "auto"
      },
      "applies_to": ["スクロールするボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scrollbar-color",
      "inheritance": true
    },
    {
      "id": 331,
      "name": "scrollbar-gutter",
      "prefix": "scrollbar",
      "description": "The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.\n\nAn element's scrollbar gutter is the space between the inner border edge and the outer padding edge, where the browser may display a scrollbar. If no scrollbar is present, the gutter will be painted as an extension of the padding.",
      "shorthand_property": null,
      "values": {
        "auto": "The initial value. Classic scrollbars create a gutter when overflow is scroll, or when overflow is auto and the box is overflowing. Overlay scrollbars do not consume space.",
        "stable": "When using classic scrollbars, the gutter will be present if overflow is auto, scroll, or hidden even if the box is not overflowing. When using overlay scrollbars, the gutter will not be present.",
        "both-edges": "If a gutter would be present on one of the inline start/end edges of the box, another will be present on the opposite edge as well."
      },
      "initial_value": {
        "scrollbar-gutter": "auto"
      },
      "applies_to": ["scrolling boxes"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scrollbar-color",
      "inheritance": false
    },
    {
      "id": 332,
      "name": "scrollbar-width",
      "prefix": "scrollbar",
      "description": "scrollbar-width プロパティは、要素のスクロールバーが表示される時の最大の太さを設定することができます。",
      "shorthand_property": null,
      "values": {
        "<scrollbar-width>": "スクロールバーの幅を、長さまたはキーワードのどちらかで定義します。キーワードが使用する場合は、以下の値のうちの一つでなければなりません。"
      },
      "initial_value": {
        "scrollbar-width": "auto"
      },
      "applies_to": ["スクロールするボックス"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/scrollbar-width",
      "inheritance": false
    },
    {
      "id": 332,
      "name": "shape-image-threshold",
      "prefix": "shape",
      "description": "shape-image-threshold は CSS のプロパティで、 shape-outside の値に指定された画像によってシェイプを抽出するために使用するアルファチャネルのしきい値を設定します。",
      "shorthand_property": null,
      "values": {
        "<alpha-value>": "画像からシェイプを抽出するために使用されるしきい値を設定します。シェイプはアルファ値がしきい値より大きいピクセルによって定義されます。 0.0 (完全に透過) から 1.0 (完全に不透過) の範囲を外れた値は、この範囲に収められます。"
      },
      "initial_value": {
        "shape-image-threshold": "0.0"
      },
      "applies_to": ["浮動要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/shape-image-threshold",
      "inheritance": false
    },
    {
      "id": 333,
      "name": "shape-margin",
      "prefix": "shape",
      "description": "shape-margin は CSS のプロパティで、shape-outside を使用して作成された CSS シェイプのマージンを設定します。",
      "shorthand_property": null,
      "values": {
        "<length-percentage>": "シェイプのマージンを <length> 値または要素の包含ブロックの幅に対する <percentage> で設定します。"
      },
      "initial_value": {
        "shape-margin": "0"
      },
      "applies_to": ["浮動要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/shape-margin",
      "inheritance": false
    },
    {
      "id": 334,
      "name": "shape-outside",
      "prefix": "shape",
      "description": "shape-outside は CSS のプロパティで、隣接するインラインコンテンツが回り込むシェイプ (形状) を — 矩形でない場合もありますが — 定義します。既定では、インラインコンテンツはマージンボックスを回り込みます。shape-outside によって、この回り込みをカスタマイズし、テキストが単純なボックスではなく複雑なオブジェクトの周りを回り込めるようにします。",
      "shorthand_property": null,
      "values": {
        "none": "浮動領域は影響を受けません。インラインコンテンツは通常通り、要素のマージンボックスを回り込みます。",
        "<shape-box>": "浮動領域は浮動要素の辺の形状に従って (CSS ボックスモデル で定義された通りに) 計算されます。これはmargin-box、border-box、padding-box、content-box の何れかになります。この形状は border-radius プロパティで生成された丸い角も含みます (background-clip と同様の動作です)。",
        "<basic-shape>": "浮動領域は、inset()、circle()、ellipse()、polygon()、またはレベル 2 の仕様書で追加された path() の何れかによって生成された形状に基づいて計算されます。<shape-box> も提供された場合は、<basic-shape> 関数の参照ボックスを定義します。それ以外の場合、参照ボックスは既定で margin-box になります。",
        "<image>": "浮動領域は指定された <image> のアルファチャンネルに基づいて、 shape-image-threshold で定義されたように抽出され計算されます。"
      },
      "initial_value": {
        "shape-outside": "none"
      },
      "applies_to": ["浮動要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/shape-outside",
      "inheritance": false
    },
    {
      "id": 335,
      "name": "tab-size",
      "prefix": null,
      "description": "CSS の tab-size プロパティは、タブ文字 (U+0009) の表示幅の指定に用います。",
      "shorthand_property": null,
      "values": {
        "<integer>": "タブの幅として使用される空白文字（U+0020）の幅の倍数です。正の数でなければなりません。",
        "<length>": "タブの幅です。正の数でなければなりません。"
      },
      "initial_value": {
        "tab-size": 8
      },
      "applies_to": ["ブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/tab-size",
      "inheritance": true
    },
    {
      "id": 336,
      "name": "table-layout",
      "prefix": null,
      "description": "table-layout は CSS のプロパティで、<table> のセル、行、列のレイアウトに使用されるアルゴリズムを設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "既定値で、ほとんどのブラウザーが表の自動レイアウトアルゴリズムを使用します。表とセルの幅は中身に合うように調整されます。",
        "fixed": "表と列の幅は table 要素と col 要素の幅によって、または最初の行のセルの幅によって設定されます。後続する行のセルは列の幅に影響しません。\n\n「固定」(\"fixed\") レイアウト方式においては、表の 1 行目がダウンロードされ解析された時点で表全体がレンダリングできるようになります。これは「自動」レイアウト方式よりもレンダリング時間を高速にすることができますが、後続するセルのコンテンツが列の幅に合わなくなる可能性があります。各セルでは表の幅が分かっている場合、overflow プロパティを使用して、はみ出すコンテンツを切り取るかどうかを決めます。それ以外の場合、セルからはみ出すことはありません。"
      },
      "initial_value": {
        "table-layout": "auto"
      },
      "applies_to": ["table および inline-table 要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/table-layout",
      "inheritance": false
    },
    {
      "id": 337,
      "name": "text-align",
      "prefix": "text",
      "description": "text-align CSS プロパティは、ブロック要素または表のセルボックス内におけるインラインレベルコンテンツの水平方向の配置を設定します。これは vertical-align と同じように機能しますが、水平方向に機能することを意味します。",
      "shorthand_property": null,
      "values": {
        "start": "書字方向が左から右の場合は left、右から左の場合は right と同じです。",
        "end": "書字方向が左から右の場合は right、右から左の場合は left と同じです。",
        "left": "インラインコンテンツはラインボックスの左辺に寄せられます。",
        "right": "インラインコンテンツはラインボックスの右辺に寄せられます。",
        "center": "インラインコンテンツはラインボックス内で中央に寄せられます。",
        "justify": "インラインコンテンツは両端揃えになります。テキストは最終行を除いて、その左右の端がラインボックスの左右の端に揃うように間隔が空けられます。",
        "match-parent": "inherit と似ていますが、start と end の値は親要素の direction に従って計算されて、適切な left もしくは right の値で置き換えられます。"
      },
      "initial_value": {
        "text-align": "start。start に対応していないブラウザーでは、書字方向が ltr なら left、rtl なら right として動作する無名の値"
      },
      "applies_to": ["ブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-align",
      "inheritance": true
    },
    {
      "id": 338,
      "name": "text-align-last",
      "prefix": "text",
      "description": "text-align-last は CSS のプロパティで、ブロックの最後の行、あるいは強制的な改行の直前の行をどのように配置するかを設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "text-align の値と同じ方向に配置されます。ただし text-align が justify である場合は、text-align-last に start を設定した場合と同じ効果になります。",
        "start": "書字方向が左から右の場合は left、右から左の場合は right と同じです。",
        "end": "書字方向が左から右の場合は right、右から左の場合は left と同じです。",
        "left": "インラインコンテンツはラインボックスの左辺に寄せられます。",
        "right": "インラインコンテンツはラインボックスの右辺に寄せられます。",
        "center": "インラインコンテンツはラインボックス内で中央に寄せられます。",
        "justify": "インラインコンテンツは両端揃えになります。テキストは最終行を除いて、その左右の端がラインボックスの左右の端に揃うように間隔が空けられます。"
      },
      "initial_value": {
        "text-align-last": "auto"
      },
      "applies_to": ["ブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-align-last",
      "inheritance": true
    },
    {
      "id": 339,
      "name": "text-combine-upright",
      "prefix": "text",
      "description": "text-combine-upright は CSS のプロパティで、一文字分の空間に挿入する文字の組み合わせを設定します。組み合わせたテキストが 1em の幅より広い場合、ユーザーエージェントはコンテンツを 1em の幅に収めなければなりません。合成結果は、レイアウトおよび装飾においてグリフ一文字として扱われます。このプロパティは、縦書きモードでのみ効果があります。\n\nこれは、日本語の縦中横、中国語の 直書橫向 として知られる効果をもたらすために使用されます。",
      "shorthand_property": null,
      "values": {
        "none": "何も特別な処理をしません。",
        "all": "タイプセットのすべての文字を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。",
        "digits <integer>?": "指定した桁数 (整数値) までの連続した ASCII 数字 (U+0030–U+0039) を水平に並べてボックス内に収めます。この幅は、縦書きボックス内で一文字分の空間を取ります。整数値を省略した場合の値は 2 になります。2 ～ 4 までの範囲外の整数値は不正です。"
      },
      "initial_value": {
        "text-combine-upright": "none"
      },
      "applies_to": ["置換でないインライン要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-combine-upright",
      "inheritance": true
    },
    {
      "id": 340,
      "name": "text-decoration",
      "prefix": "text",
      "description": "text-decoration は CSS の一括指定プロパティで、テキストの装飾的な線の表示を設定します。これは text-decoration-line、text-decoration-color、text-decoration-style およびさらに新しい text-decoration-thickness プロパティの一括指定です。",
      "shorthand_property": [
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-style",
        "text-decoration-thickness"
      ],
      "values": {
        "text-decoration-color": "装飾の色を設定します。",
        "text-decoration-line": "使用する装飾の種類を設定します。 underline や line-through などです。",
        "text-decoration-style": "装飾に使用する線のスタイルを設定します。 solid, wavy, dashed などです。",
        "text-decoration-thickness": "装飾に使われる線の太さを設定します。"
      },
      "initial_value": {
        "text-decoration-color": "currentcolor",
        "text-decoration-line": "solid",
        "text-decoration-style": "none"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration",
      "inheritance": false
    },
    {
      "id": 341,
      "name": "text-decoration-color",
      "prefix": "text",
      "description": "text-decoration-color は CSS のプロパティで、text-decoration-line でテキストに追加された装飾の色を設定します。\n\n色はプロパティ値のスコープにある装飾、すなわち下線、上線、打消し線、それにスペルミスに印をつけるために使われるような波線などに適用されます。",
      "shorthand_property": null,
      "values": {
        "<color>": "装飾線の色です。"
      },
      "initial_value": {
        "text-decoration-color": "currentcolor"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-color",
      "inheritance": false
    },
    {
      "id": 342,
      "name": "text-decoration-line",
      "prefix": "text",
      "description": "text-decoration-line は CSS のプロパティで、下線や上線など、要素内の文字列に使われる装飾の種類を設定します。",
      "shorthand_property": null,
      "values": {
        "none": "テキストの装飾を行いません。",
        "underline": "テキストの各行に下線を引きます。",
        "overline": "テキストの各行の上線を引きます。",
        "line-through": "テキストの各行の中央を貫く線を引きます。"
      },
      "initial_value": {
        "text-decoration-line": "none"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-line",
      "inheritance": false
    },
    {
      "id": 343,
      "name": "text-decoration-skip-ink",
      "prefix": "text",
      "description": "text-decoration-skip-ink は CSS のプロパティで、上線や下線が文字のアセンダーやディセンダーを通過するときにどのように引くのかを指定します。",
      "shorthand_property": null,
      "values": {
        "none": "下線と上線は、アセンダーとディセンダーの部分を含め、テキストコンテンツの全体に渡って引かれます。",
        "auto": "既定値です。 — ブラウザーは、下線と上線が文字に触れたり近づいたりしないよう、中断を行う可能性があります。つまり、線が文字を横切ろうとするところで中断されます",
        "all": "ブラウザーは、下線や上線が文字に触れたり近づいたりしないように必ず中断を行います。これは、 auto の動作が中断を発生させない可能性がある中国語、日本語、韓国語の特定のフォントで有用です。"
      },
      "initial_value": {
        "text-decoration-skip-ink": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-skip-ink",
      "inheritance": true
    },
    {
      "id": 344,
      "name": "text-decoration-style",
      "prefix": "text",
      "description": "CSS の text-decoration-style プロパティは、 text-decoration-line で指定された線の種類を設定します。線の種類はすべての線に適用され text-decoration-line で定義された線ごとに異なる種類を定義する方法はありません。",
      "shorthand_property": null,
      "values": {
        "solid": "単独線を描画します。",
        "double": "二重線を描画します。",
        "dotted": "点線を描画します。",
        "dashed": "破線を描画します。",
        "wavy": "波線を描画します。"
      },
      "initial_value": {
        "text-decoration-style": "solid"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-style",
      "inheritance": false
    },
    {
      "id": 345,
      "name": "text-decoration-thickness",
      "prefix": "text",
      "description": "text-decoration-thickness は CSS のプロパティで、要素内のテキストに用いられる装飾線、例えば取り消し線、下線、上線の太さを設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "ブラウザーがテキスト装飾線の適切な太さを選択します。",
        "from-font": "フォントファイルに推奨する太さの情報が含まれている場合は、その値を使用します。フォントファイルにこの情報が含まれていない場合は、 auto が設定されているのと同様に動作し、ブラウザーが適切な太さを選択します。",
        "<length>": "テキスト装飾線の太さを <length> として指定し、フォントファイルの推奨値やブラウザーの既定値を無視します。",
        "<percentage>": "テキスト装飾線の太さを現在のフォントの 1em に対する <percentage> で指定します。パーセント値は相対値として継承されるので、フォントが変わるとそれに合わせて変わります。ブラウザーは最小でも 1 デバイスピクセルを使用しなければなりません。このプロパティを適用した場合、フォントの大きさが異なる子要素があっても、適用されたボックス全体で太さが一定になります。"
      },
      "initial_value": {
        "text-decoration-thickness": "auto"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration-thickness",
      "inheritance": false
    },
    {
      "id": 346,
      "name": "text-emphasis",
      "prefix": "text",
      "description": "text-emphasis は CSS のプロパティで、 (空白や制御文字を除く) テキストに圏点を適用します。これは text-emphasis-style と text-emphasis-color の一括指定です。",
      "shorthand_property": [
        "text-emphasis-color",
        "text-emphasis-style"
      ],
      "values": {
        "none": "圏点なし。",
        "filled": "図形が単色で塗りつぶされます。 filled も open も指定されていない場合は、これが既定値です。",
        "open": "図形が中抜きになります。",
        "dot": "記号として小さな円を表示します。filled dot は '•' (U+2022)、open dot は '◦' (U+25E6) です。",
        "circle": "記号として大きな円を表示します。filled circle は '●' (U+25CF)、open circle は '○' (U+25CB) です。これは、他の図形が与えられていない場合、横書きモードで既定の形状です。",
        "double-circle": "記号として二重丸を表示します。filled double-circle は '◉' (U+25C9)、open double-circle は '◎' (U+25CE) です。",
        "triangle": "記号として三角形を表示します。filled triangle は '▲' (U+25B2)、open triangle は '△' (U+25B3) です。",
        "sesame": "記号としてゴマを表示します。filled sesame は '﹅' (U+FE45)、open sesame は'﹆' (U+FE46) です。これは、他の図形が与えられていない場合、縦書きモードで既定の形状です。",
        "<string>": "記号として文字列を表示します。 <string> には 1 文字を超える文字列を指定しないでください。ユーザーエージェントは、 1 つより多い書記素クラスターから構成される文字列を短縮したり無視したりする可能性があります。",
        "<color>": "記号の色を定義します。 color を指定しない場合、既定では currentcolor です。"
      },
      "initial_value": {
        "text-emphasis-color": "none",
        "text-emphasis-style": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-emphasis",
      "inheritance": true
    },
    {
      "id": 347,
      "name": "text-emphasis-color",
      "prefix": "text",
      "description": "text-emphasis-color は CSS のプロパティで、圏点の色を設定します。この値は一括指定の text-emphasis を使用して設定することもできます。",
      "shorthand_property": null,
      "values": {
        "<color>": "記号の色を定義します。 color が存在しない場合、既定で currentcolor になります。"
      },
      "initial_value": {
        "text-emphasis-color": "currentcolor"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-emphasis-color",
      "inheritance": true
    },
    {
      "id": 348,
      "name": "text-emphasis-position",
      "prefix": "text",
      "description": "text-emphasis-position は CSS のプロパティで、圏点が描かれる位置を設定します。ルビのテキストと同様、圏点のために十分な空間がない場合は、行の高さが広げられます。",
      "shorthand_property": null,
      "values": {
        "over": "横書きモードでテキストの上に圏点を描きます。",
        "under": "横書きモードでテキストの下に圏点を描きます。",
        "right": "縦書きモードでテキストの右に圏点を描きます。",
        "left": "縦書きモードでテキストの左に圏点を描きます。"
      },
      "initial_value": {
        "text-emphasis-position": "over right"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-emphasis-position",
      "inheritance": true
    },
    {
      "id": 349,
      "name": "text-emphasis-style",
      "prefix": "text",
      "description": "text-emphasis-style は CSS のプロパティで、圏点の表示を設定します。設定やリセットに一括指定の text-emphasis を使用することもできます。",
      "shorthand_property": null,
      "values": {
        "none": "圏点なし。",
        "filled": "図形が単色で塗りつぶされます。 filled も open も指定されていない場合は、これが既定値です。",
        "open": "図形が中抜きになります。",
        "dot": "記号として小さな円を表示します。filled dot は '•' (U+2022)、open dot は '◦' (U+25E6) です。",
        "circle": "記号として大きな円を表示します。filled circle は '●' (U+25CF)、open circle は '○' (U+25CB) です。これは、他の図形が与えられていない場合、横書きモードで既定の形状です。",
        "double-circle": "記号として二重丸を表示します。filled double-circle は '◉' (U+25C9)、open double-circle は '◎' (U+25CE) です。",
        "triangle": "記号として三角形を表示します。filled triangle は '▲' (U+25B2)、open triangle は '△' (U+25B3) です。",
        "sesame": "記号としてゴマを表示します。 filled sesame は '﹅' (U+FE45)、 open sesame は '﹆' (U+FE46) です。",
        "<string>": "記号として文字列を表示します。 <string> には 1 文字を超える文字列を指定しないでください。ユーザーエージェントは、 1 つより多い書記素クラスターから構成される文字列を短縮したり無視したりする可能性があります。"
      },
      "initial_value": {
        "text-emphasis-style": "none"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-emphasis-style",
      "inheritance": true
    },
    {
      "id": 350,
      "name": "text-indent",
      "prefix": "text",
      "description": "text-indent は CSS のプロパティで、ブロック内のテキストの行の前に置く空白 (字下げ) の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "<length> を絶対値として字下げが指定されます。負の値も許可されます。利用できる単位は <length> をご覧ください。",
        "<percentage>": "包含ブロックの幅の <percentage> 分だけ字下げされます。"
      },
      "initial_value": {
        "text-indent": 0
      },
      "applies_to": ["ブロックコンテナー"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-indent",
      "inheritance": true
    },
    {
      "id": 351,
      "name": "text-justify",
      "prefix": "text",
      "description": "text-justify は CSS のプロパティで、要素に text-align: justify; が設定された時にテキストに適用される両端揃えの種類を設定します。",
      "shorthand_property": null,
      "values": {
        "none": "テキストの両端揃えは行われません。これは text-align をまったく設定しない場合と同様の効果を持ちますが、何らかの理由で両端揃えを有効または無効にする必要があるときに便利です。",
        "auto": "ブラウザーは性能と品質の釣り合いに基づいて、テキストの言語 (例えば英語か、日本語か、中国語かなど) に最も適切なものは何かも加味して、現在の状況のために最適な種類の揃え方を選択します。これは text-justify をまったく設定しない場合に使われる既定の揃え方です。",
        "inter-word": "単語間に間隔を挿入する (事実上 word-spacing を変化させる) ことでテキストを揃えるもので、これは英語や韓国語のように、空白で単語を区切る言語に最も適しています。",
        "inter-character": "文字間に間隔を挿入する (事実上 letter-spacing を変化させる) ことでテキストを揃えるもので、これは日本語のような言語に最も適しています。"
      },
      "initial_value": {
        "text-justify": "auto"
      },
      "applies_to": ["インラインレベルおよびテーブルセル要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-justify",
      "inheritance": true
    },
    {
      "id": 352,
      "name": "text-orientation",
      "prefix": "text",
      "description": "text-orientation は CSS のプロパティで、行内のテキストの向きを設定します。このプロパティは縦書きのテキスト (writing-mode が horizontal-tb 以外の場合) でのみ効果があります。これは縦書きを使用する言語の表示を制御したり、縦書きの表見出しを作成したりするのに有用です。",
      "shorthand_property": null,
      "values": {
        "mixed": "横書き用の文字を右に 90° 回転させ、縦書き用の文字は自然に配置します。既定値です。",
        "upright": "横書き用の文字を、縦書き用の字形と同様に自然に (正立で) 配置します。なお、このキーワードはすべての文字を左書きと見なします。 direction の使用値は ltr に強制されます。",
        "sideways": "全行を横書きで書いて 90° 回転したように配置します。",
        "sideways-right": "sideways の別名です。これは互換性のために維持されています。",
        "use-glyph-orientation": "SVG 要素上で、非推奨の SVG プロパティ glyph-orientation-vertical と glyph-orientation-horizontal の値を使用します。"
      },
      "initial_value": {
        "text-orientation": "mixed"
      },
      "applies_to": ["表の行グループ、列グループ、行、列を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-orientation",
      "inheritance": true
    },
    {
      "id": 353,
      "name": "text-overflow",
      "prefix": "text",
      "description": "text-overflow は CSS のプロパティで、非表示のあふれた内容をどのようにユーザーに知らせるのかを設定します。切り取られるか、省略記号 ('…') を表示するか、独自の文字列を表示するかです。",
      "shorthand_property": null,
      "values": {
        "clip": "このプロパティの既定値です。このキーワード値はコンテンツ領域の末端でテキストを切り取るので、文字の途中で切り取る可能性があります。文字と文字の間で切り取るには、対象のブラウザーが text-overflow の空文字列に対応していれば、 text-overflow: ''; を指定することができます。",
        "ellipsis": "このキーワード値は、切り取られたテキストを表現するために省略記号 ('…', U+2026 HORIZONTAL ELLIPSIS) を表示します。省略記号はコンテンツ領域内に表示され、表示テキストのサイズを更に狭めます。省略記号を表示する場所がなければ、切り取られます。"
      },
      "initial_value": {
        "text-overflow": "clip"
      },
      "applies_to": ["ブロックコンテナー要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-overflow",
      "inheritance": false
    },
    {
      "id": 354,
      "name": "text-rendering",
      "prefix": "text",
      "description": "text-rendering は CSS のプロパティで、テキストを描画するときの最適化方法に関する情報をレンダリングエンジンに提供します。\n\nブラウザーは速さ、読みやすさ、位置の正確さをトレードオフにします。",
      "shorthand_property": null,
      "values": {
        "auto": "ブラウザーはテキストを描画する際に、速さ、読みやすさ、位置の正確さの最適化について経験的な推測を行います。この値のブラウザーによる解釈の違いについては、ブラウザーの対応をご覧ください。",
        "optimizeSpeed": "ブラウザーは文字を描画する際に、読みやすさや位置の正確さよりも、速さを強調します。カーニングや合字を無効にします。",
        "optimizeLegibility": "ブラウザーは速さや位置の正確さよりも、読みやすさを強調します。カーニングを有効にし、合字は任意です。",
        "geometricPrecision": "ブラウザーは速さや読みやすさよりも、位置の正確さを強調します。フォントの一部の側面 — カーニングなど — は、倍率に比例しません。そのため、この値はこれらのフォントを使ったテキストを美しくすることができます。\n\nSVG では、テキストが拡大または縮小されるとき、ブラウザーはテキストの最終的な寸法 (特定のフォントの大きさと適用される倍率によって決まる) を計算し、プラットフォームのフォントシステムに計算値のフォントを要求します。しかし、大きさ 9 で倍率 140% のフォントを要求すると、フォントの大きさの結果は 12.6 となり、フォントシステムに存在するものではなくなるので、ブラウザーはフォントの大きさを 12 に丸めます。結果的に、テキストは段階的な倍率になります。\n\nしかし、 geometricPrecision は — レンダリングエンジンが完全に対応していれば — なめらかにテキストを拡縮することができます。倍率が大きい場合、文字列の描画があまり美しくならないかもしれませんが、寸法は Windows や Linux が対応しているフォントの大きさに切り上げられたり切り捨てられたりせず、期待通りになります。"
      },
      "initial_value": {
        "text-rendering": "auto"
      },
      "applies_to": ["テキスト要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-rendering",
      "inheritance": true
    },
    {
      "id": 355,
      "name": "text-shadow",
      "prefix": "text",
      "description": "text-shadow は CSS のプロパティで、テキストに影を追加します。文字列およびその装飾 (decoration) に適用される影のリストをカンマで区切ったリストで受け付けます。それぞれの影は、要素からの X および Y オフセット、影の明るさ、影の色のうちいくつかの組み合わせで記述します。",
      "shorthand_property": null,
      "values": {
        "<color>": "省略可。影の色です。オフセット値の前か後に指定できます。色が指定されなければ、ユーザーエージェントが選択した色が使われるので、ブラウザー間で一貫性を保つために、明示的に定義することが求められます。",
        "<color><offset-x> <offset-y>": "必須。これらの <length> 値はテキストに対する影のオフセットを指定します。 <offset-x> は水平方向の距離を指定します。負の値であればテキストの左に影を配置します。 <offset-y> は垂直方向の距離を指定します。負の値であればテキストの上に影を配置します。両方の値が 0 ならば、影はテキストの真後ろに配置されますが、 <blur-radius> の効果により一部だけが見えるかもしれません。",
        "<blur-radius>": "省略可。これは <length> 値です。指定されなければ、既定では 0 になります。この値が大きいほど、ぼかしは大きくなり、影は広く薄くなります。"
      },
      "initial_value": {
        "text-shadow": "none"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-shadow",
      "inheritance": true
    },
    {
      "id": 356,
      "name": "text-transform",
      "prefix": "text",
      "description": "text-transform は CSS のプロパティで、要素のテキストを大文字表記する方法を指定します。テキストをすべて大文字にしたり、すべて小文字にしたり、各単語の先頭を大文字にしたりすることを指定します。フリガナの読みやすさを向上するのにも役立ちます。",
      "shorthand_property": null,
      "values": {
        "uppercase": "すべての文字を大文字に変換させるキーワードです。",
        "lowercase": "すべての文字を小文字に変換させるキーワードです。",
        "none": "すべての文字を変換させないキーワードです。",
        "full-width": "一般的な東アジアの文字 (中国語や日本語など) において、強制的に文字 — 主に記号やラテン文字 — を正方形の枠内に (全角で) 表記して、揃えて表示するキーワードです。",
        "full-size-kana": "このキーワードは一般に <ruby> によるフリガナで使用され、すべての小文字の仮名文字を同等の大文字の仮名文字に変換することで、ルビで使われるフォントの大きさによる読みやすさの問題を解消します。"
      },
      "initial_value": {
        "text-transform": "none"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-transform",
      "inheritance": true
    },
    {
      "id": 357,
      "name": "text-underline-offset",
      "prefix": "text",
      "description": "text-underline-offset は CSS のプロパティで、 (text-decoration を使用して適用された) 下線のテキスト装飾線の本来の位置からのオフセット距離を設定します。",
      "shorthand_property": null,
      "values": {
        "auto": "ブラウザーが下線の適切なオフセットを選択します。",
        "<length>": "下線のオフセットを <length> で指定し、フォントファイルの提案やブラウザーの既定値を上書きします。オフセットがフォントサイズに合わせて変化するように、 em 単位を使用することを推奨します。",
        "<percentage>": "下線のオフセットを、要素のフォントにおける 1 em に対する <percentage> で指定します。パーセント値はは相対値として継承されるため、フォントの変化に応じて変化します。このプロパティを適用した場合、オフセットは、フォントサイズや垂直方向の配置が異なる子要素があっても、下線が適用されているボックス全体で一定となります。"
      },
      "initial_value": {
        "text-underline-offset": "auto"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-underline-offset",
      "inheritance": true
    },
    {
      "id": 358,
      "name": "text-underline-position",
      "prefix": "text",
      "description": "text-underline-position は CSS のプロパティであり、text-decoration プロパティの underline の値で設定される下線 (傍線) の位置を指定します。",
      "shorthand_property": null,
      "values": {
        "auto": "ユーザーエージェントは、傍線を文字のベースラインの位置に配置するか、その下に配置するかを独自のアルゴリズムで決定します。",
        "from-font": "フォントファイルに推奨される位置についての情報があった場合、その値を使用します。フォントファイルにこの情報がない場合は、auto が設定された場合の動作と同様、ブラウザーが適切な位置を選択します。",
        "under": "文字のベースラインの下、ディセンダーを越えない位置に強制的に傍線を設定します。これは、下付き文字が多用される化学式や数式の読みやすさを確保するのに便利です。",
        "left": "縦書きモードでは、このキーワードは強制的に傍線をテキストの左端に配置します。横書きモードでは、under と同じです。",
        "right": "縦書きモードでは、このキーワードは強制的に傍線をテキストの右側に配置します。横書きモードでは、under と同じです。"
      },
      "initial_value": {
        "text-underline-position": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-underline-position",
      "inheritance": true
    },
    {
      "id": 359,
      "name": "text-wrap",
      "prefix": "text",
      "description": "text-wrap は CSS の一括指定プロパティで、要素の中のテキストを折り返す方法を制御します。様々な値により、次のことを制御します。",
      "shorthand_property": [
        "text-wrap-mode",
        "text-wrap-style"
      ],
      "values": {
        "wrap": "テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行をまたがって折り返し、オーバーフローを最小限に抑えます。これが既定値です。",
        "nowrap": "テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します",
        "balance": "テキストは、各行の文字数を均等にする方法で折り返し、レイアウトの品質と読みやすさを向上させます。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（Chromium では 6 行以下、Firefox では 10 行以下）のテキストブロックにのみ対応しています。",
        "pretty": "wrapと同じ動作になりますが、ユーザーエージェントは速度よりも優れたレイアウトを優先する遅いアルゴリズムを使用します。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、オルファンの数を最小に保つ必要がある場合など）。",
        "stable": "wrap と同じ動作になりますが、ユーザーがコンテンツを編集しているときに、テキストブロック全体が折り返されるのではなく、編集中の行よりも前の行が静止します。"
      },
      "initial_value": {
        "text-wrap": "wrap"
      },
      "applies_to": ["text and block containers"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-wrap",
      "inheritance": true
    },
    {
      "id": 360,
      "name": "text-wrap-mode",
      "prefix": "text",
      "description": "text-wrap-mode は CSS プロパティで、要素内のテキストを折り返すかどうかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、text-wrap の一括指定を使って設定したり、リセットしたりすることができます。",
      "shorthand_property": null,
      "values": {
        "wrap": "テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行にまたがって折り返され、オーバーフローを最小限に抑えます。これが既定値です。",
        "nowrap": "テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。"
      },
      "initial_value": {
        "text-wrap-mode": "wrap"
      },
      "applies_to": ["text and block containers"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-wrap-mode",
      "inheritance": true
    },
    {
      "id": 361,
      "name": "text-wrap-style",
      "prefix": "text",
      "description": "text-wrap-style は CSS プロパティで、要素内のテキストをどのように折り返すかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、text-wrap の一括指定を使って設定したり、リセットしたりすることができます。",
      "shorthand_property": null,
      "values": {
        "auto": "テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。",
        "balance": "テキストは、各行の文字数を最適にバランスをとる方法で折り返され、レイアウトの品質と読みやすさが向上します。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（Chromium では 6 行以下、Firefox では 10 行以下）のテキストブロックにのみ対応しています。",
        "pretty": "wrapと同じ動作になりますが、ユーザーエージェントは速度よりも優れたレイアウトを優先する遅いアルゴリズムを使用します。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、オルファンの数を最小に保つ必要がある場合など）。",
        "stable": "wrap と同じ動作になりますが、ユーザーがコンテンツを編集しているときに、テキストブロック全体が折り返されるのではなく、編集中の行よりも前の行が静止します。"
      },
      "initial_value": {
        "text-wrap-style": "auto"
      },
      "applies_to": ["text and block containers"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/text-wrap-style",
      "inheritance": true
    },
    {
      "id": 362,
      "name": "top",
      "prefix": null,
      "description": "top は CSS のプロパティで、位置指定要素の垂直位置の決定に関与します。位置指定されていない要素には効果はありません。",
      "shorthand_property": null,
      "values": {
        "<length>": "負、null、または正の <length> で、以下のものを表します。",
        "<percentage>": "包含ブロックの高さに対する <percentage> です。",
        "auto": "以下のように指定します。",
        "inherit": "値が親要素（包含ブロックとは限りません）の計算値と同じであることを示すキーワードです。そして、この計算値は <length>, <percentage>, または auto キーワードと同様に扱われます。"
      },
      "initial_value": {
        "top": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/top",
      "inheritance": false
    },
    {
      "id": 363,
      "name": "touch-action",
      "prefix": null,
      "description": "touch-action は CSS のプロパティで、タッチ画面のユーザーが要素のある領域をどのように操作できるか（例えば、ブラウザー内に組み込まれたパンまたはズーム機能）を設定します。。",
      "shorthand_property": null,
      "values": {
        "auto": "ブラウザーがすべてのパンやズームのジェスチャーを扱うことを有効にします。",
        "none": "ブラウザーがすべてのパンやズームのジェスチャーを扱うことを無効にします。",
        "pan-x": "指 1 本で水平にパンするジェスチャーを有効にします。 pan-y, pan-up, pan-down, pinch-zoom と組み合わせることができます。",
        "pan-y": "指 1 本で垂直にパンするジェスチャーを有効にします。 pan-x, pan-left, pan-right, pinch-zoom と組み合わせることができます。",
        "manipulation": "パンおよびズームのジェスチャーは有効にしますが、ダブルタップでのズームなど、標準外の追加的なジェスチャーを無効します。ダブルタップでズームすることを無効にすることで、ユーザーが画面をタップしたとき、ブラウザーがクリックイベントの生成を待つ必要がなくなります。これは \"pan-x pan-y pinch-zoom\" の別名です (互換性のために、これも有効です)。",
        "pinch-zoom": "複数の指でのページのパンやズーム有効にします。これは pan- のあらゆる値と組み合わせることができます。"
      },
      "initial_value": {
        "touch-action": "auto"
      },
      "applies_to": ["非置換インライン要素、表の行、行グループ、表の列、列グループを除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/touch-action",
      "inheritance": false
    },
    {
      "id": 364,
      "name": "transform",
      "prefix": "transform",
      "description": "transform は CSS のプロパティで、与えられた要素を回転、拡大縮小、傾斜、移動することできます。これは、 CSS の視覚整形モデルの座標空間を変更します。",
      "shorthand_property": null,
      "values": {
        "<transform-function>": "適用される 1 つ以上の CSS 座標変換関数です。座標変換関数は、左から右へ順に重ねられ、つまり右から左の順に座標変換の合成の効果が適用されます。",
        "none": "座標変換を何も適用しないことを指定します。"
      },
      "initial_value": {
        "transform": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transform",
      "inheritance": false
    },
    {
      "id": 365,
      "name": "transform-box",
      "prefix": "transform",
      "description": "transform-box は CSS のプロパティで transform、独立した変換プロパティである translate、scale、rotate、および transform-origin プロパティが相対するレイアウトボックスを定義します。",
      "shorthand_property": null,
      "values": {
        "content-box": "コンテンツボックスを参照ボックスとして使用します。 <table> の参照ボックスはテーブルのボックスではなく、テーブルを囲んでいるボックスの境界ボックスになります。",
        "border-box": "境界ボックスを参照ボックスとして使用します。 <table> の参照ボックスはテーブルのボックスではなく、テーブルを囲んでいるボックスの境界ボックスになります。",
        "fill-box": "そのオブジェクトのバウンディングボックスを参照ボックスとして使用します。",
        "stroke-box": "ストロークのバウンディングボックスを参照ボックスとして使用します。",
        "view-box": "直近の SVG のビューポートを参照ボックスとして使用します。 SVG ビューポートに viewBox 属性が指定されていた場合、参照ボックスは viewBox 属性によって設定された座標系の原点に配置されます。また、参照ボックスの寸法は viewBox 属性の幅と高さの値に設定されます。関連する CSS レイアウトボックスを持つ要素の場合、 border-box として動作します。"
      },
      "initial_value": {
        "transform-box": "view-box"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transform-box",
      "inheritance": false
    },
    {
      "id": 366,
      "name": "transform-origin",
      "prefix": "transform",
      "description": "transform-origin は CSS のプロパティで、要素の座標変換 (transform) における原点を設定します。",
      "shorthand_property": null,
      "values": {
        "x-offset": "<length> または <percentage> の、ボックスの左端から座標変換の原点までの距離を示す値です。",
        "offset-keyword": "left, right, top, bottom, center のいずれかのキーワードで、対応するオフセットを表します。",
        "y-offset": "<length> または <percentage> の、ボックスの右端から座標変換の原点までの距離を示す値です。",
        "x-offset-keyword": "left, right, center のいずれかのキーワードで、ボックスの左端から座標変換の原点までの距離を示します。",
        "y-offset-keyword": "top, bottom, center のいずれかのキーワードで、ボックスの上端から座標変換の原点までの距離を示します。",
        "z-offset": "<length> 値 (<percentage> を指定すると文が無効になります) で、ユーザーの視点と z=0 原点の距離を示します。"
      },
      "initial_value": {
        "transform-origin": "50% 50% 0"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transform-origin",
      "inheritance": false
    },
    {
      "id": 367,
      "name": "transform-style",
      "prefix": "transform",
      "description": "transform-style は CSS のプロパティで、要素の子要素を 3D 空間に配置するのか、平面化して要素の平面に配置するのかを設定します。",
      "shorthand_property": null,
      "values": {
        "flat": "要素の子要素を要素自身の平面上に配置することを示します。",
        "preserve-3d": "要素の子要素を 3D 空間に配置することを示します。"
      },
      "initial_value": {
        "transform-style": "flat"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transform-style",
      "inheritance": false
    },
    {
      "id": 368,
      "name": "transition",
      "prefix": "transition",
      "description": "transition は CSS のプロパティで、 transition-property、 transition-duration、 transition-timing-function、 transition-delay、 transition-behavior の一括指定プロパティです。",
      "shorthand_property": [
        "transition-behavior",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function"
      ],
      "values": {
        "transition-behavior": "transition-behaviorを参照",
        "transition-delay": "transition-delayを参照",
        "transition-duration": "transition-durationを参照",
        "transition-property": "transition-propertyを参照",
        "transition-timing-function": "transition-timing-functionを参照"
      },
      "initial_value": {
        "transition-behavior": "normal",
        "transition-delay": "0s",
        "transition-duration": "0s",
        "transition-property": "すべて",
        "transition-timing-function": "ease"
      },
      "applies_to": ["すべての要素、::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition",
      "inheritance": false
    },
    {
      "id": 369,
      "name": "transition-behavior",
      "prefix": "transition",
      "description": "transition-behavior は CSS のプロパティで、プロパティは、アニメーションの動作が離散であるプロパティにトランジションを始めるかどうかを指定します。",
      "shorthand_property": null,
      "values": {
        "allow-discrete": "この要素では、離散アニメーションプロパティのトランジションが開始されます。",
        "normal": "この要素では、離散アニメーションプロパティのトランジションが開始されません。"
      },
      "initial_value": {
        "transition-behavior": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition-behavior",
      "inheritance": false
    },
    {
      "id": 370,
      "name": "transition-delay",
      "prefix": "transition",
      "description": "CSS の transition-delay プロパティは、値が変更されたときにプロパティのトランジション効果が始まるまでの待ち時間を指定します。",
      "shorthand_property": null,
      "values": {
        "<time>": "プロパティの値が変化してからトランジション効果が始まるまでの待ち時間を記述します。"
      },
      "initial_value": {
        "transition-delay": "0s"
      },
      "applies_to": ["すべての要素、::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition-delay",
      "inheritance": false
    },
    {
      "id": 371,
      "name": "transition-duration",
      "prefix": "transition",
      "description": "transition-duration は CSS のプロパティで、トランジションによるアニメーションが完了するまでの再生時間を秒数またはミリ秒数で指定します。既定値は 0s であり、これはアニメーションを実行しないことを示します。",
      "shorthand_property": null,
      "values": {
        "<time>": "プロパティの古い値から新しい値へ遷移するのにかかる時間を表す <time> 形式の値です。時間を 0s にすると、遷移が起こらないこと、すなわち、2 つの状態間の切り替えが瞬間的であることを示します。負の値を指定すると、宣言は無効になります。"
      },
      "initial_value": {
        "transition-duration": "0s"
      },
      "applies_to": ["すべての要素、::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition-duration",
      "inheritance": false
    },
    {
      "id": 372,
      "name": "transition-property",
      "prefix": "transition",
      "description": "transition-property は CSS のプロパティで、トランジション効果を適用する CSS プロパティを指定します。",
      "shorthand_property": null,
      "values": {
        "none": "どのプロパティもトランジションを行いません。",
        "all": "トランジションが可能なすべてのプロパティで、トランジションを行います。",
        "<custom-ident>": "値が変更されたとき、トランジション効果を適用するプロパティを識別する文字列です。"
      },
      "initial_value": {
        "transition-property": "すべて"
      },
      "applies_to": ["すべての要素、::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition-property",
      "inheritance": false
    },
    {
      "id": 373,
      "name": "transition-timing-function",
      "prefix": "transition",
      "description": "transition-timing-function は CSS のプロパティで、トランジション効果の影響を受ける CSS プロパティにおいて、中間状態の値を算出する方法を設定するために使用されます。",
      "shorthand_property": null,
      "values": {
        "<easing-function>": "各々の <easing-function> は transition-property で指定された、トランジションを行うプロパティに対応するイージング関数を表します。\n\n段階のないキーワード値 (ease、linear、ease-in-out、など) はそれぞれ 4 つの固定点による三次ベジェ曲線を表しており、 cubic-bezier() 関数の値は定義済みの値以外を使用することができます。段階のあるイージング関数は、入力の時間を時間的に等しい間隔で指定された数に分割します。これは、ステップ数とステップ位置によって定義されます。"
      },
      "initial_value": {
        "transition-timing-function": "ease"
      },
      "applies_to": ["すべての要素、::before / ::after 擬似要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/transition-timing-function",
      "inheritance": false
    },
    {
      "id": 374,
      "name": "translate",
      "prefix": null,
      "description": "translate は CSS のプロパティで、平行移動の座標変換を独自に、 transform プロパティから独立して指定することができます。これは一般的なユーザーインターフェイスの用途に適しており、 transform の値で指定する変換関数を正確に思い出す必要がなくなります。",
      "shorthand_property": null,
      "values": {
        "単一の <length-percentage> 値": "単一の <length> または <percentage> 値で、 X 軸方向の平行移動を指定します。 translate() （2D の平行移動）関数に単一の値を指定したものと同等です。",
        "2 つの <length-percentage> 値": "2 つの <length> または <percentage> 値で、 2D の平行移動における X および Y 軸方向の移動量を (それぞれ) 指定します。 translate() （2D の平行移動）関数に 2 つの値を指定したものと同等です。",
        "3 つの値": "2 つの <length-percentage> 値と 1 つの <length> 値で、 3D の平行移動における X, Y, Z 軸の移動量を（それぞれ）指定します。 translate3d() （3D の平行移動）関数と同等です。",
        "none": "平行移動が適用されないことを指定します。"
      },
      "initial_value": {
        "translate": "none"
      },
      "applies_to": ["座標変換可能要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/translate",
      "inheritance": false
    },
    {
      "id": 375,
      "name": "unicode-bidi",
      "prefix": null,
      "description": "unicode-bidi は CSS のプロパティで、 direction プロパティと共に、文書内の双方向テキストの扱いを指定します。例えば、テキストブロックに左書き (LTR) と右書き (RTL) の両方のテキストが含まれている場合、ユーザーエージェントは、複雑な Unicode アルゴリズムを用いてテキストの表示方法を決定します。 unicode-bidi プロパティは、このアルゴリズムを上書きして開発者がテキストの埋め込みを制御できるようにします。",
      "shorthand_property": null,
      "values": {
        "normal": "要素は、双方向アルゴリズムを尊重し、追加の埋め込みのレベルを提供しません。インライン要素に対しては、要素の境界に渡って、並べ替え作業を省略します。",
        "embed": "要素がインラインの場合、この値は双方向アルゴリズムを尊重し、追加の埋め込みのレベルを開きます。この埋め込みレベルの方向は、 direction プロパティにより与えられます。",
        "bidi-override": "インライン要素に対しては、この値で上書きされます。ブロックコンテナー要素に対しては、この値でインラインレベルの子孫を上書きし、別のブロックコンテナー要素は上書きしません。これは、要素内部に作用することを意味し、並べ替えは direction による順序に従います。双方向アルゴリズムの省略された部分は無視されます。",
        "isolate": "このキーワードは、要素のコンテナーの記述方向が、要素の内容を考慮せずに計算されることを示します。要素はその兄弟から隔離 (isolated) されます。双方向解決アルゴリズムが適用される時、そのコンテナー要素は、対象の要素を 1 個またはいくつかの U+FFFC Object Replacement Character として処理します。つまり、画像要素のように扱います。",
        "isolate-override": "このキーワードは、周囲のコンテンツに isolate キーワードの隔離処理を適用し、内部のコンテンツに bidi-override キーワードの上書き処理を適用します。",
        "plaintext": "このキーワードは、要素の記述方向を、その親要素の双方向状態や direction プロパティの値を考慮せずに計算します。記述方向は、Unicode Bidirectional Algorithm の P2 および P3 規則を用いて計算されます。 この値により、Unicode Bidirectional Algorithm に従うツールを用いてすでに整形されたデータを表示できます。"
      },
      "initial_value": {
        "unicode-bidi": "normal"
      },
      "applies_to": ["すべての要素。ただし一部の値はインラインでない要素には効果がありません"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/unicode-bidi",
      "inheritance": false
    },
    {
      "id": 376,
      "name": "user-select",
      "prefix": null,
      "description": "user-select は CSS のプロパティで、ユーザーがテキストを範囲選択できるかどうかを制御します。これは、テキストボックスを除いて、クロームとして読み込まれたコンテンツには影響を与えません。",
      "shorthand_property": null,
      "values": {
        "none": "対象要素とその子孫要素の文章は範囲選択できません。 Selection オブジェクトはこれらの要素も含むことができることに注意してください。",
        "auto": "auto の使用値は下記のように決められます。",
        "text": "ユーザーはテキストを範囲選択できます。",
        "all": "この要素の内容は不可分的に選択されます。選択範囲が要素の一部を含んだ場合、選択範囲はすべての子孫要素を含む要素全体が含まれなければなりません。子孫要素でダブルクリックや右クリックを行うと、この値が付けられている最も上位の先祖要素が範囲選択されます。",
        "contain": "要素の内部から選択を始めることができます。しかし、選択範囲は要素の境界内のみに限定されます。"
      },
      "initial_value": {
        "user-select": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/user-select",
      "inheritance": false
    },
    {
      "id": 377,
      "name": "vertical-align",
      "prefix": null,
      "description": "vertical-align は CSS のプロパティで、インラインボックス、インラインブロック、表セルボックスの垂直方向の配置を設定します。",
      "shorthand_property": null,
      "values": {
        "baseline": "要素のベースラインを親要素のベースラインに揃えます。一部の置換要素、例えば <textarea> などのベースラインは HTML 仕様で未定義です。このため、このキーワードの挙動はブラウザーにより異なるかもしれません。",
        "sub": "要素のベースラインを親要素の subscript-baseline に揃えます。",
        "super": "要素のベースラインを親要素の superscript-baseline に揃えます。",
        "text-top": "要素の上端を親要素のフォントの上端に揃えます。",
        "text-bottom": "要素の下端を親要素のフォントの下端に揃えます。",
        "middle": "要素の中央を親要素の baseline + x-height の半分 に揃えます。",
        "<length>": "要素のベースラインを、親要素のベースラインの指定値分上に揃えます。負の値を使えます。",
        "<percentage>": "<length> 値と似ていますが、line-height プロパティに対するパーセント値で指定します。負の値を使えます。"
      },
      "initial_value": {
        "vertical-align": "baseline"
      },
      "applies_to": ["インラインレベルおよびテーブルセル要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/vertical-align",
      "inheritance": false
    },
    {
      "id": 378,
      "name": "visibility",
      "prefix": null,
      "description": "visibility は CSS のプロパティで、文書のレイアウトを変更することなく要素を表示したり非表示にしたりします。このプロパティは <table> の行や列を隠すこともできます。",
      "shorthand_property": null,
      "values": {
        "visible": "要素のボックスが可視になります。",
        "hidden": "要素のボックスは不可視になります (描画されません) が、レイアウトには通常通り影響します。子孫要素は visibility が visible に設定されていれば可視になります。(タブ順で操作された時などに) 要素はフォーカスを受け取ることができません。",
        "collapse": "<table> の行、列、列グループ、行グループでは、行や列が不可視になり、 (表の列や行に display: none が適用された場合のように) 占めていた領域も除去されます。しかし、他の行や列の寸法は、不可視になった行や列のセルが存在するときのように計算されます。この値は表全体の幅や高さを強制的に再計算することなく、すばやく行や列を不可視にすることができます。\nフレックス項目では、不可視になり、占めていた領域は削除されます。\nXUL 要素では、通常は寸法に影響するその他のスタイルに関わらず、要素の寸法が常にゼロと計算されますが、マージンは有効になります。\nその他の要素では、 collapse は hidden と同じと扱われます。"
      },
      "initial_value": {
        "vertical-align": "visible"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/visibility",
      "inheritance": true
    },
    {
      "id": 379,
      "name": "white-space",
      "prefix": null,
      "description": "white-space は CSS のプロパティで、要素内のホワイトスペースをどのように扱うかを設定します。",
      "shorthand_property": null,
      "values": {
        "normal": "連続するホワイトスペースがまとめられます。ソース内の改行文字もホワイトスペースとして扱われます。行ボックスを埋めるために、必要なら行を折り返します。",
        "nowrap": "normal と同じくホワイトスペースを詰めますが、行の折り返しは行いません。",
        "pre": "連続するホワイトスペースはそのまま残され、行の折り返しは、ソース内の改行文字と、 <br> 要素でのみ行います。",
        "pre-wrap": "連続するホワイトスペースはそのまま残されます。行の折り返しは、改行文字や <br> 要素のあるときか、行ボックスを埋めるのに必要なときに行います。",
        "pre-line": "連続するホワイトスペースは詰められて 1 つになります。行の折り返しは、改行文字や <br> 要素のあるときか、行ボックスを埋めるのに必要なときに行われます。",
        "break-spaces": "下記の点を除いて、動作は pre-wrap と同じです。"
      },
      "initial_value": {
        "white-space": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/white-space",
      "inheritance": true
    },
    {
      "id": 380,
      "name": "white-space-collapse",
      "prefix": null,
      "description": "white-space-collapse は CSS プロパティで、要素内のホワイトスペースをどのように折りたたむかを制御します。",
      "shorthand_property": null,
      "values": {
        "collapse": "連続したホワイトスペースを折りたたみます。",
        "preserve": "連続したホワイトスペースと区間区切り文字を維持します。",
        "preserve-breaks": "連続したホワイトスペースを折りたたみますが、区間区切り文字は維持します。",
        "preserve-spaces": "連続したホワイトスペースを維持しますが、タブと区間区切り文字は空白に変換します。",
        "break-spaces": "動作は以下の点を除いて preserve と同じです。"
      },
      "initial_value": {
        "white-space-collapse": "collapse"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/white-space-collapse",
      "inheritance": true
    },
    {
      "id": 381,
      "name": "widows",
      "prefix": null,
      "description": "widows は CSS のプロパティで、ページ、領域、段の先頭に表示されるブロックコンテナーの最小行数を設定します。",
      "shorthand_property": null,
      "values": {
        "<integer>": "区切りの後の新しい断片の先頭に残すことができる最小行数です。値は正の数である必要があります。"
      },
      "initial_value": {
        "widows": "2"
      },
      "applies_to": ["ブロックコンテナー要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/widows",
      "inheritance": true
    },
    {
      "id": 382,
      "name": "width",
      "prefix": null,
      "description": "width は CSS のプロパティで、要素の幅を設定します。既定では、このプロパティはコンテンツ領域の幅を設定しますが、 box-sizing を border-box に設定すると、境界領域の幅を設定します。",
      "shorthand_property": null,
      "values": {
        "<length>": "絶対的な値で幅を定義します。",
        "<percentage>": "親となる包含ブロックの幅に対するパーセント値で定義します。",
        "auto": "指定された要素の幅をブラウザーが計算して決めます。",
        "max-content": "望ましい固有の幅です。",
        "min-content": "最小の固有の幅です。",
        "fit-content": "利用可能なスペースを使用しますが、max-content、つまり min(max-content, max(min-content, stretch)) を超えません。"
      },
      "initial_value": {
        "width": "auto"
      },
      "applies_to": ["ブロックコンテナー要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/width",
      "inheritance": false
    },
    {
      "id": 383,
      "name": "will-change",
      "prefix": null,
      "description": "CSS の will-change プロパティは、どのような要素の変更が予測されているかブラウザーに助言します。ブラウザーは要素が実際に変更される前に、最適化をセットアップすることができます。この種の最適化は、実際に変化が求められる前に、潜在的に高コストの処理を行うことで、ページの応答を向上させることができます。",
      "shorthand_property": null,
      "values": {
        "auto": "このキーワードは特定の意図を表現しません。ユーザーエージェントは通常通りの経験則と最適化を適用します。",
        "scroll-position": "まもなく要素のスクロール位置をアニメーション化、または変更することが予想されることを示します。",
        "content": "まもなく要素のコンテンツに対して何らかのアニメーション化、または変更が予想されることを示します。",
        "<custom-ident>": "まもなく要素で指定された名前のプロパティをアニメーション化、または変更されることが予想されることを示します。指定されたプロパティが一括指定プロパティの場合、それが展開されたすべてのプロパティが予想の対象となります。 unset, initial, inherit, will-change, auto, scroll-position, contents の値は指定できません。仕様では特定の値についての動作を定義していませんが、一般的に transform は合成レイヤーのヒントとなります。特定の CSS プロパティに対しては、 現在のところ Chrome は 2 つのアクションを取ります。新しい合成レイヤーを構築するか、または新しい重ね合わせコンテキストを構築します。"
      },
      "initial_value": {
        "will-change": "auto"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/will-change",
      "inheritance": false
    },
    {
      "id": 384,
      "name": "word-break",
      "prefix": null,
      "description": "既定の改行規則を使用します。",
      "shorthand_property": null,
      "values": {
        "normal": "このキーワードは特定の意図を表現しません。ユーザーエージェントは通常通りの経験則と最適化を適用します。",
        "break-all": "CJK (中国語、台湾語、日本語、韓国語) 以外のテキストにおいて、単語中などでの文字の改行に関する禁則処理を解除し、どの文字の間でも改行するようにします。",
        "keep-all": "CJK テキストの改行を許可しません。 CJK 以外のテキストについては normal と同じ挙動となります。"
      },
      "initial_value": {
        "word-break": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/word-break",
      "inheritance": true
    },
    {
      "id": 385,
      "name": "word-spacing",
      "prefix": null,
      "description": "word-spacing は CSS のプロパティで、タグや単語の間隔に関する挙動を指定します。",
      "shorthand_property": null,
      "values": {
        "normal": "現在のフォントやブラウザ―で定義された普通の単語の間隔です。",
        "<length>": "フォントによって定義された単語の間隔に追加する間隔を定義します。",
        "<percentage>": "文字の advance width を基準とした追加する間隔の量をパーセント値で指定します。"
      },
      "initial_value": {
        "word-spacing": "normal"
      },
      "applies_to": ["すべての要素。 ::first-letterおよび::first-line にも適用されます。"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/word-spacing",
      "inheritance": true
    },
    {
      "id": 386,
      "name": "writing-mode",
      "prefix": null,
      "description": "writing-mode は CSS のプロパティで、テキストの行のレイアウトを横書きにするか縦書きにするか、ブロックのフロー方向を左向きにするか右向きにするかを設定します。文書全体に設定する場合は、ルート要素 (HTML 文書の場合は html 要素) に設定してください。",
      "shorthand_property": null,
      "values": {
        "horizontal-tb": "ltr の言語では、内容物は左から右へ水平に流れます。 rtl の言語では、内容物は右から左へ水平に流れます。次の水平の行は、前の行の下に配置されます。",
        "vertical-rl": "ltr の言語では、内容物は上から下へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。 rtl の言語では、内容物は下から上へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。",
        "vertical-lr": "ltr の言語では、内容物は上から下へ垂直に流れ、次の垂直の行は、前の行の右に配置されます。 rtl の言語では、内容物は下から上へ垂直に流れ、次の垂直の行は、前の行の左に配置されます。"
      },
      "initial_value": {
        "writing-mode": "horizontal-tb"
      },
      "applies_to": ["表の行グループ、表の列グループ、表の行、表の列を除くすべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/writing-mode",
      "inheritance": true
    },
    {
      "id": 387,
      "name": "z-index",
      "prefix": null,
      "description": "z-index は CSS のプロパティで、位置指定要素とその子孫要素、またはフレックスアイテムやグリッドアイテムの z 順を定義します。 z-index がより大きな要素はより小さな要素の上に重なります。",
      "shorthand_property": null,
      "values": {
        "auto": "ボックスはローカルな重ね合わせコンテキストを新たに作りません。現在の重ね合わせコンテキストで作られたボックスは、親ボックスと同じ重ね合わせレベルを持ちます。",
        "<integer>": "この整数値は、現在の重ね合わせコンテキストで作られたボックスの重ね合わせレベルです。ボックスは重ね合わせレベル 0 のローカルの重ね合わせコンテキストを作ります。これは、子孫要素の z-index は、この要素の外部にある要素の z-index とは比較されないということです。"
      },
      "initial_value": {
        "z-index": "auto"
      },
      "applies_to": ["位置指定要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/z-index",
      "inheritance": false
    },
    {
      "id": 388,
      "name": "zoom",
      "prefix": null,
      "description": "要素の拡大レベルを制御するには、CSS の zoom プロパティを使用することができます。このプロパティの代わりに、transform: scale() を使用することもできます。\n\nzoom プロパティは、対象となる要素を拡大縮小し、ページレイアウトに影響を与えます。拡大縮小の際、デフォルトの writing-mode を使用している場合、拡大縮小された要素は上部と中央から拡大縮小されます。\n\n対照的に、scale() を使用して拡大縮小された要素は、レイアウトの再計算やページ上の他の要素を移動させることはありません。scale() を使用して、内容が含む要素よりも大きくなった場合は、オーバーフローが有効になります。さらに、scale() を使用して調整された要素は、デフォルトでは中心から変形します。これは、transform-origin プロパティで変更できます。",
      "shorthand_property": null,
      "values": {
        "normal": "要素を通常のサイズでレンダリングします。",
        "reset": "ユーザーが非ピンチベースのズームを利用したとき（例えば Ctrl - - または Ctrl + + のキーボード・ショートカットを利用したとき）は要素を拡大縮小しない。この値を使用せず、代わりに標準の unset 値を使用してください。",
        "<percentage>": "ズーム率です。100% と normal は等価です。100% よりも大きな値はズームイン、100% よりも小さな値はズームアウトします。",
        "<number>": "ズーム率です。対応するパーセンテージ（1.0 = 100% = normal）に相当します。1.0 よりも大きな値はズームイン、1.0 よりも小さな値はズームアウトします。"
      },
      "initial_value": {
        "zoom": "normal"
      },
      "applies_to": ["すべての要素"],
      "url": "https://developer.mozilla.org/ja/docs/Web/CSS/zoom",
      "inheritance": false
    }
  ];

  const src = 'images/Group 1.svg';
  const search = document.querySelector('.search__input');
  let filteredProperties = properties;
  let timer;
  let col = Array.from(document.querySelectorAll('.col')).slice().reverse().find(col => getComputedStyle(col).display !== 'none')
  const propetiesDiv = document.querySelector('.properties');
  const currentWidth = window.innerWidth;
  
  column();

  search.addEventListener('input', e => {
    // フィルタリングする
    filteredProperties = properties.filter(property => {
      return property.name.startsWith(e.target.value.toLowerCase()); 
    });

    column();
  });

  window.addEventListener('resize', e => {
    // 横幅が変わった時のみ処理を実行させるためのもの
    if (currentWidth === window.innerWidth) {
      return;
    }

    //直前のタイマーをキャンセル
    clearTimeout(timer);

    timer = setTimeout(column, 300);
  });

  function column() {
    col = Array.from(document.querySelectorAll('.col')).slice().reverse().find(col => getComputedStyle(col).display !== 'none')
      const colNum = col.dataset.col;
      const propetiesDivChildren = propetiesDiv.children;

      Array.from(propetiesDivChildren).forEach((item, key) => {
        if ((key + 1) > 1) item.remove();
      });
  
      if (colNum === "1") {
        append();
      }
  
      if (colNum === "2") {
        const ul2 = document.createElement('ul');
        ul2.classList.add('properties__item-parent');
        propetiesDiv.appendChild(ul2);

        append();
      }
  
      if (colNum === "3") {
        const ul2 = document.createElement('ul');
        ul2.classList.add('properties__item-parent');
        propetiesDiv.appendChild(ul2);
        const ul3 = document.createElement('ul');
        ul3.classList.add('properties__item-parent');
        propetiesDiv.appendChild(ul3);

        append();
      }

      open();
  }

  // 配列を分割する関数
  function splitArray(array, col) {
      // 配列の長さを取得
      const length = array.length;
      // 各部分の長さを計算
      const partLength = Math.ceil(length / col);

    const splitedArray = [];
      
      // 配列を分割
      for (let i = 1; i <= col; i++) {
          splitedArray.push(array.slice(partLength * (i - 1), partLength * i));
      }

      return splitedArray;
  }

  // 要素が非表示かどうか
  function isHidden(element) {
    if (!element || !(element instanceof Element)) {
      return false;
    }

    const style = window.getComputedStyle(element);
    const displayValue = style.getPropertyValue('display');

    return (displayValue === 'none')
  }

  // プロパティリストを挿入
  function append() {
    const propertiesList = Array.from(document.querySelectorAll('.properties__item-parent'));
    const propertiesListNum = propertiesList.length;
    let index = 0;
    const limit = Math.ceil(filteredProperties.length / propertiesListNum);

    propertiesList.forEach(item => {
      item.innerHTML = '';
    });

    filteredProperties.forEach(property => {
      createPropertyElement(propertiesList[index], property);

      if (limit === propertiesList[index].childElementCount) {
        index++;
      };
    });
  }

  // プロパティを開く
  function open() {
    const properties__inner = document.querySelectorAll('.properties__inner');
    const properties__link = document.querySelectorAll('.properties__link');
  
    properties__inner.forEach(item => {
      item.addEventListener('click', e => {
        // クリックされたproperties__inner要素を取得
        const clickedItem = e.currentTarget.parentNode;
        
        // 子要素のproperties__detailを取得
        const detailElement = clickedItem.querySelector('.properties__detail');
    
        clickedItem.classList.toggle('open');
      });
    });
  
    // 伝播防止
    properties__link.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
      });
    });
  }

  function createPropertyElement(propertiesList, property) {
    // <li class="properties__item"> を作成する
    const listItem = document.createElement('li');
    listItem.classList.add('properties__item');

    // <div class="properties__inner"> を作成する
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('properties__inner');
    listItem.appendChild(innerDiv);

    // <h3 class="properties__name"> を作成する
    const nameHeading = document.createElement('h3');
    nameHeading.classList.add('properties__name');
    nameHeading.textContent = property.name;
    innerDiv.appendChild(nameHeading);

    // <div class="properties__column"> を作成する
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('properties__column');
    innerDiv.appendChild(columnDiv);

    // <a class="properties__link"> を作成する
    const linkAnchor = document.createElement('a');
    linkAnchor.classList.add('properties__link');
    linkAnchor.href = property.url; // href を設定する
    linkAnchor.textContent = 'DOCS';
    linkAnchor.target = '_blank';
    columnDiv.appendChild(linkAnchor);

    // <img class="properties__triangle"> を作成する
    const triangleImg = document.createElement('img');
    triangleImg.classList.add('properties__triangle');
    triangleImg.src = src; // 画像のパスを設定する
    triangleImg.alt = '状態確認';
    columnDiv.appendChild(triangleImg);

    // <div class="properties__detail"> を作成する
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('properties__detail');
    listItem.appendChild(detailDiv);

    // <p class="properties__explanation"> を作成する
    const explanationPara = document.createElement('p');
    explanationPara.classList.add('properties__explanation');
    explanationPara.textContent = property.description; // 内容を設定する
    detailDiv.appendChild(explanationPara);

    // <ul class="properties__detail-list"> を作成する
    const detailList = document.createElement('ul');
    detailList.classList.add('properties__detail-list');
    detailDiv.appendChild(detailList);

    if (property.shorthand_property) {
      // 一括プロパティの項目を作成する
      const bulkPropertiesItem = document.createElement('li');
      bulkPropertiesItem.classList.add('properties__detail-item');
      detailList.appendChild(bulkPropertiesItem);
  
      const bulkPropertiesTitle = document.createElement('h4');
      bulkPropertiesTitle.classList.add('detail-title');
      bulkPropertiesTitle.textContent = '一括プロパティ';
      bulkPropertiesItem.appendChild(bulkPropertiesTitle);
  
      const bulkPropertiesExplanations = document.createElement('ul');
      bulkPropertiesExplanations.classList.add('detail-explanations');
      bulkPropertiesItem.appendChild(bulkPropertiesExplanations);
  
      // 各一括プロパティの説明項目を作成する
      property.shorthand_property.forEach(item => {
        const bulkPropertiesExplanationsItem = document.createElement('li');
        bulkPropertiesExplanationsItem.classList.add('detail-explanations-item');
        bulkPropertiesExplanations.appendChild(bulkPropertiesExplanationsItem);
  
        const explanationBox = document.createElement('p');
        explanationBox.classList.add('explanation-box');
        explanationBox.textContent = item; // 内容を設定する
        bulkPropertiesExplanationsItem.appendChild(explanationBox);
      });
    }

    // 値の項目を作成する
    const valuePropertiesItem = document.createElement('li');
    valuePropertiesItem.classList.add('properties__detail-item');
    detailList.appendChild(valuePropertiesItem);

    const valuePropertiesTitle = document.createElement('h4');
    valuePropertiesTitle.classList.add('detail-title');
    valuePropertiesTitle.textContent = '値';
    valuePropertiesItem.appendChild(valuePropertiesTitle);

    const valuePropertiesExplanations = document.createElement('ul');
    valuePropertiesExplanations.classList.add('detail-explanations');
    valuePropertiesItem.appendChild(valuePropertiesExplanations);

    // 各値の説明項目を作成する
    Object.keys(property.values).forEach(key => {
      const valuePropertiesExplanationsItem = document.createElement('li');
      valuePropertiesExplanationsItem.classList.add('detail-explanations-item');
      valuePropertiesExplanations.appendChild(valuePropertiesExplanationsItem);
  
      const namePara = document.createElement('p');
      namePara.classList.add('detail-explanations-item__name');
      namePara.textContent = key;
      valuePropertiesExplanationsItem.appendChild(namePara);
  
      const explanationPara = document.createElement('p');
      explanationPara.classList.add('detail-explanations-item__explanation');
      explanationPara.textContent = property.values[key]; // 内容を設定する
      valuePropertiesExplanationsItem.appendChild(explanationPara);
    });

    // 初期値の項目を作成する
    const initialValueItem = document.createElement('li');
    initialValueItem.classList.add('properties__detail-item');
    detailList.appendChild(initialValueItem);

    const initialValueTitle = document.createElement('h4');
    initialValueTitle.classList.add('detail-title');
    initialValueTitle.textContent = '初期値';
    initialValueItem.appendChild(initialValueTitle);

    const initialValueExplanations = document.createElement('ul');
    initialValueExplanations.classList.add('detail-explanations');
    initialValueItem.appendChild(initialValueExplanations);

    Object.keys(property.initial_value).forEach(key => {
      const initialValueExplanationsItem = document.createElement('li');
      initialValueExplanationsItem.classList.add('detail-explanations-item');
      initialValueExplanations.appendChild(initialValueExplanationsItem);
  
      const initialValueNamePara = document.createElement('p');
      initialValueNamePara.classList.add('detail-explanations-item__name');
      initialValueNamePara.textContent = key;
      initialValueExplanationsItem.appendChild(initialValueNamePara);
  
      const initialValueExplanationPara = document.createElement('p');
      initialValueExplanationPara.classList.add('detail-explanations-item__explanation');
      initialValueExplanationPara.textContent = property.initial_value[key]; // 内容を設定する
      initialValueExplanationsItem.appendChild(initialValueExplanationPara);
    });

    // 適用できる要素の項目を作成する
    const applicableElementsItem = document.createElement('li');
    applicableElementsItem.classList.add('properties__detail-item');
    detailList.appendChild(applicableElementsItem);

    const applicableElementsTitle = document.createElement('h4');
    applicableElementsTitle.classList.add('detail-title');
    applicableElementsTitle.textContent = '適用できる要素';
    applicableElementsItem.appendChild(applicableElementsTitle);

    property.applies_to.forEach(item => {
      const applicableElementsExplanation = document.createElement('p');
      applicableElementsExplanation.classList.add('explanation-box');
      applicableElementsExplanation.textContent = 'すべての要素とテキスト。 ::first-letterおよび::first-line にも適用されます。';
      applicableElementsItem.appendChild(applicableElementsExplanation);
    });

    // 継承の項目を作成する
    const inheritanceItem = document.createElement('li');
    inheritanceItem.classList.add('properties__detail-item');
    detailList.appendChild(inheritanceItem);

    const inheritanceTitle = document.createElement('h4');
    inheritanceTitle.classList.add('detail-title');
    inheritanceTitle.textContent = '継承';
    inheritanceItem.appendChild(inheritanceTitle);

    const inheritanceExplanation = document.createElement('p');
    inheritanceExplanation.classList.add('explanation-box');
    inheritanceExplanation.textContent = property.inheritance ? 'あり' : 'なし';
    inheritanceItem.appendChild(inheritanceExplanation);

    propertiesList.appendChild(listItem);
  }
}