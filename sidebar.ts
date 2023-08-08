import { DefaultTheme } from 'vitepress'

export default [
  {
    text: 'Introduction',
    items: [
      { text: 'Overview', link: '/payment-gateways/' },
      { text: 'Release Notes', link: '/payment-gateways/releases' },
      { text: 'Installation', link: '/payment-gateways/installation' },
    ]
  },
  {
    text: 'Payment Gateways',
    items: [
      { text: 'Coinbase', link: '/payment-gateways/gateways/coinbase' },
      { text: 'Bux', link: '/payment-gateways/gateways/bux' },
      { text: 'YooMoney', link: '/payment-gateways/gateways/yoomoney' },
      { text: 'Payfast', link: '/payment-gateways/gateways/payfast' },
      { text: 'Xendit', link: '/payment-gateways/gateways/xendit' },
      { text: 'Thawani', link: '/payment-gateways/gateways/thawani' },
      { text: 'Flutterwave', link: '/payment-gateways/gateways/flutterwave' },
      { text: 'PayU', link: '/payment-gateways/gateways/payu' },
      { text: 'Uddoktapay', link: '/payment-gateways/gateways/uddoktapay' },
      { text: 'Iyzipay', link: '/payment-gateways/gateways/iyzipay' },
      { text: 'Instamojo', link: '/payment-gateways/gateways/instamojo' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
