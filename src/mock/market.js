exports.productList = [
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'AC1',
    'product': [
      {
        'vesselType': '20',
        'price': '2000',
        'remained': '200',
        'total': '200'
      },
      {
        'vesselType': '40',
        'price': '3000',
        'remained': '100',
        'total': '100'
      },
      {
        'vesselType': '40H',
        'price': '4000',
        'remained': '50',
        'total': '50'
      }
    ]
  },
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'SS1',
    'product': [
      {
        'vesselType': '40',
        'price': '3000',
        'remained': '100',
        'total': '100'
      },
      {
        'vesselType': '40H',
        'price': '4000',
        'remained': '50',
        'total': '50'
      }
    ]
  },
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'PO1',
    'product': [
      {
        'vesselType': '20',
        'price': '2000',
        'remained': '200',
        'total': '200'
      },
      {
        'vesselType': '40',
        'price': '3000',
        'remained': '100',
        'total': '100'
      }
    ]
  },
  {
    'POL': 'NingBo',
    'POD': 'HongKong',
    'ServiceCode': 'UI1',
    'product': [
      {
        'vesselType': '20',
        'price': '2000',
        'remained': '200',
        'total': '200'
      },
      {
        'vesselType': '40',
        'price': '3000',
        'remained': '100',
        'total': '100'
      },
      {
        'vesselType': '40H',
        'price': '4000',
        'remained': '50',
        'total': '50'
      },
      {
        'vesselType': '15',
        'price': '2500',
        'remained': '50'
      }
    ]
  }
]

exports.bookingResult = {
  message: 'success'
}

exports.cancelResult = {
  message: 'success'
}

exports.orderList = [
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'PO1',
    'vesselType': '40H',
    'totalPrice': '2000',
    'amount': '4',
    'status': 'unhandle'
  }, {
    'POL': 'ShangHai',
    'POD': 'NingBo',
    'ServiceCode': 'PO1',
    'vesselType': '40H',
    'totalPrice': '2000',
    'amount': '4',
    'status': 'finished'
  },
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'PO1',
    'vesselType': '40H',
    'totalPrice': '2000',
    'amount': '4',
    'status': 'rejected'
  },
  {
    'POL': 'ShangHai',
    'POD': 'HongKong',
    'ServiceCode': 'PO1',
    'vesselType': '40H',
    'totalPrice': '2000',
    'amount': '4',
    'status': 'unhandle'
  }
]

exports.userInfo = {
  username: 'OUJI',
  password: '123456',
  email: 'ouji@qq.com'
}
