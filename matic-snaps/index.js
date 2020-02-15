wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'RPCSwitcher':
      wallet.updateAndSetCustomRpc('https://testnetv3.matic.network/', 15001, 'ETH', 'Matic')
      return true;
    default:
      throw new Error('Method not found.')
  }
})