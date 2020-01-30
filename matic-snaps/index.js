wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'RPCSwitcher':
      wallet.updateAndSetCustomRpc('https://testnetv3.matic.network/', 15001, 'ETH', 'Matic')
      wallet.send({
        method: 'alert',
        params: ['You have switched to Matic Chain']
      })
      return true;
    default:
      throw new Error('Method not found.')
  }
})
