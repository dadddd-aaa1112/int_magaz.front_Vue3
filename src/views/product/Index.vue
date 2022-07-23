<template>
	<main class="overflow-hidden">
		<!--Start Breadcrumb Style2-->
		<div
			class="breadcrumb-area"
			style="
				background-image: url(src/assets/images/inner-pages/breadcum-bg.png);
			"
		>
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div
							class="breadcrumb-content pb-60 text-center wow fadeInUp animated"
						>
							<h2>Shop Grid</h2>
							<div class="breadcrumb-menu">
								<ul>
									<li>
										<a href="index.html"
											><i class="flaticon-home pe-2"></i>Home</a
										>
									</li>
									<li><i class="flaticon-next"></i></li>
									<li class="active">Shop Grid</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--End Breadcrumb Style2-->
		<!--Start Product Categories One-->
		<section class="product-categories-one pb-60">
			<div class="container">
				<div class="row wow fadeInUp animated">
					<div class="col-xl-12">
						<div class="product-categories-one__inner">
							<ul>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img1.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Accessories</h6>
										</a>
									</div>
								</li>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img2.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Furnitures</h6>
										</a>
									</div>
								</li>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img3.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Jewellery</h6>
										</a>
									</div>
								</li>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img4.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Shoes</h6>
										</a>
									</div>
								</li>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img5.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Electronics</h6>
										</a>
									</div>
								</li>
								<li>
									<a href="#0" class="img-box">
										<div class="inner">
											<img
												src="src/assets/images/shop/product-categories-v1-img6.png"
												alt=""
											/>
										</div>
									</a>
									<div class="title">
										<a href="#0">
											<h6>Fashion</h6>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Product Categories One-->
		<!--Start product-grid-->
		<div class="product-grid pt-60 pb-120">
			<div class="container">
				<div class="row gx-4">
					<div class="col-xl-3 col-lg-4">
						<div class="shop-grid-sidebar">
							<button class="remove-sidebar d-lg-none d-block">
								<i class="flaticon-cross"> </i>
							</button>
							<div class="sidebar-holder">
								<form
									action="#0"
									class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated"
								>
									<div class="footer-input-box p-0">
										<input
											type="email"
											placeholder="Email address"
											name="email"
										/>
										<button type="submit" class="subscribe_btn">
											<i class="flaticon-magnifying-glass"></i>
										</button>
									</div>
								</form>
								<div class="single-sidebar-box mt-30 wow fadeInUp animated">
									<h4>Select Categories</h4>
									<div class="checkbox-item">
										<form>
											<div
												v-for="category in filterList.categories"
												class="form-group"
											>
												<input
													type="checkbox"
													:value="category.id"
													v-model="categories"
													:id="category.id"
												/>
												<label :for="category.id">{{ category.title }}</label>
											</div>
										</form>
									</div>
								</div>
								<div class="single-sidebar-box mt-30 wow fadeInUp animated">
									<h4>Color Option</h4>
									<ul class="color-option">
										<li v-for="color in filterList.colors">
											<a
												@click.prevent="addColoraddColor(color.id)"
												href="#0"
												:style="`background: #${color.title}`"
												class="color-option-single"
											>
											</a>
										</li>
									</ul>
								</div>
								<div class="single-sidebar-box mt-30 wow fadeInUp animated">
									<h4>Filter By Price</h4>
									<div class="slider-box">
										<div id="price-range" class="slider"></div>
										<div class="output-price">
											<label for="priceRange">Price:</label>
											<input type="text" id="priceRange" readonly />
										</div>
										<button
											@click.prevent="filterProducts"
											class="filterbtn"
											type="submit"
										>
											Filter
										</button>
									</div>
								</div>
								<div
									class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"
								>
									<h4>Tags</h4>
									<ul class="popular-tag">
										<li v-for="tag in filterList.tags">
											<a @click.prevent="addTag(tag.id)" href="#0">{{
												tag.title
											}}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-lg-8">
						<div class="row">
							<div class="col-xl-12">
								<div
									class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"
								>
									<div class="left-box wow fadeInUp animated">
										<p>Showing 1–12 of 50 Results</p>
									</div>
									<div
										class="right-box justify-content-md-between justify-content-center wow fadeInUp animated"
									>
										<div class="short-by">
											<div class="select-box">
												<select class="wide">
													<option data-display="Short by latest">
														Featured
													</option>
													<option value="1">Best selling</option>
													<option value="2">Alphabetically, A-Z</option>
													<option value="3">Alphabetically, Z-A</option>
													<option value="3">Price, low to high</option>
													<option value="3">Price, high to low</option>
													<option value="3">Date, old to new</option>
												</select>
											</div>
										</div>
										<div
											class="product-view-style d-flex justify-content-md-between justify-content-center"
										>
											<ul class="nav nav-pills" id="pills-tab" role="tablist">
												<li class="nav-item" role="presentation">
													<button
														class="nav-link active"
														id="pills-grid-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-grid"
														type="button"
														role="tab"
														aria-selected="true"
													>
														<i class="flaticon-grid"></i>
													</button>
												</li>
												<li class="nav-item" role="presentation">
													<button
														class="nav-link"
														id="pills-list-tab"
														data-bs-toggle="pill"
														data-bs-target="#pills-list"
														type="button"
														role="tab"
														aria-selected="false"
													>
														<i class="flaticon-list"></i>
													</button>
												</li>
											</ul>
											<button class="slidebarfilter d-lg-none d-flex">
												<i class="flaticon-edit"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div class="tab-content" id="pills-tabContent">
									<div
										class="tab-pane fade show active"
										id="pills-grid"
										role="tabpanel"
										aria-labelledby="pills-grid-tab"
									>
										<div class="row">
											<div
												v-for="product in products"
												class="col-xl-4 col-lg-6 col-6"
											>
												<div class="products-three-single w-100 mt-30">
													<div class="products-three-single-img">
														<a href="shop-details-3.html" class="d-block">
															<img
																:src="product.image_url"
																class="first-img"
																alt=""
															/>
															<img
																src="src/assets/images/home-three/productss2-hover-1.png"
																alt=""
																class="hover-img"
															/>
														</a>
														<div class="products-grid-one__badge-box">
															<span class="bg_base badge new">New</span>
														</div>
														<a
															href="cart.html"
															class="addcart btn--primary style2"
														>
															Add To Cart
														</a>
														<div class="products-grid__usefull-links">
															<ul>
																<li>
																	<a href="wishlist.html">
																		<i class="flaticon-heart"> </i>
																		<span> wishlist</span>
																	</a>
																</li>
																<li>
																	<a href="compare.html">
																		<i
																			class="flaticon-left-and-right-arrows"
																		></i>
																		<span> compare</span>
																	</a>
																</li>
																<li>
																	<a
																		@click="getProduct(product.id)"
																		:href="`#popup${product.id}`"
																		class="popup_link"
																	>
																		<i class="flaticon-visibility"></i>
																		<span> quick view</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div
														:id="`popup${product.id}`"
														class="product-gird__quick-view-popup mfp-hide"
													>
														<div v-if="popupProduct" class="container">
															<div
																class="row justify-content-between align-items-center"
															>
																<div class="col-lg-6">
																	<div class="quick-view__left-content">
																		<div class="tabs">
																			<div class="popup-product-thumb-box">
																				<ul>
																					<li
																						v-for="productImage in popupProduct.product_images"
																						class="tab-nav popup-product-thumb"
																					>
																						<a
																							:href="`#tabb${productImage.id}`"
																						>
																							<img
																								:src="productImage.url"
																								alt=""
																							/>
																						</a>
																					</li>
																				</ul>
																			</div>
																			<div class="popup-product-main-image-box">
																				<div
																					v-for="productImage in popupProduct.product_images"
																					:id="`tabb${productImage.id}`"
																					class="tab-item popup-product-image"
																				>
																					<div
																						class="popup-product-single-image"
																					>
																						<img
																							:src="productImage.url"
																							alt=""
																						/>
																					</div>
																				</div>

																				<button class="prev">
																					<i class="flaticon-back"></i>
																				</button>
																				<button class="next">
																					<i class="flaticon-next"></i>
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="popup-right-content">
																		<h3>{{ popupProduct.title }}</h3>
																		<div class="ratting">
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<span>(112)</span>
																		</div>
																		<p class="text">
																			{{ popupProduct.description }}
																		</p>
																		<div class="price">
																			<h2>
																				${{ popupProduct.price }} USD
																				<del>
																					${{ popupProduct.old_price }} USD</del
																				>
																			</h2>
																			<h6>In stuck</h6>
																		</div>
																		<div class="color-varient">
																			<template
																				v-for="groupProduct in popupProduct.group_products"
																			>
																				<a
																					@click.prevent="
																						getProduct(groupProduct.id)
																					"
																					v-for="color in groupProduct.colors"
																					href="#0"
																					:style="`background: #${color.title};`"
																					class="color-name pink"
																				>
																				</a>
																			</template>
																		</div>
																		<div class="add-product">
																			<h6>Qty:</h6>
																			<div class="button-group">
																				<div class="qtySelector text-center">
																					<span class="decreaseQty"
																						><i class="flaticon-minus"></i>
																					</span>
																					<input
																						type="number"
																						class="qtyValue"
																						value="1"
																					/>
																					<span class="increaseQty">
																						<i class="flaticon-plus"></i>
																					</span>
																				</div>
																				<button class="btn--primary">
																					Add to Cart
																				</button>
																			</div>
																		</div>
																		<div class="payment-method">
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_1.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_2.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_3.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_4.png"
																					alt=""
																				/>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div
														class="products-three-single-content text-center"
													>
														<span v-if="product.category">{{
															product.category.title
														}}</span>
														<h5>
															<a href="shop-details-3.html">
																{{ product.title }}
															</a>
														</h5>
														<p>
															<del>$ {{ product.old_price }}</del>
															$ {{ product.price }}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										class="tab-pane fade"
										id="pills-list"
										role="tabpanel"
										aria-labelledby="pills-list-tab"
									>
										<div class="row">
											<div class="col-12">
												<div class="product-grid-two list mt-30">
													<div class="product-grid-two__img">
														<a href="shop-details-2.html" class="d-block">
															<img
																src="src/assets/images/home-three/products-1.jpg"
																class="first-img"
																alt=""
															/>
															<img
																src="src/assets/images/home-three/products-hover-1.png"
																alt=""
																class="hover-img"
															/>
														</a>
														<div class="products-grid-one__badge-box">
															<span class="badge discount">Best</span>
														</div>
													</div>
													<div
														id="popupb"
														class="product-gird__quick-view-popup mfp-hide"
													>
														<div class="container">
															<div
																class="row justify-content-between align-items-center"
															>
																<div class="col-lg-6">
																	<div class="quick-view__left-content">
																		<div class="tabs">
																			<div class="popup-product-thumb-box">
																				<ul>
																					<li
																						class="tab-nav popup-product-thumb"
																					>
																						<a href="#tab7111111b">
																							<img
																								src="src/assets/images/shop/shop-grid-page-img1.jpg"
																								alt=""
																							/>
																						</a>
																					</li>
																					<li
																						class="tab-nav popup-product-thumb"
																					>
																						<a href="#tab8111111b">
																							<img
																								src="src/assets/images/shop/shop-grid-page-img2.jpg"
																								alt=""
																							/>
																						</a>
																					</li>
																					<li
																						class="tab-nav popup-product-thumb"
																					>
																						<a href="#tab9111111b">
																							<img
																								src="src/assets/images/shop/shop-grid-page-img3.jpg"
																								alt=""
																							/>
																						</a>
																					</li>
																				</ul>
																			</div>
																			<div class="popup-product-main-image-box">
																				<div
																					id="tab7111111b"
																					class="tab-item popup-product-image"
																				>
																					<div
																						class="popup-product-single-image"
																					>
																						<img
																							src="src/assets/images/shop/shop-grid-page-img1.jpg"
																							alt=""
																						/>
																					</div>
																				</div>
																				<div
																					id="tab8111111b"
																					class="tab-item popup-product-image"
																				>
																					<div
																						class="popup-product-single-image"
																					>
																						<img
																							src="src/assets/images/shop/shop-grid-page-img2.jpg"
																							alt=""
																						/>
																					</div>
																				</div>
																				<div
																					id="tab9111111b"
																					class="tab-item popup-product-image"
																				>
																					<div
																						class="popup-product-single-image"
																					>
																						<img
																							src="src/assets/images/shop/shop-grid-page-img3.jpg"
																							alt=""
																						/>
																					</div>
																				</div>
																				<button class="prev">
																					<i class="flaticon-back"></i>
																				</button>
																				<button class="next">
																					<i class="flaticon-next"></i>
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="popup-right-content">
																		<h3>Round Small Table</h3>
																		<div class="ratting">
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<i class="flaticon-star"></i>
																			<span>(123)</span>
																		</div>
																		<p class="text">
																			Wooden Tables to Brighten Your Dining Room
																		</p>
																		<div class="price">
																			<h2>
																				$50 USD
																				<del> $105 USD</del>
																			</h2>
																			<h6>In stuck</h6>
																		</div>
																		<div class="color-varient">
																			<a href="#0" class="color-name pink">
																				<span>Pink</span>
																			</a>
																			<a href="#0" class="color-name red">
																				<span>Red</span>
																			</a>
																			<a href="#0" class="color-name yellow"
																				><span>Yellow</span>
																			</a>
																			<a href="#0" class="color-name blue">
																				<span>Blue</span>
																			</a>
																			<a href="#0" class="color-name black">
																				<span>Black</span>
																			</a>
																		</div>
																		<div class="add-product">
																			<h6>Qty:</h6>
																			<div class="button-group">
																				<div class="qtySelector text-center">
																					<span class="decreaseQty"
																						><i class="flaticon-minus"></i>
																					</span>
																					<input
																						type="number"
																						class="qtyValue"
																						value="1"
																					/>
																					<span class="increaseQty">
																						<i class="flaticon-plus"></i>
																					</span>
																				</div>
																				<button class="btn--primary">
																					Add to Cart
																				</button>
																			</div>
																		</div>
																		<div class="payment-method">
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_1.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_2.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_3.png"
																					alt=""
																				/>
																			</a>
																			<a href="#0">
																				<img
																					src="src/assets/images/payment_method/method_4.png"
																					alt=""
																				/>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="product-grid-two-content text-center">
														<span>Modern</span>
														<h5>
															<a href="shop-details-2.html"
																>Trendy stylish shoes
															</a>
														</h5>
														<p>
															<del>$200</del>
															$159.00
														</p>
														<p class="text">
															Typi non habent claritatem insitam usus legentis
															qui facit eorum claritatem Investigationes
															demonstraverunt lectores legere mele lius quod
															legunt saepius Claritas est etiam processus a
															capitalize on low hanging
														</p>
														<div class="product-grid-two__overlay-box">
															<div class="title">
																<h6><a href="cart.html">Add To Cart</a></h6>
															</div>
															<div class="icon">
																<ul>
																	<li>
																		<a href="#popupb" class="popup_link"
																			><i class="flaticon-eye"></i
																		></a>
																	</li>
																	<li>
																		<a href="wishlist.html"
																			><i class="flaticon-heart"></i
																		></a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="product-grid-two list mt-30">
												<div class="product-grid-two__img">
													<a href="shop-details-2.html" class="d-block">
														<img
															src="src/assets/images/home-three/productss3-2.jpg"
															alt=""
														/>
													</a>
												</div>
												<div
													id="popupr1111gg"
													class="product-gird__quick-view-popup mfp-hide"
												>
													<div class="container">
														<div
															class="row justify-content-between align-items-center"
														>
															<div class="col-lg-6">
																<div class="quick-view__left-content">
																	<div class="tabs">
																		<div class="popup-product-thumb-box">
																			<ul>
																				<li class="tab-nav popup-product-thumb">
																					<a href="#tabr1111gg">
																						<img
																							src="src/assets/images/shop/shop-grid-page-img9.jpg"
																							alt=""
																						/>
																					</a>
																				</li>
																				<li class="tab-nav popup-product-thumb">
																					<a href="#tabr2222gg">
																						<img
																							src="src/assets/images/shop/shop-grid-page-img8.jpg"
																							alt=""
																						/>
																					</a>
																				</li>
																				<li class="tab-nav popup-product-thumb">
																					<a href="#tabr3333gg">
																						<img
																							src="src/assets/images/shop/shop-grid-page-img8.jpg"
																							alt=""
																						/>
																					</a>
																				</li>
																			</ul>
																		</div>
																		<div class="popup-product-main-image-box">
																			<div
																				id="tabr1111"
																				class="tab-item popup-product-image"
																			>
																				<div class="popup-product-single-image">
																					<img
																						src="src/assets/images/shop/shop-grid-page-img9.jpg"
																						alt=""
																					/>
																				</div>
																			</div>
																			<div
																				id="tabr2222"
																				class="tab-item popup-product-image"
																			>
																				<div class="popup-product-single-image">
																					<img
																						src="src/assets/images/shop/shop-grid-page-img8.jpg"
																						alt=""
																					/>
																				</div>
																			</div>
																			<div
																				id="tabr3333"
																				class="tab-item popup-product-image"
																			>
																				<div class="popup-product-single-image">
																					<img
																						src="src/assets/images/shop/shop-grid-page-img7.jpg"
																						alt=""
																					/>
																				</div>
																			</div>
																			<button class="prev">
																				<i class="flaticon-back"></i>
																			</button>
																			<button class="next">
																				<i class="flaticon-next"></i>
																			</button>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-lg-6">
																<div class="popup-right-content">
																	<h3>Comfort Office Chair</h3>
																	<div class="ratting">
																		<i class="flaticon-star"></i>
																		<i class="flaticon-star"></i>
																		<i class="flaticon-star"></i>
																		<i class="flaticon-star"></i>
																		<i class="flaticon-star"></i>
																		<span>(123)</span>
																	</div>
																	<p class="text">
																		Wooden Tables to Brighten Your Dining Room
																	</p>
																	<div class="price">
																		<h2>
																			$40 USD
																			<del> $99 USD</del>
																		</h2>
																		<h6>In stuck</h6>
																	</div>
																	<div class="color-varient">
																		<a href="#0" class="color-name pink">
																			<span>Pink</span>
																		</a>
																		<a href="#0" class="color-name red">
																			<span>Red</span>
																		</a>
																		<a href="#0" class="color-name yellow"
																			><span>Yellow</span>
																		</a>
																		<a href="#0" class="color-name blue">
																			<span>Blue</span>
																		</a>
																		<a href="#0" class="color-name black">
																			<span>Black</span>
																		</a>
																	</div>
																	<div class="add-product">
																		<h6>Qty:</h6>
																		<div class="button-group">
																			<div class="qtySelector text-center">
																				<span class="decreaseQty"
																					><i class="flaticon-minus"></i>
																				</span>
																				<input
																					type="number"
																					class="qtyValue"
																					value="1"
																				/>
																				<span class="increaseQty">
																					<i class="flaticon-plus"></i>
																				</span>
																			</div>
																			<button class="btn--primary">
																				Add to Cart
																			</button>
																		</div>
																	</div>
																	<div class="payment-method">
																		<a href="#0">
																			<img
																				src="src/assets/images/payment_method/method_1.png"
																				alt=""
																			/>
																		</a>
																		<a href="#0">
																			<img
																				src="src/assets/images/payment_method/method_2.png"
																				alt=""
																			/>
																		</a>
																		<a href="#0">
																			<img
																				src="src/assets/images/payment_method/method_3.png"
																				alt=""
																			/>
																		</a>
																		<a href="#0">
																			<img
																				src="src/assets/images/payment_method/method_4.png"
																				alt=""
																			/>
																		</a>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="product-grid-two-content text-center">
												<span>Modern</span>
												<h5>
													<a href="shop-details-2.html">
														High Quality Sneakers
													</a>
												</h5>
												<p>$159.00</p>
												<p class="text">
													Typi non habent claritatem insitam usus legentis qui
													facit eorum claritatem Investigationes demonstraverunt
													lectores legere mele lius quod legunt saepius Claritas
													est etiam processus a capitalize on low hanging
												</p>
												<div class="product-grid-two__overlay-box">
													<div class="title">
														<h6><a href="cart.html">Add To Cart</a></h6>
													</div>
													<div class="icon">
														<ul>
															<li>
																<a href="#popupr1111gg" class="popup_link"
																	><i class="flaticon-eye"></i
																></a>
															</li>
															<li>
																<a href="wishlist.html"
																	><i class="flaticon-heart"></i
																></a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div
							class="col-12 d-flex justify-content-center wow fadeInUp animated"
						>
							<ul class="pagination text-center">
								<li class="next">
									<a href="#0"
										><i class="flaticon-left-arrows" aria-hidden="true"></i>
									</a>
								</li>
								<li><a href="#0">1</a></li>
								<li><a href="#0" class="active">2</a></li>
								<li><a href="#0">3</a></li>
								<li><a href="#0">...</a></li>
								<li><a href="#0">10</a></li>
								<li class="next">
									<a href="#0"
										><i class="flaticon-next-1" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--End product-grid-->
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
	$(document).trigger('changed')
	getProducts()
	getFilterList()
})

