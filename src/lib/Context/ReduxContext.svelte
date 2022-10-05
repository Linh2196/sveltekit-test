<script>
    import { setContext } from 'svelte';
    import { REDUX_CONTEXT } from '$lib/Context/ContextConstant';
    import {store} from "$lib/Redux/store";

    setContext(REDUX_CONTEXT, store);

</script>

<slot>
    <!-- content will go here -->
</slot>
