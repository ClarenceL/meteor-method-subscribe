# clarencel:method-subscribe
Meteor Method Subscription

Allows subscribing to a Meteor method, which populates a pre-defined Session variable. Note this isn't a true subscription
in the Meteor pub/sub sense, *you are responsible for marking the data dirty!* This is because the Meteor method is not reactive,
and neither are we going to try to track every possible collection/data reference. You may perhaps even be calling external
data sources and there's no way to easily know when that data updates.

However if you do mark the data dirty, we do reactively update all clients. A convenience method is provided for this.

Therefore *binding* is a more appropriate term to use, and I will refer to the subscriptions as bindings interchangeably.

Meteor methods are accessible application wide, so of course you can reference any Methods you declare in your app or other packages.



### Setup

We declare all Method to Session subscriptions upfront in `bindings.json` and only allow 1-to-1 relationships.




### How it Works

All bindings in 



### Functions

TODO: need introspection functions