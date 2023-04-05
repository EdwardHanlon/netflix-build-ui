import React, { useEffect, useState } from "react";

import "./PlansScreen.css";
import db from "../firebaseApi";

function PlansScreen() {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		// db.collection('products').where("active", "==", true)
		// .get().then(querySnapshot => {
		// 	const products = {};
		// 	querySnapshot.forEach(async productDoc => {
		// 		products[productDoc.id] = productDoc.data();
		// 		const priceSnap = await productDoc.ref.collection('prices')
		// 		.get();

		// 		priceSnap.docs.forEach(price => {
		// 			products[productDoc.id].prices = {
		// 				priceId: price.id,
		// 				priceData: price.data
		// 			}
		// 		})
		// 	})

		// 	setProducts(products);
		// })

		// Add a fake collection here as we did not setup stripe
	}, [])
	
	return <div className="plansScreen">Plans Screen</div>;
}

export default PlansScreen;
