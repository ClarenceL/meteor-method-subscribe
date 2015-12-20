Package.describe({
  summary: "",
  version: "0.0.1",
  name: "clarencel:method-subscribe"
});

Package.on_use(function (api) {

  api.versionsFrom("METEOR@1.2.1");

  api.use( 'livedata', [ 'client', 'server' ] ) ;

  api.use('coffeescript', [ 'client', 'server' ]);

  // assets
  api.addAssets('private/bindings.json', 'client');

  // client
  api.add_files('client/autoruns.coffee', 'client');

  // exports
  api.export('MethodSub', 'client');
});