<script setup lang="ts">
  import {
    VisualHighlight,
    Copy,
  } from '@components/index';

</script>

<template>
  <section class="flex flex-col gap-y-2">
    <VisualHighlight
      title="Internal Warehouse & Order Management System"
      subTitle="Past Work"
      copy="Developing, Supporting and Leading the development team on rolling out order-management flow and document integration bi-directional into Xero."
      :media="{
        src: ['/image/delivery_1.webp', '/image/delivery_2.webp'], 
        type: 'imageCollection',
      }"
      :tags="[
        'Vue', 
        'PHP', 
        'Xero',
        'Typescript',
        'CRM',
      ]"
      colour="blue"
      leftAligned
    />
    <Copy paragraph='This PAAS looked to solve the issue of requiring a distributed set of different services to facilitate the management of both inventory, client-orders, and payment-flows. Rolling our own custom front-end in vue, initially vue-2 before migrating to vue-3, allowed for a clean SPA interface over the PHP Laravel backend.'/>
    <Copy
      disableFirstChar
      :paragraphs="[
        'There were 3 main aspects to this product, respective to their usually distributed services, that needed to be solved and cleanly integrated.',
        'Firstly there would need to be a system for managing individual inventory items, their respective details, as their relative location, their location / state within the ordering system (is considered stock / is out for delivery / is reserved for an order) as well as what is available to order from any registered suppliers within the system. This doesn\'t sound like too much on the surface but given the other two services tie into these the complexity is raised by an order of magnitude.',
        'Next there is the order-management side of things requiring the standard flow of (quote -> order -> invoice -> ship) and then for those unfortunate occasions (ship -> return -> credit-notes), in addition to these client facing steps there would need to be some internal specific flows (restock from supplier, transfer between warehouses). On top of these standard flows, given the nature of the clients for this PAAS every document, when editable, would need to be able to be split into multiple sub-documents based on various conditions.',
        'i.e: shipping an order / invoice where an item is being pulled from different locations, X% from primary warehouse, Y% from secondary warehouse, and Z% on back-order from supplier.',
        'The final usually distributed service rolled together here is facilitating payments, and rather than rolling your own here, as your dealing with peoples money directly you really want something iron-clad for this, we elected to exist as a layer on top of Xero. Meaning any documents in this system (quotes / orders / invoices / etc) would all be automatically replicated into Xero and automatically updated (bi-directionally), where appropriate, from changes made in these documents within the PAAS itself. With the exception of only invoices and the payment status being pushed back from the Xero instance.',
      ]"
    />
    <Copy paragraph="As you can imagine with these 3 heavily intermingled systems, that any new feature will intentionally or unintentionally touch all 3 systems: for example adding support for returning an item needs to pass the item back to the inventory, integrate to Xero to consider if a credit-note should be offered and update the order for which this item was returned for to flag that it (maybe this was only 1 of 3 items in this row) was returned (thus splitting the row into two, one for 2 items paid and delivered and another for 1 item returned)" />
    <Copy disableFirstChar paragraph="Changes such as these would need identification before development and scope managed by small document around active touch-points for this change before a proper / full technical spike is acted upon. The reason for this was really around homing in on how can we better estimate / time-box these technical spikes given we would have a more defined scope for the investigation, as sometimes we might need to investigate a solution that explicitly doesn't touch a specific area, even if that solution now has a greater implementation complexity." />
    <Copy disableFirstChar paragraph="These process flow customizations allowed for a more effective and accurate management of both time and development scope." />
  </section>
</template>