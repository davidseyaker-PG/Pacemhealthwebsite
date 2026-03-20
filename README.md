# Pacem Health International - Website

Pacem Health International is committed to transforming healthcare delivery across the African continent through innovative solutions and sustainable partnerships.

**Live site:** [www.pacemhealth.com](https://www.pacemhealth.com)

## Tech Stack

- **Framework:** React 18 + TypeScript
- - **Build Tool:** Vite 6
  - - **Styling:** Tailwind CSS 4
    - - **UI Components:** Radix UI + shadcn/ui
      - - **Routing:** Wouter
        - - **Animations:** Motion (Framer Motion)
          - - **Charts:** Recharts
            - - **Source:** Generated and managed via [Figma Make](https://www.figma.com/make/JCh06otdnOrBxZhmSyuaDo/Pacem-Health-International)
             
              - ## Getting Started
             
              - ### Prerequisites
             
              - - Node.js 18+ installed
                - - npm or yarn package manager
                 
                  - ### Installation
                 
                  - ```bash
                    # Clone the repository
                    git clone https://github.com/davidseyaker-PG/Pacemhealthwebsite.git
                    cd Pacemhealthwebsite

                    # Install dependencies
                    npm install

                    # Start development server
                    npm run dev
                    ```

                    The site will be available at `http://localhost:3000`.

                    ### Build for Production

                    ```bash
                    npm run build
                    ```

                    Output will be in the `build/` directory.

                    ## Project Structure

                    ```
                    /
                    ├── index.html                  # Entry HTML file
                    ├── package.json                # Dependencies and scripts
                    ├── vite.config.ts              # Vite configuration with Figma asset aliases
                    ├── src/
                    │   ├── App.tsx                 # Main app with routing (wouter)
                    │   ├── main.tsx                # React entry point
                    │   ├── index.css               # Global styles
                    │   ├── components/
                    │   │   ├── Header.tsx          # Site header with navigation
                    │   │   ├── Footer.tsx          # Site footer
                    │   │   ├── HeroCarousel.tsx    # Homepage hero slider
                    │   │   ├── CookieBanner.tsx    # GDPR cookie consent
                    │   │   ├── SectionLabel.tsx    # Reusable section label
                    │   │   ├── ServiceBreadcrumb.tsx
                    │   │   ├── AdaChatDemo.tsx     # Chat widget demo
                    │   │   ├── figma/              # Figma-specific utilities
                    │   │   ├── homepage/           # Homepage section components
                    │   │   │   ├── AreasOfFocus.tsx
                    │   │   │   ├── CTASection.tsx
                    │   │   │   ├── Commitments.tsx
                    │   │   │   ├── HealthcareSolutions.tsx
                    │   │   │   ├── NewsCarousel.tsx
                    │   │   │   ├── PartnerServices.tsx
                    │   │   │   └── StatsSection.tsx
                    │   │   ├── pages/              # Page-level comp#o nPeanctesm
                     │H e a l│ t h  └I──n tueir/n a t i o n a l   -   W e b s i t e#

                    sPhaacdecmn /Hueia lctohm pIonnteenrtn altiibornaarly
                    i│ s   c├o──m mpiatgteesd/
                    t│ o   t│r a n s├─f─ oarbmoiuntg/  h e a l t h c a r e   d e l#i vAebroyu ta csreocstsi otnh ep aAgfersi
                    c│a n   c│ o n t├i──n ecnatr etehrrso/u g h   i n n o v a t i v#e  Csaorleuetri olniss tainndg  spuasgteasi
                    n│ a b l│e   p a├─r─ tsnteorrsiheisp/s .

                     * * L i v e   s i#t eN:e*w*s  [swtwowr.yp apcaegmehse
                    a│l t h .│ c o m├]──( hCtotnptsa:c/t/.wtwswx.
                    p│ a c e│m h e a├─l─ tIhn.vceosmt)o
                    r
                    s#.#t sTxe
                    c│h   S t│ a c k├
                    ──
                     -P r*o*gFrraammse.wtosrxk
                    :│ * *  │R e a c└─t─  .1.8.  +( 2T0y+p epSacgrei pfti
                    l-e s*)*
                    B│u i l d├─ ─ Tgouoild:e*l*i nVeist/e   6
                     -   * * S t y l i n#g :D*e*s iTgani lgwuiindde lCiSnSe s4

                    │-   * *└─U─ Is tCyolmepso/n e n t s : * *   R a d i x   U I  #+  Asdhdaidtcino/nuail
                     -s t*y*lReosuhteientgs:
                    *└*──  WRoEuAtDeMrE
                    .-m d*
                    *`A`n`i
                    m
                    a#t#i oKnesy: *P*a gMeost
                    i
                    o|n  R(oFurtaem e|r  CMoomtpioonne)n
                    t-  |* *DCehsacrrtisp:t*i*o nR e|c
                    h|a-r-t-s-
                    --- -*|*-S-o-u-r-c-e-:-*-*- -G|e-n-e-r-a-t-e-d- -a-n-d- -m|a
                    n|a g`e/d`  v|i aH o[mFeiPgamgae  M|a kLea]n(dhitntgp sp:a/g/ew wwwi.tfhi ghmear.oc,o ms/omlauktei/oJnCsh,0 6sottadtnsO r|B
                    x|Z h`m/SaybuoauDto`/ P|a cOeumr-CHoemaplatnhy- I|n tCeormnpaatniyo noavle)r
                    v
                    i#e#w  G|e
                    t|t i`n/ga bSotuatr/tleeda
                    d
                    e#r#s#h iPpr`e r|e qLueiasdietressh
                    i
                    p-  |N oLdeea.djesr s1h8i+p  itnesatma l|l
                    e|d
                    `-/ onuprm- aoprp ryoaarcnh `p a|c kOaugreA pmparnoaagcehr
                    |
                     #M#e#t hIondsotlaolglya tainodn
                    a
                    p`p`r`obaacshh
                    |#
                     |C l`o/nsee rtvhiec erse/pmoasrikteotr-ya
                    cgciets sc`l o|n eM ahrtkteptsA:c/c/egsistPhaugbe. c|o mM/adrakveitd saecycaeksesr -sPeGr/vPiacceesm h|e
                    a|l t`h/wseebrsviitcee.sg/iptr
                    occdu rPeamceenmth-edailstthrwiebbustiitoen
                    `
                     #|  IPnrsotcaulrle mdeenpteDnidsetnrciibeust
                    inopnm  |i nPsrtoaclulr
                    e
                    m#e nStt asretr vdiecveesl o|p
                    m|e n`t/ ssoelruvteiro
                    nnsp/mp hraurnm adceevu
                    t`i`c`a
                    l
                    -Tshuep psliitees `w i|l lP hbaer maavcaeiultaibclael Sautp p`lhitetsp :|/ /Plhoacramlah ossotl:u3t0i0o0n`s.
                    |

                    #|# #` /Bsuoilludt ifoonrs /Pdriogdiutcatli-ohne
                    a
                    l`t`h``b a|s hD
                    ingpimt arluHne ablutihl d|
                     `D`i`g
                    i
                    tOault phueta lwtihl ls obleu tiino ntsh e|
                    `|b u`i/lcda/r`e edrisr`e c|t oCrayr.e
                    e
                    r#s#  |P rJoojbe clti sSttirnugcst u|r
                    e|

                    ``/`c`o
                    n/t
                    a├c──t `i n|d eCxo.nhttamclt   |   C o n t a c t   f o r m   |
                    #|  E`n/tirnyv eHsTtMoLr sf`i l|e
                    I├─n─ vpeasctkoargse .|j sIonnv e s t o r   i n f o r m a t i o#n  D|e
                    p|e n`d/ennecwise-ss taonrdi essc`r i|p tNse
                    w├s──S tvoirtiee.sc o|n fNiegw.st sa n d   a r t i c l e s   |
                    #
                     #V#i tFei gcmoan fMiagkuer aItnitoeng rwaittiho nF
                    i
                    gTmhai sa spsreotj eaclti aisse sc
                    o├─n─ nsercct/e
                    d│  t o  ├─F─ iAgpmpa. tMsaxk e   f o r   v i s u a l   d e v e#l oMpamienn ta.p pC hwaintghe sr omuatdien gi n( wFoiugtmear )M
                    a│k e   c├─a─ nm abien .ptussxh e d   t o   t h i s   r e p o s#i tRoerayc tv iean ttrhye  pbouiinltt
                    -│i n   G├─i─ tiHnudbe xi.nctsesg r a t i o n .

                     * * F i g m#a  GMlaokbea lp rsotjyelcets:
                    *│*   [ O├─p─ ecno mipno nFeingtmsa/
                    M│a k e ]│ ( h t├t──p sH:e/a/dwewrw..tfsixg m a . c o m / m a k#e /SJiCthe0 6hoetaddneOrr BwxiZthhm SnyauvaiDgoa/tPiaocne
                    m│ - H e│a l t h├─-─ IFnotoetrenra.ttisoxn a l )

                     # # #   S#y nSciitneg  fCohoatnegre
                    s│

                     1 .│   M a├k──e  HcehraonCgaerso uisne lF.itgsmxa   M a k#e
                    H2o.m eGpoa gteo  hSeertot isnlgisd e>r
                    G│ i t H│u b   >├─ ─ PCuosohk iteoB arnenpeors.ittsoxr y
                     3 .#  CGhDaPnRg ecso owkiilel  cboen sceonmtm
                    i│t t e d│   b y├ ──` fSiegcmtai[obnoLta]b`e
                    l
                    .#t#s xK n o w n#  IRsesuuseasb laen ds eNcetxito nS tleapbse
                    l

                    #│ # #  │A s s e├─t─ sS
                    e-r vIimcaegBer eaasdscertusm b(.1t1s9x
                    P│N G   f│ i l e├s──,  A~d9a0CMhBa ttDoetmaol.)t swxe r e   e x#c lCuhdaetd  wfirdogme tt hdee mion
                    i│ t i a│l   G i├─t─ Hfuibg mpau/s h   d u e   t o   t h e   5#0 MFBi gfmial-es pseiczief ilci muitti.l iAtsiseest
                    s│  a r e│   r e├f──e rheonmceepda gvei/a   ` f i g m a : a s s#e tH/o`m eaplaigaes esse citni o`nv ictoem.pcoonnefnitgs.
                    t│ s `  │a n d  │ a r e├ ──s eArrveeads OffrFoomc utsh.et sFxi
                    g│ m a  │M a k e│   C D├N──  iCnT AtSheec tliiovne. tdsexp
                    l│ o y m│e n t .│
                     -  ├F──o rC osmemlift-mheonsttse.dt sdxe
                    p│ l o y│m e n t│ s ,  ├a──s sHeetasl tnheceadr etSoo lbuet idoonwsn.ltosaxd
                    e│ d   f│r o m  │ t h e├ ──F iNgemwas CMaarkoeu sceold.et sexx
                    p│ o r t│  a n d│   p l├a──c ePda ritnn e`rsSrecr/vaiscseest.st/s`x.

                    │
                     # #│#   R e│ c o m└m──e nSdteadt sISmepcrtoivoenm.etnstxs

                    │ -   R│e n a m├─e─  phaagsehse/d   a s s e t   f i l e n a m#e sP atgoe -dleesvcerli pctoimvpeo nneanmtess
                     │( e . g│ . ,  └`──h eurio/- i m a g e . p n g `   i n s t e a#d  sohfa d`can1/bu2ic 3c.o.m.pponnge`n)t
                     -l iAbdrda rSyE
                    O│   m e├t──a  ptaaggess /a
                    n│ d   O│p e n  ├─G─ raabpohu td/a t a
                     -   I m p l e m e n t#  pArboopuetr  s4e0c4t ipoang ep awgietsh
                     │n a v i│ g a t├i──o nc
                    a-r eAedrds /l o a d i n g   s t a t e#s  Caanrde eerr rloirs tbionugn dpaargieess

                    │ -   S│e t   u├─p─  sCtIo/rCiDe sp/i p e l i n e   f o r   a#u tNoemwast esdt odreyp lpoaygmeesn
                    t│s
                     -  │ A d d├ ──u nCiotn ttaecstt.st sfxo
                    r│   k e│y   c o├─m─ pIonnveensttso
                    r-s .Ctosnxs
                    i│d e r  │ m i g├r──a tPirnogg rfarmosm. tFsixg
                    m│ a   M│a k e  └─h─ o.s.t.i n(g2 0t+o  pVaegrec efli/lNeest)l
                    i│f y   f├─o─ rg umiodreel icnoenst/r o l

                     # #   D e v e l o#p mDeensti gNno tgeusi
                    d
                    e-l iTnhees
                    p│r o j e└─c─ ts tuysleess /T a i l w i n d   C S S   4   ( n o#t  Avd3d)i twiiotnha lt hset y`l@etsahielewtisn
                    d└c──s sR/EvAiDtMeE`. mpdl
                    u`g`i`n


                    -# #U IK ecyo mPpaogneesn
                    t
                    s|  aRroeu tfer o|m  Ctohmep osnheandtc n|/ uDie slcirbirpatriyo nb u|i
                    l|t- -o-n- -R-a-d|i-x- -U-I- -p-r-i-m-i-t|i-v-e-s-
                    --- -R-o-u-t-i-n-g|
                    i|s  `h/a`n d|l eHdo mbeyP a`gweo u|t eLra`n d(ilnigg hptawgeei gwhitt ha lhteerron,a tsiovleu ttioo nRse,a cstt aRtosu t|e
                    r|)
                    `-/ aTbhoeu t``v i|t eO.ucroCnofmipga.ntys `|  cCoonmtpaainnys  oavsesrevti epwa t|h
                     |a l`i/aasbeosu tt/hlaeta dmearps h`ifpi`g m|a :Laesasdeetr/s*h`i pi m|p oLretasd etros hliopc atle a`ms r|c
                    /|a s`s/eotusr/-`a pfpirloeasc
                    h
                    `# #|  LOiucreAnpsper
                    o
                    aPcrho p|r iMeettahroyd o-l oPgayc eamn dH eaaplptrho aIcnht e|r
                    n|a t`i/osnearlv.i cAelsl/ mrairgkhetts- arcecseesrsv`e d|. MarketAccessPage | Market access services |
                    | `/services/procurement-distribution` | ProcurementDistribution | Procurement services |
                    | `/solutions/pharmaceutical-supplies` | PharmaceuticalSupplies | Pharma solutions |
                    | `/solutions/digital-health` | DigitalHealth | Digital health solutions |
                    | `/careers` | Careers | Job listings |
                    | `/contact` | Contact | Contact form |
                    | `/investors` | Investors | Investor information |
                    | `/news-stories` | NewsStories | News and articles |

                    ## Figma Make Integration

                    This project is connected to Figma Make for visual development. Changes made in Figma Make can be pushed to this repository via the built-in GitHub integration.

                    **Figma Make project:** [Open in Figma Make](https://www.figma.com/make/JCh06otdnOrBxZhmSyuaDo/Pacem-Health-International)

                    ### Syncing Changes

                    1. Make changes in Figma Make
                    2. Go to Settings > GitHub > Push to repository
                    3. Changes will be committed by `figma[bot]`

                    ## Known Issues and Next Steps

                    ### Assets
                    - Image assets (119 PNG files, ~90MB total) were excluded from the initial GitHub push due to the 50MB file size limit. Assets are referenced via `figma:asset/` aliases in `vite.config.ts` and are served from the Figma Make CDN in the live deployment.
                    - For self-hosted deployments, assets need to be downloaded from the Figma Make code export and placed in `src/assets/`.

                    ### Recommended Improvements
                    - Rename hashed asset filenames to descriptive names (e.g., `hero-image.png` instead of `a1b2c3...png`)
                    - Add SEO meta tags and Open Graph data
                    - Implement proper 404 page with navigation
                    - Add loading states and error boundaries
                    - Set up CI/CD pipeline for automated deployments
                    - Add unit tests for key components
                    - Consider migrating from Figma Make hosting to Vercel/Netlify for more control

                    ## Development Notes

                    - The project uses Tailwind CSS 4 (not v3) with the `@tailwindcss/vite` plugin
                    - UI components are from the shadcn/ui library built on Radix UI primitives
                    - Routing is handled by `wouter` (lightweight alternative to React Router)
                    - The `vite.config.ts` contains asset path aliases that map `figma:asset/*` imports to local `src/assets/` files

                    ## License

                    Proprietary - Pacem Health International. All rights reserved.
