var APConfig = {
  excludedProducts: ['AED'],
  // excludedInstruments: ['BTCAED'],
  maxFormTextLength: 128,
  showDepositBankDetails: false,
  depositFileUpload: false,
  showWidgetPageNumbers: true,
  registerForm: {
    showTermsandConditions: true,
    checkboxTermsAndConditions: false,
    checkboxRiskOfCrypto: false,
    checkboxNotEUResident: false,
  },
  registerFormModal: true,
  displayBalancesHeaders: true,
  tickerBlock: "TickerBlockPxChange",
  allowCryptoPairs: false,
  showBlockTradeUI: false,
  siteName: "calfin",
  siteTitle: "CGCX Exchange",
  templateStyle: 'retail',
  apexSite: true,
  clefLogin: '87c01336758f612feba9721d2c478059',
  useClef: false,
  useDepositTemplates: true,
  clefFix: true,
  pagination: true, // Enable pagination with the default style.
  useBootstrapPagination: true, // Enable using bootstrap style for pagination in dashboard pages, not trade
  usePairDropdown: true,
  chart_dark: true,
  clefRedirectURL: 'http://qa1.alphapoint.com/clef.response.html',
  interswitchRedirectURL: 'https://apexqa.alphapoint.com/trade.html',
  instrumentSelectTicker: true,
  kycType: 'IM',
  kycFields: {
    dob: ['required'],
    firstName: ['required', 'alphanumeric'],
    lastName: ['required', 'alphanumeric'],
    telephone: ['required', 'integer'],
  },
  hideKYCVerifySteps: true,
  hideKYCProgressBar: true,
  // useVerificationRequired: true,
  // verificationRequiredLevel: [0,1,2],
  dateFormat: 'MM-DD-YYYY',
  API_V2_URL: "wss://api.exchange.cgcx.io/WSGateway/",
  API_LINK: "https://exchange.cgcx.io/api.pdf",
  serversList: [
    'wss://apicalfinprod.alphapoint.com/WSGateway/',
  ],
  useServerSelect: false,
  OperatorId: 1,
  L2UpdateMethod: 2, //this is to use Joe's method of L2 updates
  baseCoin: 'USD',
  prodPair: 'BTCUSD',
  kycURL_NetVerify_SingleDocument: 'https://validation.alphapoint.com/api/im/NetverifyInitSingleDocument',
  loginRedirect: 'index.html',
  logoutRedirect: 'index.html',
  defaultLanguage: 'en',
  languagesLocation: 'lang',
  languages: {items:  [{name: "English", value: "en"},{name: "Chinese", value: "ch"}]},
  charting_library: 'libs/charting_library_new/',
  authy2FA: false,
  authGoogle: true,
  debugging: false,
  useShapeShift: false,
  authGoogleSiteName: 'TraderUI', //this cannot have spaces
  apiKeysLevel: 0,
  withdrawLevel: 0,
  withdrawWidget: 2,
  decimalPlaces: 2,
  decimalPlacesPrice: 2,
  decimalPlacesQty: 8,
  dealPrices: {
      BTCUSD: [100, 200, 500, 1000],
      ETHUSD: [100, 200, 300, 400, 500],
      LTCUSD: [100, 200, 300, 400, 500],
      // BCCUSD: [100, 200, 300, 400, 500],
      // XRPUSD: [100, 200, 300, 400, 500],
      // XMRUSD: [100, 200, 300, 400, 500],
      // ZECUSD: [100, 200, 300, 400, 500],
      // GAVETH: [100, 200, 300, 400, 500],
      // GAVUSD: [100, 200, 300, 400, 500],
      // BTHUSD: [100, 200, 300, 400, 500],
      // ETHBTC: [100, 200, 300, 400, 500],
      // LTCBTC: [100, 200, 300, 400, 500],
      // OMGUSD: [100, 200, 300, 400, 500],
      // TRONBTC: [100, 200, 300, 400, 500],
      // GAVTRON: [100, 200, 300, 400, 500],

  },
  orderbookMaxLines: 30,
  maxLinesWidgets: 14,
  orderBookSideRowCount: 40, // IMPORTANT: this is the row count for each side of the orderbook
  hideInBuyCustomWidget: true,
  chart: {
    disableLogo: true,
    height: '383px',
    timezone: "America/New_York",
    theme: "black",
    toolbar_bg: '#141414',
    disabled_features: [
      'header_symbol_search',
      'header_compare',
      'header_fullscreen_button',
      'timeframes_toolbar',
      'control_bar',
      'edit_buttons_in_legend',
      'left_toolbar',
      'context_menus',
    ],
    overrides: {
      "paneProperties.background": "#141414",
      "paneProperties.gridProperties.color": "#222",
      "symbolWatermarkProperties.transparency": 90,
      "scalesProperties.textColor": "#565A5D",
      "scalesProperties.lineColor": "#303030",
      "scalesProperties.showLeftScale": !1,
      "scalesProperties.showRightScale": !0,
      "scalesProperties.backgroundColor": "#141414",
      "volumePaneSize": "large",
      "mainSeriesProperties.candleStyle.upColor": "#28A631",
      "mainSeriesProperties.candleStyle.downColor": "#BD2B35",
      "mainSeriesProperties.candleStyle.drawWick": true,
      "mainSeriesProperties.hollowCandleStyle.drawWick": false,
      "mainSeriesProperties.haStyle.drawWick": false
    }
  },
  deposit: {
    types: {
      BTC: 1,
      USD: 2,
      EUR: 2,
      GBP: 4
    },
    items: [{
      type: 1,
      title: 'BTC - Bitcoin',
      instrument: 'BTC'
    }, {
      type: 2,
      title: 'USD - United States Dollars',
      instrument: 'USD'
    }, {
      type: 2,
      title: 'EUR - Euro',
      instrument: 'EUR'
    }, {
      type: 4,
      title: 'GBP - British Pound',
      instrument: 'GBP'
    }]
  },
  withdraw: {
    types: {
      fiat: 1,
      digital: 2
    },
    items: [{
      type: 2,
      title: 'BTC - Bitcoin',
      instrument: 'BTC',
    }, {
      type: 1,
      title: 'USD - United States Dollars',
      instrument: 'USD',
    }, {
      type: 1,
      title: 'EUR - Euro',
      instrument: 'EUR',
    }, {
      type: 1,
      title: 'GBP - British Pound',
      instrument: 'GBP',
    }]
  },
  withdrawFee: {
    Bitcoin: {
      BTC: 0.0003
    },
    Litecoin: {
      LTC: 0.001
    }
  },
  sendFee: {},
  TwoFACookie: 'UNOAuth',

  currencyLimits: [{
      name: "BTC",
      level0: {
        daily: 1,
        monthly: 1
      },
      level1: {
        daily: 3,
        monthly: 3
      },
      level2: {
        daily: 6,
        monthly: 6
      }
    },
    {
      name: "USD",
      level0: {
        daily: '500',
        monthly: '1,000'
      },
      level1: {
        daily: '2,500',
        monthly: '2,500'
      },
      level2: {
        daily: '5,000',
        monthly: '5,000'
      }
    },
    {
      name: "EUR",
      level0: {
        daily: '480',
        monthly: '960'
      },
      level1: {
        daily: '2,400',
        monthly: '2,400'
      },
      level2: {
        daily: '4,800',
        monthly: '4,800'
      }
    },
    {
      name: "PHP",
      level0: {
        daily: "25,000",
        monthly: '500'
      },
      level1: {
        daily: "125,000",
        monthly: "125,000"
      },
      level2: {
        daily: "250,000",
        monthly: "250,000"
      }
    }
  ]
};