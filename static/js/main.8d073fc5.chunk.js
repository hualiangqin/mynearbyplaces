(this.webpackJsonpmynearbyplaces=this.webpackJsonpmynearbyplaces||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),r=s(21),i=s.n(r),l=(s(28),s(11)),o=s(2),d=s(13),h=s(7),j=s(8),b=s(10),u=s(9),p=(s(29),[{name:"place1",address:"1234 N water road",type:"restaurant",reviews:[{stars:5,comment:"nice place"},{stars:2,comment:"will not come again"}]},{name:"place 3",address:"3840 E happy ave",type:"shopping mall",reviews:[{stars:1,comment:"too many people"},{stars:4,comment:"have bought what I wanted"}]},{name:"place 8",address:"0778 W DonXi highway",type:"dry cleaning",reviews:[{stars:0,comment:"every dirty"}]},{name:"place 28",address:"012394 unknown place",type:"barber",reviews:[{stars:5,comment:"nice person!"}]},{name:"place 167",address:"wherever",type:"grocery",reviews:[{stars:4,comment:"have everything I needed"},{stars:1,comment:"the vege is not fresh"}]}]),m={fetchPlaces:function(){return p},addPlace:function(e,t,s){!function(e,t,s){var n={name:e,type:t,address:s,review:[]};console.log(n),p.push(n),console.log(p)}(e,t,s)}},v=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.review;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:["Stars: ",e.stars]}),Object(n.jsxs)("div",{children:["Comment: ",e.comment]}),Object(n.jsx)("br",{})]})})}}]),s}(c.a.Component),O=(s(30),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).fillReviews=function(e){n.setState({reviews:e})},n.showOrCollapseReviews=function(){n.state.showReview?n.setState({showReview:!1}):n.setState({showReview:!0})},n.state={showReview:!1,reviews:[]},n}return Object(j.a)(s,[{key:"render",value:function(){console.log("in place");var e=this.props.place;return Object(n.jsxs)("div",{class:"places-container",children:[Object(n.jsx)("p",{children:"Hello world"}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:["Name: ",e.name]}),Object(n.jsxs)("div",{children:["Address: ",e.address]}),Object(n.jsxs)("div",{children:["Type: ",e.type]})]}),this.state.showReview?Object(n.jsxs)("p",{onClick:this.showOrCollapseReviews,children:["reviews: ",Object(n.jsx)("i",{class:"down"})]}):Object(n.jsxs)("p",{onClick:this.showOrCollapseReviews,children:["reviews: ",Object(n.jsx)("i",{class:"right"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:this.state.showReview?e.reviews.map((function(e){return Object(n.jsx)(v,{review:e})})):""}),Object(n.jsx)(l.b,{to:"/addreview",children:Object(n.jsx)("button",{children:"Add Review"})})]})}}]),s}(c.a.Component)),x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;c.setState(Object(d.a)({},s,t))},c.clickSearch=function(){console.log("click"),console.log(c.state.keywords);for(var e=s(35),t=c.state,n=t.keywords,a=t.places,r=n.split(" "),i=[],l=0;l<n.length;l++)for(var o=r[l],d=function(t){var s=a[t],n=s.name,c=s.address,r=s.type;(n.includes(o)||c.includes(o)||r.includes(o))&&!1===i.some((function(t){return e.isEqual(t,s)}))&&i.push(s)},h=0;h<a.length;h++)d(h);console.log(i),c.setState({results:i})},c.body=function(){var e=c.state.results;return Object(n.jsx)("div",{class:"results-container",children:e.length>0?e.map((function(e){return Object(n.jsx)(O,{place:e})})):"no results"})},c.state={places:[],keywords:"",results:[]},c}return Object(j.a)(a,[{key:"componentDidMount",value:function(){if(0===this.state.places.length){var e=m.fetchPlaces();this.setState({places:e}),console.log(e)}}},{key:"render",value:function(){return Object(n.jsxs)("div",{class:"main",children:[Object(n.jsx)("h1",{class:"homepage-title",children:"MyNearbyPlaces"}),Object(n.jsxs)("div",{class:"search-field",children:[Object(n.jsxs)("div",{class:"input-wrapper",children:[Object(n.jsx)("span",{children:"Find"}),Object(n.jsx)("input",{class:"input",maxLength:"64",placeholder:"find my nearby places",name:"keywords",value:this.state.keywords,onChange:this.handleChange}),Object(n.jsx)("button",{onClick:this.clickSearch,children:"Search"})]}),Object(n.jsx)(l.b,{to:"/addplace",children:Object(n.jsx)("button",{children:"Add Place"})})]}),this.body()]})}}]),a}(c.a.Component),y=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;n.setState(Object(d.a)({},s,t))},n.submitReview=function(e){n.setState({submitted:!0});var t=n.state,s=t.stars,a=t.comment;console.log("stars: "+s),console.log("comment: "+a),e.preventDefault()},n.state={stars:"",comment:"",submitted:!1},n}return Object(j.a)(s,[{key:"render",value:function(){return this.state.submitted?Object(n.jsx)(o.a,{to:"/mynearbyplaces"}):Object(n.jsxs)("form",{onSubmit:this.submitReview,children:[Object(n.jsx)("label",{children:"Stars: "}),Object(n.jsx)("input",{type:"text",name:"stars",value:this.state.stars,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Comment: "}),Object(n.jsx)("input",{type:"text",name:"comment",value:this.state.comment,onChange:this.handleChange}),Object(n.jsx)("button",{type:"submit",children:"submit"})]})}}]),s}(c.a.Component),g=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value,s=e.target.name;n.setState(Object(d.a)({},s,t))},n.submitPlace=function(e){n.setState({submitted:!0});var t=n.state,s=t.name,a=t.type,c=t.address;console.log("name: "+s),console.log("type: "+a),console.log("address: "+c),m.addPlace(s,a,c),e.preventDefault()},n.state={name:"",type:"",address:"",submitted:!1},n}return Object(j.a)(s,[{key:"render",value:function(){return this.state.submitted?Object(n.jsx)(o.a,{to:"/mynearbyplaces"}):Object(n.jsxs)("form",{onSubmit:this.submitPlace,children:[Object(n.jsx)("label",{children:"Name: "}),Object(n.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Type: "}),Object(n.jsx)("input",{type:"text",name:"type",value:this.state.type,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Address: "}),Object(n.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.handleChange}),Object(n.jsx)("button",{type:"submit",children:"submit"})]})}}]),s}(c.a.Component);var w=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/mynearbyplaces",component:x}),Object(n.jsx)(o.b,{path:"/addreview",component:y}),Object(n.jsx)(o.b,{path:"/addplace",component:g})]})})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),f()}},[[37,1,2]]]);
//# sourceMappingURL=main.8d073fc5.chunk.js.map