import { s } from "../helpers";

const commonCommandTransformers = {
  "#": s`#`,
  " ": s` `,
  ",": s`&thinsp;`,
  "{": s`{`,
  "}": s`}`,
  "&": s`&`,
  "@": s`@`,
  "%": s`%`,
  newpage: s``,
  _: s`_`,
  mathexclam: s`!`,
  mathoctothorpe: s`#`,
  mathdollar: s`$`,
  mathpercent: s`%`,
  mathampersand: s`&`,
  lparen: s`(`,
  rparen: s`)`,
  mathplus: s`+`,
  mathcomma: s`,`,
  mathperiod: s`.`,
  mathslash: s`/`,
  mathcolon: s`:`,
  mathsemicolon: s`;`,
  less: s`<`,
  equal: s`=`,
  greater: s`>`,
  mathquestion: s`?`,
  mathatsign: s`@`,
  lbrack: s`[`,
  backslash: s`\\`,
  rbrack: s`]`,
  lbrace: s`{`,
  vert: s`|`,
  lvert: s`|`,
  rvert: s`|`,
  rbrace: s`}`,
  mathsterling: s`£`,
  mathyen: s`¥`,
  mathsection: s`§`,
  neg: s`¬`,
  pm: s`±`,
  mathparagraph: s`¶`,
  cdotp: s`·`,
  times: s`×`,
  matheth: s`ð`,
  div: s`÷`,
  Zbar: s`Ƶ`,
  Alpha: s`Α`,
  Beta: s`Β`,
  Gamma: s`Γ`,
  Delta: s`Δ`,
  Epsilon: s`Ε`,
  Zeta: s`Ζ`,
  Eta: s`Η`,
  Theta: s`Θ`,
  Iota: s`Ι`,
  Kappa: s`Κ`,
  Lambda: s`Λ`,
  Mu: s`Μ`,
  Nu: s`Ν`,
  Xi: s`Ξ`,
  Omicron: s`Ο`,
  Pi: s`Π`,
  Rho: s`Ρ`,
  Sigma: s`Σ`,
  Tau: s`Τ`,
  Upsilon: s`Υ`,
  Phi: s`Φ`,
  Chi: s`Χ`,
  Psi: s`Ψ`,
  Omega: s`Ω`,
  alpha: s`α`,
  beta: s`β`,
  gamma: s`γ`,
  delta: s`δ`,
  varepsilon: s`ε`,
  zeta: s`ζ`,
  eta: s`η`,
  theta: s`θ`,
  iota: s`ι`,
  kappa: s`κ`,
  lambda: s`λ`,
  mu: s`μ`,
  nu: s`ν`,
  xi: s`ξ`,
  omicron: s`ο`,
  pi: s`π`,
  rho: s`ρ`,
  varsigma: s`ς`,
  sigma: s`σ`,
  tau: s`τ`,
  upsilon: s`υ`,
  varphi: s`φ`,
  chi: s`χ`,
  psi: s`ψ`,
  omega: s`ω`,
  vartheta: s`ϑ`,
  phi: s`ϕ`,
  varpi: s`ϖ`,
  upDigamma: s`Ϝ`,
  updigamma: s`ϝ`,
  varkappa: s`ϰ`,
  varrho: s`ϱ`,
  varTheta: s`ϴ`,
  epsilon: s`ϵ`,
  upbackepsilon: s`϶`,
  horizbar: s`―`,
  Vert: s`‖`,
  twolowline: s`‗`,
  dagger: s`†`,
  ddagger: s`‡`,
  smblkcircle: s`•`,
  enleadertwodots: s`‥`,
  ldots: s`…`,
  prime: s`′`,
  dprime: s`″`,
  trprime: s`‴`,
  backprime: s`‵`,
  backdprime: s`‶`,
  backtrprime: s`‷`,
  caretinsert: s`‸`,
  Exclam: s`‼`,
  tieconcat: s`⁀`,
  hyphenbullet: s`⁃`,
  fracslash: s`⁄`,
  Question: s`⁇`,
  closure: s`⁐`,
  qprime: s`⁗`,
  euro: s`€`,
  leftharpoonaccent: s`⃐`,
  overleftharpoon: s`⃐`,
  rightharpoonaccent: s`⃑`,
  overrightharpoon: s`⃑`,
  vertoverlay: s`⃒`,
  overleftarrow: s`⃖`,
  overrightarrow: s`⃗`,
  vec: s`⃗`,
  dddot: s`⃛`,
  ddddot: s`⃜`,
  enclosecircle: s`⃝`,
  enclosesquare: s`⃞`,
  enclosediamond: s`⃟`,
  overleftrightarrow: s`⃡`,
  enclosetriangle: s`⃤`,
  annuity: s`⃧`,
  threeunderdot: s`⃨`,
  widebridgeabove: s`⃩`,
  underrightharpoondown: s`⃬`,
  underleftharpoondown: s`⃭`,
  underleftarrow: s`⃮`,
  underrightarrow: s`⃯`,
  asteraccent: s`⃰`,
  Eulerconst: s`ℇ`,
  Planckconst: s`ℎ`,
  hslash: s`ℏ`,
  Im: s`ℑ`,
  ell: s`ℓ`,
  wp: s`℘`,
  Re: s`ℜ`,
  mho: s`℧`,
  turnediota: s`℩`,
  Angstrom: s`Å`,
  Finv: s`Ⅎ`,
  aleph: s`ℵ`,
  beth: s`ℶ`,
  gimel: s`ℷ`,
  daleth: s`ℸ`,
  Game: s`⅁`,
  sansLturned: s`⅂`,
  sansLmirrored: s`⅃`,
  Yup: s`⅄`,
  PropertyLine: s`⅊`,
  upand: s`⅋`,
  leftarrow: s`←`,
  uparrow: s`↑`,
  rightarrow: s`→`,
  downarrow: s`↓`,
  leftrightarrow: s`↔`,
  updownarrow: s`↕`,
  nwarrow: s`↖`,
  nearrow: s`↗`,
  searrow: s`↘`,
  swarrow: s`↙`,
  nleftarrow: s`↚`,
  nrightarrow: s`↛`,
  leftwavearrow: s`↜`,
  rightwavearrow: s`↝`,
  twoheadleftarrow: s`↞`,
  twoheaduparrow: s`↟`,
  twoheadrightarrow: s`↠`,
  twoheaddownarrow: s`↡`,
  leftarrowtail: s`↢`,
  rightarrowtail: s`↣`,
  mapsfrom: s`↤`,
  mapsup: s`↥`,
  mapsto: s`↦`,
  mapsdown: s`↧`,
  updownarrowbar: s`↨`,
  hookleftarrow: s`↩`,
  hookrightarrow: s`↪`,
  looparrowleft: s`↫`,
  looparrowright: s`↬`,
  leftrightsquigarrow: s`↭`,
  nleftrightarrow: s`↮`,
  downzigzagarrow: s`↯`,
  Lsh: s`↰`,
  Rsh: s`↱`,
  Ldsh: s`↲`,
  Rdsh: s`↳`,
  linefeed: s`↴`,
  carriagereturn: s`↵`,
  curvearrowleft: s`↶`,
  curvearrowright: s`↷`,
  barovernorthwestarrow: s`↸`,
  barleftarrowrightarrowbar: s`↹`,
  acwopencirclearrow: s`↺`,
  cwopencirclearrow: s`↻`,
  leftharpoonup: s`↼`,
  leftharpoondown: s`↽`,
  upharpoonright: s`↾`,
  upharpoonleft: s`↿`,
  rightharpoonup: s`⇀`,
  rightharpoondown: s`⇁`,
  downharpoonright: s`⇂`,
  downharpoonleft: s`⇃`,
  rightleftarrows: s`⇄`,
  updownarrows: s`⇅`,
  leftrightarrows: s`⇆`,
  leftleftarrows: s`⇇`,
  upuparrows: s`⇈`,
  rightrightarrows: s`⇉`,
  downdownarrows: s`⇊`,
  leftrightharpoons: s`⇋`,
  rightleftharpoons: s`⇌`,
  nLeftarrow: s`⇍`,
  nLeftrightarrow: s`⇎`,
  nRightarrow: s`⇏`,
  Leftarrow: s`⇐`,
  Uparrow: s`⇑`,
  Rightarrow: s`⇒`,
  Downarrow: s`⇓`,
  Leftrightarrow: s`⇔`,
  Updownarrow: s`⇕`,
  Nwarrow: s`⇖`,
  Nearrow: s`⇗`,
  Searrow: s`⇘`,
  Swarrow: s`⇙`,
  Lleftarrow: s`⇚`,
  Rrightarrow: s`⇛`,
  leftsquigarrow: s`⇜`,
  rightsquigarrow: s`⇝`,
  nHuparrow: s`⇞`,
  nHdownarrow: s`⇟`,
  leftdasharrow: s`⇠`,
  updasharrow: s`⇡`,
  rightdasharrow: s`⇢`,
  downdasharrow: s`⇣`,
  barleftarrow: s`⇤`,
  rightarrowbar: s`⇥`,
  leftwhitearrow: s`⇦`,
  upwhitearrow: s`⇧`,
  rightwhitearrow: s`⇨`,
  downwhitearrow: s`⇩`,
  whitearrowupfrombar: s`⇪`,
  circleonrightarrow: s`⇴`,
  downuparrows: s`⇵`,
  rightthreearrows: s`⇶`,
  nvleftarrow: s`⇷`,
  nvrightarrow: s`⇸`,
  nvleftrightarrow: s`⇹`,
  nVleftarrow: s`⇺`,
  nVrightarrow: s`⇻`,
  nVleftrightarrow: s`⇼`,
  leftarrowtriangle: s`⇽`,
  rightarrowtriangle: s`⇾`,
  leftrightarrowtriangle: s`⇿`,
  forall: s`∀`,
  complement: s`∁`,
  partial: s`∂`,
  exists: s`∃`,
  nexists: s`∄`,
  varnothing: s`∅`,
  increment: s`∆`,
  nabla: s`∇`,
  in: s`∈`,
  notin: s`∉`,
  smallin: s`∊`,
  ni: s`∋`,
  nni: s`∌`,
  smallni: s`∍`,
  QED: s`∎`,
  prod: s`∏`,
  coprod: s`∐`,
  sum: s`∑`,
  minus: s`−`,
  mp: s`∓`,
  dotplus: s`∔`,
  divslash: s`∕`,
  smallsetminus: s`∖`,
  ast: s`∗`,
  vysmwhtcircle: s`∘`,
  vysmblkcircle: s`∙`,
  sqrt: s`√`,
  surd: s`√`,
  cuberoot: s`∛`,
  fourthroot: s`∜`,
  propto: s`∝`,
  infty: s`∞`,
  rightangle: s`∟`,
  angle: s`∠`,
  measuredangle: s`∡`,
  sphericalangle: s`∢`,
  mid: s`∣`,
  nmid: s`∤`,
  parallel: s`∥`,
  nparallel: s`∦`,
  wedge: s`∧`,
  vee: s`∨`,
  cap: s`∩`,
  cup: s`∪`,
  int: s`∫`,
  iint: s`∬`,
  iiint: s`∭`,
  oint: s`∮`,
  oiint: s`∯`,
  oiiint: s`∰`,
  intclockwise: s`∱`,
  varointclockwise: s`∲`,
  ointctrclockwise: s`∳`,
  therefore: s`∴`,
  because: s`∵`,
  mathratio: s`∶`,
  Colon: s`∷`,
  dotminus: s`∸`,
  dashcolon: s`∹`,
  dotsminusdots: s`∺`,
  kernelcontraction: s`∻`,
  sim: s`∼`,
  backsim: s`∽`,
  invlazys: s`∾`,
  sinewave: s`∿`,
  wr: s`≀`,
  nsim: s`≁`,
  eqsim: s`≂`,
  simeq: s`≃`,
  nsime: s`≄`,
  cong: s`≅`,
  simneqq: s`≆`,
  ncong: s`≇`,
  approx: s`≈`,
  napprox: s`≉`,
  approxeq: s`≊`,
  approxident: s`≋`,
  backcong: s`≌`,
  asymp: s`≍`,
  Bumpeq: s`≎`,
  bumpeq: s`≏`,
  doteq: s`≐`,
  Doteq: s`≑`,
  fallingdotseq: s`≒`,
  risingdotseq: s`≓`,
  coloneqq: s`≔`,
  eqqcolon: s`≕`,
  eqcirc: s`≖`,
  circeq: s`≗`,
  arceq: s`≘`,
  wedgeq: s`≙`,
  veeeq: s`≚`,
  stareq: s`≛`,
  triangleq: s`≜`,
  eqdef: s`≝`,
  measeq: s`≞`,
  questeq: s`≟`,
  ne: s`≠`,
  neq: s`≠`,
  equiv: s`≡`,
  nequiv: s`≢`,
  Equiv: s`≣`,
  leq: s`≤`,
  le: s`≤`,
  geq: s`≥`,
  ge: s`≥`,
  leqq: s`≦`,
  geqq: s`≧`,
  lneqq: s`≨`,
  gneqq: s`≩`,
  ll: s`≪`,
  gg: s`≫`,
  between: s`≬`,
  nasymp: s`≭`,
  nless: s`≮`,
  ngtr: s`≯`,
  nleq: s`≰`,
  ngeq: s`≱`,
  lesssim: s`≲`,
  gtrsim: s`≳`,
  nlesssim: s`≴`,
  ngtrsim: s`≵`,
  lessgtr: s`≶`,
  gtrless: s`≷`,
  nlessgtr: s`≸`,
  ngtrless: s`≹`,
  prec: s`≺`,
  succ: s`≻`,
  preccurlyeq: s`≼`,
  succcurlyeq: s`≽`,
  precsim: s`≾`,
  succsim: s`≿`,
  nprec: s`⊀`,
  nsucc: s`⊁`,
  subset: s`⊂`,
  supset: s`⊃`,
  nsubset: s`⊄`,
  nsupset: s`⊅`,
  subseteq: s`⊆`,
  supseteq: s`⊇`,
  nsubseteq: s`⊈`,
  nsupseteq: s`⊉`,
  subsetneq: s`⊊`,
  supsetneq: s`⊋`,
  cupleftarrow: s`⊌`,
  cupdot: s`⊍`,
  uplus: s`⊎`,
  sqsubset: s`⊏`,
  sqsupset: s`⊐`,
  sqsubseteq: s`⊑`,
  sqsupseteq: s`⊒`,
  sqcap: s`⊓`,
  sqcup: s`⊔`,
  oplus: s`⊕`,
  ominus: s`⊖`,
  otimes: s`⊗`,
  oslash: s`⊘`,
  odot: s`⊙`,
  circledcirc: s`⊚`,
  circledast: s`⊛`,
  circledequal: s`⊜`,
  circleddash: s`⊝`,
  boxplus: s`⊞`,
  boxminus: s`⊟`,
  boxtimes: s`⊠`,
  boxdot: s`⊡`,
  vdash: s`⊢`,
  dashv: s`⊣`,
  top: s`⊤`,
  bot: s`⊥`,
  assert: s`⊦`,
  models: s`⊧`,
  vDash: s`⊨`,
  Vdash: s`⊩`,
  Vvdash: s`⊪`,
  VDash: s`⊫`,
  nvdash: s`⊬`,
  nvDash: s`⊭`,
  nVdash: s`⊮`,
  nVDash: s`⊯`,
  prurel: s`⊰`,
  scurel: s`⊱`,
  vartriangleleft: s`⊲`,
  vartriangleright: s`⊳`,
  trianglelefteq: s`⊴`,
  trianglerighteq: s`⊵`,
  origof: s`⊶`,
  imageof: s`⊷`,
  multimap: s`⊸`,
  hermitmatrix: s`⊹`,
  intercal: s`⊺`,
  veebar: s`⊻`,
  barwedge: s`⊼`,
  barvee: s`⊽`,
  measuredrightangle: s`⊾`,
  varlrtriangle: s`⊿`,
  bigwedge: s`⋀`,
  bigvee: s`⋁`,
  bigcap: s`⋂`,
  bigcup: s`⋃`,
  smwhtdiamond: s`⋄`,
  cdot: s`⋅`,
  star: s`⋆`,
  divideontimes: s`⋇`,
  bowtie: s`⋈`,
  ltimes: s`⋉`,
  rtimes: s`⋊`,
  leftthreetimes: s`⋋`,
  rightthreetimes: s`⋌`,
  backsimeq: s`⋍`,
  curlyvee: s`⋎`,
  curlywedge: s`⋏`,
  Subset: s`⋐`,
  Supset: s`⋑`,
  Cap: s`⋒`,
  Cup: s`⋓`,
  pitchfork: s`⋔`,
  equalparallel: s`⋕`,
  lessdot: s`⋖`,
  gtrdot: s`⋗`,
  lll: s`⋘`,
  ggg: s`⋙`,
  lesseqgtr: s`⋚`,
  gtreqless: s`⋛`,
  eqless: s`⋜`,
  eqgtr: s`⋝`,
  curlyeqprec: s`⋞`,
  curlyeqsucc: s`⋟`,
  npreccurlyeq: s`⋠`,
  nsucccurlyeq: s`⋡`,
  nsqsubseteq: s`⋢`,
  nsqsupseteq: s`⋣`,
  sqsubsetneq: s`⋤`,
  sqsupsetneq: s`⋥`,
  lnsim: s`⋦`,
  gnsim: s`⋧`,
  precnsim: s`⋨`,
  succnsim: s`⋩`,
  nvartriangleleft: s`⋪`,
  nvartriangleright: s`⋫`,
  ntrianglelefteq: s`⋬`,
  ntrianglerighteq: s`⋭`,
  vdots: s`⋮`,
  cdots: s`⋯`,
  iddots: s`⋰`,
  ddots: s`⋱`,
  disin: s`⋲`,
  varisins: s`⋳`,
  isins: s`⋴`,
  isindot: s`⋵`,
  varisinobar: s`⋶`,
  isinobar: s`⋷`,
  isinvb: s`⋸`,
  isinE: s`⋹`,
  nisd: s`⋺`,
  varnis: s`⋻`,
  nis: s`⋼`,
  varniobar: s`⋽`,
  niobar: s`⋾`,
  bagmember: s`⋿`,
  diameter: s`⌀`,
  house: s`⌂`,
  varbarwedge: s`⌅`,
  vardoublebarwedge: s`⌆`,
  lceil: s`⌈`,
  rceil: s`⌉`,
  lfloor: s`⌊`,
  rfloor: s`⌋`,
  invnot: s`⌐`,
  sqlozenge: s`⌑`,
  profline: s`⌒`,
  profsurf: s`⌓`,
  viewdata: s`⌗`,
  turnednot: s`⌙`,
  ulcorner: s`⌜`,
  urcorner: s`⌝`,
  llcorner: s`⌞`,
  lrcorner: s`⌟`,
  inttop: s`⌠`,
  intbottom: s`⌡`,
  frown: s`⌢`,
  smile: s`⌣`,
  varhexagonlrbonds: s`⌬`,
  conictaper: s`⌲`,
  topbot: s`⌶`,
  obar: s`⌽`,
  APLnotslash: s`⌿`,
  APLnotbackslash: s`⍀`,
  APLboxupcaret: s`⍓`,
  APLboxquestion: s`⍰`,
  rangledownzigzagarrow: s`⍼`,
  hexagon: s`⎔`,
  lparenuend: s`⎛`,
  lparenextender: s`⎜`,
  lparenlend: s`⎝`,
  rparenuend: s`⎞`,
  rparenextender: s`⎟`,
  rparenlend: s`⎠`,
  lbrackuend: s`⎡`,
  lbrackextender: s`⎢`,
  lbracklend: s`⎣`,
  rbrackuend: s`⎤`,
  rbrackextender: s`⎥`,
  rbracklend: s`⎦`,
  lbraceuend: s`⎧`,
  lbracemid: s`⎨`,
  lbracelend: s`⎩`,
  vbraceextender: s`⎪`,
  rbraceuend: s`⎫`,
  rbracemid: s`⎬`,
  rbracelend: s`⎭`,
  intextender: s`⎮`,
  harrowextender: s`⎯`,
  lmoustache: s`⎰`,
  rmoustache: s`⎱`,
  sumtop: s`⎲`,
  sumbottom: s`⎳`,
  overbracket: s`⎴`,
  underbracket: s`⎵`,
  bbrktbrk: s`⎶`,
  sqrtbottom: s`⎷`,
  lvboxline: s`⎸`,
  rvboxline: s`⎹`,
  varcarriagereturn: s`⏎`,
  overparen: s`⏜`,
  underparen: s`⏝`,
  overbrace: s`⏞`,
  underbrace: s`⏟`,
  obrbrak: s`⏠`,
  ubrbrak: s`⏡`,
  trapezium: s`⏢`,
  benzenr: s`⏣`,
  strns: s`⏤`,
  fltns: s`⏥`,
  accurrent: s`⏦`,
  elinters: s`⏧`,
  blanksymbol: s`␢`,
  mathvisiblespace: s`␣`,
  bdtriplevdash: s`┆`,
  blockuphalf: s`▀`,
  blocklowhalf: s`▄`,
  blockfull: s`█`,
  blocklefthalf: s`▌`,
  blockrighthalf: s`▐`,
  blockqtrshaded: s`░`,
  blockhalfshaded: s`▒`,
  blockthreeqtrshaded: s`▓`,
  mdlgblksquare: s`■`,
  mdlgwhtsquare: s`□`,
  squoval: s`▢`,
  blackinwhitesquare: s`▣`,
  squarehfill: s`▤`,
  squarevfill: s`▥`,
  squarehvfill: s`▦`,
  squarenwsefill: s`▧`,
  squareneswfill: s`▨`,
  squarecrossfill: s`▩`,
  smblksquare: s`▪`,
  smwhtsquare: s`▫`,
  hrectangleblack: s`▬`,
  hrectangle: s`▭`,
  vrectangleblack: s`▮`,
  vrectangle: s`▯`,
  parallelogramblack: s`▰`,
  parallelogram: s`▱`,
  bigblacktriangleup: s`▲`,
  bigtriangleup: s`△`,
  blacktriangle: s`▴`,
  vartriangle: s`▵`,
  blacktriangleright: s`▶`,
  triangleright: s`▷`,
  smallblacktriangleright: s`▸`,
  smalltriangleright: s`▹`,
  blackpointerright: s`►`,
  whitepointerright: s`▻`,
  bigblacktriangledown: s`▼`,
  bigtriangledown: s`▽`,
  blacktriangledown: s`▾`,
  triangledown: s`▿`,
  blacktriangleleft: s`◀`,
  triangleleft: s`◁`,
  smallblacktriangleleft: s`◂`,
  smalltriangleleft: s`◃`,
  blackpointerleft: s`◄`,
  whitepointerleft: s`◅`,
  mdlgblkdiamond: s`◆`,
  mdlgwhtdiamond: s`◇`,
  blackinwhitediamond: s`◈`,
  fisheye: s`◉`,
  mdlgwhtlozenge: s`◊`,
  mdlgwhtcircle: s`○`,
  dottedcircle: s`◌`,
  circlevertfill: s`◍`,
  bullseye: s`◎`,
  mdlgblkcircle: s`●`,
  circlelefthalfblack: s`◐`,
  circlerighthalfblack: s`◑`,
  circlebottomhalfblack: s`◒`,
  circletophalfblack: s`◓`,
  circleurquadblack: s`◔`,
  blackcircleulquadwhite: s`◕`,
  blacklefthalfcircle: s`◖`,
  blackrighthalfcircle: s`◗`,
  inversebullet: s`◘`,
  inversewhitecircle: s`◙`,
  invwhiteupperhalfcircle: s`◚`,
  invwhitelowerhalfcircle: s`◛`,
  ularc: s`◜`,
  urarc: s`◝`,
  lrarc: s`◞`,
  llarc: s`◟`,
  topsemicircle: s`◠`,
  botsemicircle: s`◡`,
  lrblacktriangle: s`◢`,
  llblacktriangle: s`◣`,
  ulblacktriangle: s`◤`,
  urblacktriangle: s`◥`,
  smwhtcircle: s`◦`,
  squareleftblack: s`◧`,
  squarerightblack: s`◨`,
  squareulblack: s`◩`,
  squarelrblack: s`◪`,
  boxbar: s`◫`,
  trianglecdot: s`◬`,
  triangleleftblack: s`◭`,
  trianglerightblack: s`◮`,
  lgwhtcircle: s`◯`,
  squareulquad: s`◰`,
  squarellquad: s`◱`,
  squarelrquad: s`◲`,
  squareurquad: s`◳`,
  circleulquad: s`◴`,
  circlellquad: s`◵`,
  circlelrquad: s`◶`,
  circleurquad: s`◷`,
  ultriangle: s`◸`,
  urtriangle: s`◹`,
  lltriangle: s`◺`,
  mdwhtsquare: s`◻`,
  mdblksquare: s`◼`,
  mdsmwhtsquare: s`◽`,
  mdsmblksquare: s`◾`,
  lrtriangle: s`◿`,
  bigstar: s`★`,
  bigwhitestar: s`☆`,
  astrosun: s`☉`,
  danger: s`☡`,
  blacksmiley: s`☻`,
  sun: s`☼`,
  rightmoon: s`☽`,
  leftmoon: s`☾`,
  female: s`♀`,
  male: s`♂`,
  spadesuit: s`♠`,
  heartsuit: s`♡`,
  diamondsuit: s`♢`,
  clubsuit: s`♣`,
  varspadesuit: s`♤`,
  varheartsuit: s`♥`,
  vardiamondsuit: s`♦`,
  varclubsuit: s`♧`,
  quarternote: s`♩`,
  eighthnote: s`♪`,
  twonotes: s`♫`,
  flat: s`♭`,
  natural: s`♮`,
  sharp: s`♯`,
  acidfree: s`♾`,
  dicei: s`⚀`,
  diceii: s`⚁`,
  diceiii: s`⚂`,
  diceiv: s`⚃`,
  dicev: s`⚄`,
  dicevi: s`⚅`,
  circledrightdot: s`⚆`,
  circledtwodots: s`⚇`,
  blackcircledrightdot: s`⚈`,
  blackcircledtwodots: s`⚉`,
  Hermaphrodite: s`⚥`,
  mdwhtcircle: s`⚪`,
  mdblkcircle: s`⚫`,
  mdsmwhtcircle: s`⚬`,
  neuter: s`⚲`,
  checkmark: s`✓`,
  maltese: s`✠`,
  circledstar: s`✪`,
  varstar: s`✶`,
  dingasterisk: s`✽`,
  lbrbrak: s`❲`,
  rbrbrak: s`❳`,
  draftingarrow: s`➛`,
  threedangle: s`⟀`,
  whiteinwhitetriangle: s`⟁`,
  perp: s`⟂`,
  subsetcirc: s`⟃`,
  supsetcirc: s`⟄`,
  lbag: s`⟅`,
  rbag: s`⟆`,
  veedot: s`⟇`,
  bsolhsub: s`⟈`,
  suphsol: s`⟉`,
  longdivision: s`⟌`,
  diamondcdot: s`⟐`,
  wedgedot: s`⟑`,
  upin: s`⟒`,
  pullback: s`⟓`,
  pushout: s`⟔`,
  leftouterjoin: s`⟕`,
  rightouterjoin: s`⟖`,
  fullouterjoin: s`⟗`,
  bigbot: s`⟘`,
  bigtop: s`⟙`,
  DashVDash: s`⟚`,
  dashVdash: s`⟛`,
  multimapinv: s`⟜`,
  vlongdash: s`⟝`,
  longdashv: s`⟞`,
  cirbot: s`⟟`,
  lozengeminus: s`⟠`,
  concavediamond: s`⟡`,
  concavediamondtickleft: s`⟢`,
  concavediamondtickright: s`⟣`,
  whitesquaretickleft: s`⟤`,
  whitesquaretickright: s`⟥`,
  lBrack: s`⟦`,
  rBrack: s`⟧`,
  langle: s`⟨`,
  rangle: s`⟩`,
  lAngle: s`⟪`,
  rAngle: s`⟫`,
  Lbrbrak: s`⟬`,
  Rbrbrak: s`⟭`,
  lgroup: s`⟮`,
  rgroup: s`⟯`,
  UUparrow: s`⟰`,
  DDownarrow: s`⟱`,
  acwgapcirclearrow: s`⟲`,
  cwgapcirclearrow: s`⟳`,
  rightarrowonoplus: s`⟴`,
  longleftarrow: s`⟵`,
  longrightarrow: s`⟶`,
  longleftrightarrow: s`⟷`,
  Longleftarrow: s`⟸`,
  Longrightarrow: s`⟹`,
  Longleftrightarrow: s`⟺`,
  longmapsfrom: s`⟻`,
  longmapsto: s`⟼`,
  Longmapsfrom: s`⟽`,
  Longmapsto: s`⟾`,
  longrightsquigarrow: s`⟿`,
  nvtwoheadrightarrow: s`⤀`,
  nVtwoheadrightarrow: s`⤁`,
  nvLeftarrow: s`⤂`,
  nvRightarrow: s`⤃`,
  nvLeftrightarrow: s`⤄`,
  twoheadmapsto: s`⤅`,
  Mapsfrom: s`⤆`,
  Mapsto: s`⤇`,
  downarrowbarred: s`⤈`,
  uparrowbarred: s`⤉`,
  Uuparrow: s`⤊`,
  Ddownarrow: s`⤋`,
  leftbkarrow: s`⤌`,
  rightbkarrow: s`⤍`,
  leftdbkarrow: s`⤎`,
  dbkarrow: s`⤏`,
  drbkarrow: s`⤐`,
  rightdotarrow: s`⤑`,
  baruparrow: s`⤒`,
  downarrowbar: s`⤓`,
  nvrightarrowtail: s`⤔`,
  nVrightarrowtail: s`⤕`,
  twoheadrightarrowtail: s`⤖`,
  nvtwoheadrightarrowtail: s`⤗`,
  nVtwoheadrightarrowtail: s`⤘`,
  lefttail: s`⤙`,
  righttail: s`⤚`,
  leftdbltail: s`⤛`,
  rightdbltail: s`⤜`,
  diamondleftarrow: s`⤝`,
  rightarrowdiamond: s`⤞`,
  diamondleftarrowbar: s`⤟`,
  barrightarrowdiamond: s`⤠`,
  nwsearrow: s`⤡`,
  neswarrow: s`⤢`,
  hknwarrow: s`⤣`,
  hknearrow: s`⤤`,
  hksearrow: s`⤥`,
  hkswarrow: s`⤦`,
  tona: s`⤧`,
  toea: s`⤨`,
  tosa: s`⤩`,
  towa: s`⤪`,
  rdiagovfdiag: s`⤫`,
  fdiagovrdiag: s`⤬`,
  seovnearrow: s`⤭`,
  neovsearrow: s`⤮`,
  fdiagovnearrow: s`⤯`,
  rdiagovsearrow: s`⤰`,
  neovnwarrow: s`⤱`,
  nwovnearrow: s`⤲`,
  rightcurvedarrow: s`⤳`,
  uprightcurvearrow: s`⤴`,
  downrightcurvedarrow: s`⤵`,
  leftdowncurvedarrow: s`⤶`,
  rightdowncurvedarrow: s`⤷`,
  cwrightarcarrow: s`⤸`,
  acwleftarcarrow: s`⤹`,
  acwoverarcarrow: s`⤺`,
  acwunderarcarrow: s`⤻`,
  curvearrowrightminus: s`⤼`,
  curvearrowleftplus: s`⤽`,
  cwundercurvearrow: s`⤾`,
  ccwundercurvearrow: s`⤿`,
  acwcirclearrow: s`⥀`,
  cwcirclearrow: s`⥁`,
  rightarrowshortleftarrow: s`⥂`,
  leftarrowshortrightarrow: s`⥃`,
  shortrightarrowleftarrow: s`⥄`,
  rightarrowplus: s`⥅`,
  leftarrowplus: s`⥆`,
  rightarrowx: s`⥇`,
  leftrightarrowcircle: s`⥈`,
  twoheaduparrowcircle: s`⥉`,
  leftrightharpoonupdown: s`⥊`,
  leftrightharpoondownup: s`⥋`,
  updownharpoonrightleft: s`⥌`,
  updownharpoonleftright: s`⥍`,
  leftrightharpoonupup: s`⥎`,
  updownharpoonrightright: s`⥏`,
  leftrightharpoondowndown: s`⥐`,
  updownharpoonleftleft: s`⥑`,
  barleftharpoonup: s`⥒`,
  rightharpoonupbar: s`⥓`,
  barupharpoonright: s`⥔`,
  downharpoonrightbar: s`⥕`,
  barleftharpoondown: s`⥖`,
  rightharpoondownbar: s`⥗`,
  barupharpoonleft: s`⥘`,
  downharpoonleftbar: s`⥙`,
  leftharpoonupbar: s`⥚`,
  barrightharpoonup: s`⥛`,
  upharpoonrightbar: s`⥜`,
  bardownharpoonright: s`⥝`,
  leftharpoondownbar: s`⥞`,
  barrightharpoondown: s`⥟`,
  upharpoonleftbar: s`⥠`,
  bardownharpoonleft: s`⥡`,
  leftharpoonsupdown: s`⥢`,
  upharpoonsleftright: s`⥣`,
  rightharpoonsupdown: s`⥤`,
  downharpoonsleftright: s`⥥`,
  leftrightharpoonsup: s`⥦`,
  leftrightharpoonsdown: s`⥧`,
  rightleftharpoonsup: s`⥨`,
  rightleftharpoonsdown: s`⥩`,
  leftharpoonupdash: s`⥪`,
  dashleftharpoondown: s`⥫`,
  rightharpoonupdash: s`⥬`,
  dashrightharpoondown: s`⥭`,
  updownharpoonsleftright: s`⥮`,
  downupharpoonsleftright: s`⥯`,
  rightimply: s`⥰`,
  equalrightarrow: s`⥱`,
  similarrightarrow: s`⥲`,
  leftarrowsimilar: s`⥳`,
  rightarrowsimilar: s`⥴`,
  rightarrowapprox: s`⥵`,
  ltlarr: s`⥶`,
  leftarrowless: s`⥷`,
  gtrarr: s`⥸`,
  subrarr: s`⥹`,
  leftarrowsubset: s`⥺`,
  suplarr: s`⥻`,
  leftfishtail: s`⥼`,
  rightfishtail: s`⥽`,
  upfishtail: s`⥾`,
  downfishtail: s`⥿`,
  Vvert: s`⦀`,
  mdsmblkcircle: s`⦁`,
  typecolon: s`⦂`,
  lBrace: s`⦃`,
  rBrace: s`⦄`,
  lParen: s`⦅`,
  rParen: s`⦆`,
  llparenthesis: s`⦇`,
  rrparenthesis: s`⦈`,
  llangle: s`⦉`,
  rrangle: s`⦊`,
  lbrackubar: s`⦋`,
  rbrackubar: s`⦌`,
  lbrackultick: s`⦍`,
  rbracklrtick: s`⦎`,
  lbracklltick: s`⦏`,
  rbrackurtick: s`⦐`,
  langledot: s`⦑`,
  rangledot: s`⦒`,
  lparenless: s`⦓`,
  rparengtr: s`⦔`,
  Lparengtr: s`⦕`,
  Rparenless: s`⦖`,
  lblkbrbrak: s`⦗`,
  rblkbrbrak: s`⦘`,
  fourvdots: s`⦙`,
  vzigzag: s`⦚`,
  measuredangleleft: s`⦛`,
  rightanglesqr: s`⦜`,
  rightanglemdot: s`⦝`,
  angles: s`⦞`,
  angdnr: s`⦟`,
  gtlpar: s`⦠`,
  sphericalangleup: s`⦡`,
  turnangle: s`⦢`,
  revangle: s`⦣`,
  angleubar: s`⦤`,
  revangleubar: s`⦥`,
  wideangledown: s`⦦`,
  wideangleup: s`⦧`,
  measanglerutone: s`⦨`,
  measanglelutonw: s`⦩`,
  measanglerdtose: s`⦪`,
  measangleldtosw: s`⦫`,
  measangleurtone: s`⦬`,
  measangleultonw: s`⦭`,
  measangledrtose: s`⦮`,
  measangledltosw: s`⦯`,
  revemptyset: s`⦰`,
  emptysetobar: s`⦱`,
  emptysetocirc: s`⦲`,
  emptysetoarr: s`⦳`,
  emptysetoarrl: s`⦴`,
  circlehbar: s`⦵`,
  circledvert: s`⦶`,
  circledparallel: s`⦷`,
  obslash: s`⦸`,
  operp: s`⦹`,
  obot: s`⦺`,
  olcross: s`⦻`,
  odotslashdot: s`⦼`,
  uparrowoncircle: s`⦽`,
  circledwhitebullet: s`⦾`,
  circledbullet: s`⦿`,
  olessthan: s`⧀`,
  ogreaterthan: s`⧁`,
  cirscir: s`⧂`,
  cirE: s`⧃`,
  boxdiag: s`⧄`,
  boxbslash: s`⧅`,
  boxast: s`⧆`,
  boxcircle: s`⧇`,
  boxbox: s`⧈`,
  boxonbox: s`⧉`,
  triangleodot: s`⧊`,
  triangleubar: s`⧋`,
  triangles: s`⧌`,
  triangleserifs: s`⧍`,
  rtriltri: s`⧎`,
  ltrivb: s`⧏`,
  vbrtri: s`⧐`,
  lfbowtie: s`⧑`,
  rfbowtie: s`⧒`,
  fbowtie: s`⧓`,
  lftimes: s`⧔`,
  rftimes: s`⧕`,
  hourglass: s`⧖`,
  blackhourglass: s`⧗`,
  lvzigzag: s`⧘`,
  rvzigzag: s`⧙`,
  Lvzigzag: s`⧚`,
  Rvzigzag: s`⧛`,
  iinfin: s`⧜`,
  tieinfty: s`⧝`,
  nvinfty: s`⧞`,
  dualmap: s`⧟`,
  laplac: s`⧠`,
  lrtriangleeq: s`⧡`,
  shuffle: s`⧢`,
  eparsl: s`⧣`,
  smeparsl: s`⧤`,
  eqvparsl: s`⧥`,
  gleichstark: s`⧦`,
  thermod: s`⧧`,
  downtriangleleftblack: s`⧨`,
  downtrianglerightblack: s`⧩`,
  blackdiamonddownarrow: s`⧪`,
  mdlgblklozenge: s`⧫`,
  circledownarrow: s`⧬`,
  blackcircledownarrow: s`⧭`,
  errbarsquare: s`⧮`,
  errbarblacksquare: s`⧯`,
  errbardiamond: s`⧰`,
  errbarblackdiamond: s`⧱`,
  errbarcircle: s`⧲`,
  errbarblackcircle: s`⧳`,
  ruledelayed: s`⧴`,
  setminus: s`⧵`,
  dsol: s`⧶`,
  rsolbar: s`⧷`,
  xsol: s`⧸`,
  xbsol: s`⧹`,
  doubleplus: s`⧺`,
  tripleplus: s`⧻`,
  lcurvyangle: s`⧼`,
  rcurvyangle: s`⧽`,
  tplus: s`⧾`,
  tminus: s`⧿`,
  bigodot: s`⨀`,
  bigoplus: s`⨁`,
  bigotimes: s`⨂`,
  bigcupdot: s`⨃`,
  biguplus: s`⨄`,
  bigsqcap: s`⨅`,
  bigsqcup: s`⨆`,
  conjquant: s`⨇`,
  disjquant: s`⨈`,
  bigtimes: s`⨉`,
  modtwosum: s`⨊`,
  sumint: s`⨋`,
  iiiint: s`⨌`,
  intbar: s`⨍`,
  intBar: s`⨎`,
  fint: s`⨏`,
  cirfnint: s`⨐`,
  awint: s`⨑`,
  rppolint: s`⨒`,
  scpolint: s`⨓`,
  npolint: s`⨔`,
  pointint: s`⨕`,
  sqint: s`⨖`,
  intlarhk: s`⨗`,
  intx: s`⨘`,
  intcap: s`⨙`,
  intcup: s`⨚`,
  upint: s`⨛`,
  lowint: s`⨜`,
  Join: s`⨝`,
  bigtriangleleft: s`⨞`,
  zcmp: s`⨟`,
  zpipe: s`⨠`,
  zproject: s`⨡`,
  ringplus: s`⨢`,
  plushat: s`⨣`,
  simplus: s`⨤`,
  plusdot: s`⨥`,
  plussim: s`⨦`,
  plussubtwo: s`⨧`,
  plustrif: s`⨨`,
  commaminus: s`⨩`,
  minusdot: s`⨪`,
  minusfdots: s`⨫`,
  minusrdots: s`⨬`,
  opluslhrim: s`⨭`,
  oplusrhrim: s`⨮`,
  vectimes: s`⨯`,
  dottimes: s`⨰`,
  timesbar: s`⨱`,
  btimes: s`⨲`,
  smashtimes: s`⨳`,
  otimeslhrim: s`⨴`,
  otimesrhrim: s`⨵`,
  otimeshat: s`⨶`,
  Otimes: s`⨷`,
  odiv: s`⨸`,
  triangleplus: s`⨹`,
  triangleminus: s`⨺`,
  triangletimes: s`⨻`,
  intprod: s`⨼`,
  intprodr: s`⨽`,
  fcmp: s`⨾`,
  amalg: s`⨿`,
  capdot: s`⩀`,
  uminus: s`⩁`,
  barcup: s`⩂`,
  barcap: s`⩃`,
  capwedge: s`⩄`,
  cupvee: s`⩅`,
  cupovercap: s`⩆`,
  capovercup: s`⩇`,
  cupbarcap: s`⩈`,
  capbarcup: s`⩉`,
  twocups: s`⩊`,
  twocaps: s`⩋`,
  closedvarcup: s`⩌`,
  closedvarcap: s`⩍`,
  Sqcap: s`⩎`,
  Sqcup: s`⩏`,
  closedvarcupsmashprod: s`⩐`,
  wedgeodot: s`⩑`,
  veeodot: s`⩒`,
  Wedge: s`⩓`,
  Vee: s`⩔`,
  wedgeonwedge: s`⩕`,
  veeonvee: s`⩖`,
  bigslopedvee: s`⩗`,
  bigslopedwedge: s`⩘`,
  veeonwedge: s`⩙`,
  wedgemidvert: s`⩚`,
  veemidvert: s`⩛`,
  midbarwedge: s`⩜`,
  midbarvee: s`⩝`,
  doublebarwedge: s`⩞`,
  wedgebar: s`⩟`,
  wedgedoublebar: s`⩠`,
  varveebar: s`⩡`,
  doublebarvee: s`⩢`,
  veedoublebar: s`⩣`,
  dsub: s`⩤`,
  rsub: s`⩥`,
  eqdot: s`⩦`,
  dotequiv: s`⩧`,
  equivVert: s`⩨`,
  equivVvert: s`⩩`,
  dotsim: s`⩪`,
  simrdots: s`⩫`,
  simminussim: s`⩬`,
  congdot: s`⩭`,
  asteq: s`⩮`,
  hatapprox: s`⩯`,
  approxeqq: s`⩰`,
  eqqplus: s`⩱`,
  pluseqq: s`⩲`,
  eqqsim: s`⩳`,
  Coloneq: s`⩴`,
  eqeq: s`⩵`,
  eqeqeq: s`⩶`,
  ddotseq: s`⩷`,
  equivDD: s`⩸`,
  ltcir: s`⩹`,
  gtcir: s`⩺`,
  ltquest: s`⩻`,
  gtquest: s`⩼`,
  leqslant: s`⩽`,
  geqslant: s`⩾`,
  lesdot: s`⩿`,
  gesdot: s`⪀`,
  lesdoto: s`⪁`,
  gesdoto: s`⪂`,
  lesdotor: s`⪃`,
  gesdotol: s`⪄`,
  lessapprox: s`⪅`,
  gtrapprox: s`⪆`,
  lneq: s`⪇`,
  gneq: s`⪈`,
  lnapprox: s`⪉`,
  gnapprox: s`⪊`,
  lesseqqgtr: s`⪋`,
  gtreqqless: s`⪌`,
  lsime: s`⪍`,
  gsime: s`⪎`,
  lsimg: s`⪏`,
  gsiml: s`⪐`,
  lgE: s`⪑`,
  glE: s`⪒`,
  lesges: s`⪓`,
  gesles: s`⪔`,
  eqslantless: s`⪕`,
  eqslantgtr: s`⪖`,
  elsdot: s`⪗`,
  egsdot: s`⪘`,
  eqqless: s`⪙`,
  eqqgtr: s`⪚`,
  eqqslantless: s`⪛`,
  eqqslantgtr: s`⪜`,
  simless: s`⪝`,
  simgtr: s`⪞`,
  simlE: s`⪟`,
  simgE: s`⪠`,
  Lt: s`⪡`,
  Gt: s`⪢`,
  partialmeetcontraction: s`⪣`,
  glj: s`⪤`,
  gla: s`⪥`,
  ltcc: s`⪦`,
  gtcc: s`⪧`,
  lescc: s`⪨`,
  gescc: s`⪩`,
  smt: s`⪪`,
  lat: s`⪫`,
  smte: s`⪬`,
  late: s`⪭`,
  bumpeqq: s`⪮`,
  preceq: s`⪯`,
  succeq: s`⪰`,
  precneq: s`⪱`,
  succneq: s`⪲`,
  preceqq: s`⪳`,
  succeqq: s`⪴`,
  precneqq: s`⪵`,
  succneqq: s`⪶`,
  precapprox: s`⪷`,
  succapprox: s`⪸`,
  precnapprox: s`⪹`,
  succnapprox: s`⪺`,
  Prec: s`⪻`,
  Succ: s`⪼`,
  subsetdot: s`⪽`,
  supsetdot: s`⪾`,
  subsetplus: s`⪿`,
  supsetplus: s`⫀`,
  submult: s`⫁`,
  supmult: s`⫂`,
  subedot: s`⫃`,
  supedot: s`⫄`,
  subseteqq: s`⫅`,
  supseteqq: s`⫆`,
  subsim: s`⫇`,
  supsim: s`⫈`,
  subsetapprox: s`⫉`,
  supsetapprox: s`⫊`,
  subsetneqq: s`⫋`,
  supsetneqq: s`⫌`,
  lsqhook: s`⫍`,
  rsqhook: s`⫎`,
  csub: s`⫏`,
  csup: s`⫐`,
  csube: s`⫑`,
  csupe: s`⫒`,
  subsup: s`⫓`,
  supsub: s`⫔`,
  subsub: s`⫕`,
  supsup: s`⫖`,
  suphsub: s`⫗`,
  supdsub: s`⫘`,
  forkv: s`⫙`,
  topfork: s`⫚`,
  mlcp: s`⫛`,
  forks: s`⫝̸`,
  forksnot: s`⫝`,
  shortlefttack: s`⫞`,
  shortdowntack: s`⫟`,
  shortuptack: s`⫠`,
  perps: s`⫡`,
  vDdash: s`⫢`,
  dashV: s`⫣`,
  Dashv: s`⫤`,
  DashV: s`⫥`,
  varVdash: s`⫦`,
  Barv: s`⫧`,
  vBar: s`⫨`,
  vBarv: s`⫩`,
  barV: s`⫪`,
  Vbar: s`⫫`,
  Not: s`⫬`,
  bNot: s`⫭`,
  revnmid: s`⫮`,
  cirmid: s`⫯`,
  midcir: s`⫰`,
  topcir: s`⫱`,
  nhpar: s`⫲`,
  parsim: s`⫳`,
  interleave: s`⫴`,
  nhVvert: s`⫵`,
  threedotcolon: s`⫶`,
  lllnest: s`⫷`,
  gggnest: s`⫸`,
  leqqslant: s`⫹`,
  geqqslant: s`⫺`,
  trslash: s`⫻`,
  biginterleave: s`⫼`,
  sslash: s`⫽`,
  talloblong: s`⫾`,
  bigtalloblong: s`⫿`,
  squaretopblack: s`⬒`,
  squarebotblack: s`⬓`,
  squareurblack: s`⬔`,
  squarellblack: s`⬕`,
  diamondleftblack: s`⬖`,
  diamondrightblack: s`⬗`,
  diamondtopblack: s`⬘`,
  diamondbotblack: s`⬙`,
  dottedsquare: s`⬚`,
  lgblksquare: s`⬛`,
  lgwhtsquare: s`⬜`,
  vysmblksquare: s`⬝`,
  vysmwhtsquare: s`⬞`,
  pentagonblack: s`⬟`,
  pentagon: s`⬠`,
  varhexagon: s`⬡`,
  varhexagonblack: s`⬢`,
  hexagonblack: s`⬣`,
  lgblkcircle: s`⬤`,
  mdblkdiamond: s`⬥`,
  mdwhtdiamond: s`⬦`,
  mdblklozenge: s`⬧`,
  mdwhtlozenge: s`⬨`,
  smblkdiamond: s`⬩`,
  smblklozenge: s`⬪`,
  smwhtlozenge: s`⬫`,
  blkhorzoval: s`⬬`,
  whthorzoval: s`⬭`,
  blkvertoval: s`⬮`,
  whtvertoval: s`⬯`,
  circleonleftarrow: s`⬰`,
  leftthreearrows: s`⬱`,
  leftarrowonoplus: s`⬲`,
  longleftsquigarrow: s`⬳`,
  nvtwoheadleftarrow: s`⬴`,
  nVtwoheadleftarrow: s`⬵`,
  twoheadmapsfrom: s`⬶`,
  twoheadleftdbkarrow: s`⬷`,
  leftdotarrow: s`⬸`,
  nvleftarrowtail: s`⬹`,
  nVleftarrowtail: s`⬺`,
  twoheadleftarrowtail: s`⬻`,
  nvtwoheadleftarrowtail: s`⬼`,
  nVtwoheadleftarrowtail: s`⬽`,
  leftarrowx: s`⬾`,
  leftcurvedarrow: s`⬿`,
  equalleftarrow: s`⭀`,
  bsimilarleftarrow: s`⭁`,
  leftarrowbackapprox: s`⭂`,
  rightarrowgtr: s`⭃`,
  rightarrowsupset: s`⭄`,
  LLeftarrow: s`⭅`,
  RRightarrow: s`⭆`,
  bsimilarrightarrow: s`⭇`,
  rightarrowbackapprox: s`⭈`,
  similarleftarrow: s`⭉`,
  leftarrowapprox: s`⭊`,
  leftarrowbsimilar: s`⭋`,
  rightarrowbsimilar: s`⭌`,
  medwhitestar: s`⭐`,
  medblackstar: s`⭑`,
  smwhitestar: s`⭒`,
  rightpentagonblack: s`⭓`,
  rightpentagon: s`⭔`,
  postalmark: s`〒`,
  hzigzag: s`〰`,
};

export default commonCommandTransformers;
