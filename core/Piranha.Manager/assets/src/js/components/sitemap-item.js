/*global
    piranha
*/

Vue.component("sitemap-item", {
    props: ["item"],
    methods: {
        toggleItem: function (item) {
            item.isExpanded = !item.isExpanded;
        }
    },
    template:
        "<li class='dd-item' :class='{ expanded: item.isExpanded || item.items.length === 0 }' :data-id='item.id'>" +
        "  <div class='sitemap-item'>" +
        "    <div class='handle dd-handle'><i class='fas fa-ellipsis-v'></i></div>" +
        "    <div class='link'>" +
        "      <span v-if='item.items.length > 0' class='actions'>" +
        "        <a v-if='item.isExpanded' v-on:click.prevent='toggleItem(item)' class='expand' href='#'><i class='fas fa-minus'></i></a>" +
        "        <a v-if='!item.isExpanded' v-on:click.prevent='toggleItem(item)' class='expand' href='#'><i class='fas fa-plus'></i></a>" +
        "      </span>" +
        "      <a :href='piranha.baseUrl + item.editUrl + item.id'>" +
        "        {{ item.title }}" +
        "        <span v-if='item.status' class='badge badge-primary'>{{ item.status }}</span>" +
        "      </a>" +
        "    </div>" +
        "    <div class='type d-none d-md-block'>{{ item.typeName }}</div>" +
        "    <div class='date d-none d-md-block'>{{ item.published }}</div>" +
        "    <div class='actions'>" +
        "      <a href='#' data-toggle='modal' data-target='#pageAddModal'><i class='fas fa-angle-down'></i></a>" +
        "      <a href='#' data-toggle='modal' data-target='#pageAddModal'><i class='fas fa-angle-right'></i></a>" +
        "      <a v-if='item.items.length === 0' v-on:click.prevent='piranha.pagelist.remove(item.id)' class='danger' href='#'><i class='fas fa-trash'></i></a>" +
        "    </div>" +
        "  </div>" +
        "  <ol v-if='item.items.length > 0' class='dd-list'>" +
        "    <sitemap-item v-for='child in item.items' v-bind:key='child.id' v-bind:item='child'>" +
        "    </sitemap-item>" +
        "  </ol>" +
        "</li>"
});
