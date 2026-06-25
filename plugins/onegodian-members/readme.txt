=== OneGodian Members ===
Contributors: onegodian
Tags: membership, woocommerce, affiliate, dashboard, onegodian
Requires at least: 6.0
Tested up to: 6.6
Requires PHP: 7.4
Stable tag: 1.7.1
License: GPLv2 or later

OneGodian membership system with WooCommerce product mapping, member dashboards, referral capture, affiliate shortcodes, and production-ready membership pages.

== Description ==

OneGodian Members v1.7.1 provides a membership layer for OneGodian sites with WooCommerce product mapping, member dashboard pages, affiliate/referral tools, certificate placeholders, and production-ready shortcodes.

== Required ZIP Structure ==

onegodian-members-v1.7.1-woocommerce-sync.zip
└── onegodian-members/
    ├── onegodian-members.php
    └── readme.txt

== Shortcodes ==

* [onegodian_membership_products]
* [onegodian_membership_checkout key="spiritual"]
* [onegodian_member_dashboard]
* [onegodian_member_certificates]
* [onegodian_affiliate_link]
* [onegodian_affiliate_dashboard]
* [onegodian_referral_capture]

== WooCommerce Product Mapping ==

Go to OneGodian Members > WooCommerce Mapping and assign WooCommerce Product IDs to:

* Spiritual Membership
* Tribal Membership
* Business Membership
* Family Membership
* Founder Circle

== Verification ==

* ZIP contains one top-level folder: onegodian-members/
* Version = 1.7.1
* OGM_VERSION = 1.7.1
* WooCommerce product mapping included
* Affiliate shortcodes included
* unzip -t must pass

== Installation ==

1. Upload the onegodian-members folder to wp-content/plugins/.
2. Activate OneGodian Members.
3. Configure product IDs under OneGodian Members > WooCommerce Mapping.
4. Add the shortcodes to public pages or WPBakery content blocks.

== Changelog ==

= 1.7.1 =
* Added WooCommerce product mapping.
* Added affiliate/referral shortcodes.
* Added member dashboard and certificate shortcodes.
* Added activation-created default pages.
* Added production-safe frontend messaging.