const products = ref([])

const getProducts = () => {
	axios
		.post('http://127.0.0.1:8000/api/products', {})
		.then((res) => {
			products.value = res.data.data
		})
		.finally((l) => {
			$(document).trigger('changed')
		})
}

const popupProduct = ref('')

const getProduct = (id) => {
	axios
		.get(`http://127.0.0.1:8000/api/products/${id}`)
		.then((res) => {
			popupProduct.value = res.data.data
		})
		.finally((l) => {
			$(document).trigger('changed')
		})
}

const filterList = ref([])
const getFilterList = () => {
	axios
		.get(`http://127.0.0.1:8000/api/products/filters`)
		.then((res) => {
			filterList.value = res.data
			//  Price Filter
			if ($('#price-range').length) {
				$('#price-range').slider({
					range: true,
					min: filterList.value.price.min,
					max: filterList.value.price.max,
					values: [filterList.value.price.min, filterList.value.price.max],
					slide: function (event, ui) {
						$('#priceRange').val('$' + ui.values[0] + ' - $' + ui.values[1])
					},
				})
				$('#priceRange').val(
					'$' +
						$('#price-range').slider('values', 0) +
						' - $' +
						$('#price-range').slider('values', 1)
				)
			}
		})
		.finally((l) => {
			$(document).trigger('changed')
		})
}

const colors = ref([])
const tags = ref([])
const prices = ref([])
const categories = ref([])
const filterProducts = () => {
	const prices = $('#priceRange').val()
	prices = prices.replace(/[\s+]|[$]/g, '').split('-')
	axios
		.post(`http://127.0.0.1:8000/api/products`, {
			categories: categories.value,
			colors: colors.value,
			tags: tags.value,
			prices: prices.value,
		})
		.then((res) => {
			products.value = res.data.data
		})
		.finally((l) => {
			$(document).trigger('changed')
		})
}
const addColor = (id) => {
	if (!colors.value.includes(id)) {
		colors.value.push(id)
	} else {
		colors.value = colors.value.filter((elem) => {
			return elem !== id
		})
	}
}

const addTag = (id) => {
	if (!tags.value.includes(id)) {
		tags.value.push(id)
	} else {
		tags.value = tags.value.filter((elem) => {
			return elem !== id
		})
	}
}
</script>

<style scoped></style>
