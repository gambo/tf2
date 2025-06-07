<script lang="ts">
	import Metainfo from '$lib/Metainfo.svelte';

	import Dquote from '$lib/Dquote.svelte';
	import src from './titleimage.png';
	import TitleImage from '$lib/TitleImage.svelte';
</script>

<article>
	<h1>Kia Ora, Aotearoa</h1>
	<Metainfo date={new Date('07 June 2025')} tags={['personal']}></Metainfo>
	<TitleImage
		{src}
		alt="A view of New Zealand's beautiful landscape featuring a mountain covered in green trees and topped with a long white cloud. A man stands in a field looking at it in the distance."
	>
		A still from the beautiful short film <Dquote
			><a href="https://www.youtube.com/watch?v=efH6AP0lWa4"
				>Aotearoa &mdash; Land of the long White Cloud</a
			></Dquote
		> by <cite><a href="https://www.youtube.com/@BenMikha">Ben Mikha</a></cite>
	</TitleImage>
	<p class="cap">
		After nearly two decades of dreaming, I can finally call New Zealand home. The journey has been
		long, but I'm deeply grateful to be here with family, friends, and the privilege of being part
		of such a welcoming and beautiful country. It's been years since I've had the space to blog and
		explore the things that captivate me.<sup><a class="footnote" href="#footnote1">[1]</a></sup>
		I'm looking forward to this season of reflection and documentation—capturing lessons learned while
		building new connections alongside the treasured relationships from previous roles and colleagues.
	</p>
	<aside class="footnote-section">
		<span>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit dignissimos,
			necessitatibus expedita dolorem cupiditate, ad tempore, modi iure odio nostrum quis natus qui
			voluptatibus labore aliquid amet! Aspernatur, porro.
		</span>
	</aside>
	<h2>Checing this thing in the place</h2>
	<p>
		One constant throughout my life has been my fascination with patterns. It began early with
		paper-cut snowflakes, which led me to discover books on kirigami and origami. Later, during the
		explosion of Macromedia Flash in the late 1990s, I became entranced by generative art from
		pioneers like Joshua Davis. During the pivotal time when Nelson Mandela was freed from prison
		and became South Africa's first president of a democratic nation, I was surrounded by the
		vibrant, expressive patterns of Ndebele painted houses and the intricate beadwork of the Xhosa
		and Zulu peoples. Long before that, I had encountered the patterns of the Māori people—designs
		that hold profound cultural meaning, with different styles reflecting distinct regions and
		histories. I've always been drawn to the beauty of symmetrical and generative design, and now I
		feel fortunate to be surrounded by a culture so rich and alive, much as I was during my
		formative years.
	</p>
	<h2>Checing this thing in the place</h2>
	<p>
		Moving to New Zealand feels like another chapter in experiencing culture, kindness, and new
		beginnings. The people here are warm, humorous, and genuinely open. My wife quickly found her
		place in the community, and seeing her come home smiling each day has been pure joy. As nature
		lovers, we've been blessed to explore this stunning landscape. While we haven't ventured far
		yet, we've already discovered beautiful beaches and shared wonderful moments with incredible
		people. The food has been delicious, our days peaceful, and I feel truly fortunate.
	</p>
	<p>
		With the Bay of Plenty as our base, we've had the privilege of experiencing Waihi Beach, the
		gorgeous coastline around Bowentown, Tauranga, Mount Maunganui, Omanu Beach, and Papamoa. The
		drive down State Highway 2 was breathtaking—beach stretching along our left, white sand hills
		rolling on our right. We've spent meaningful time in both Whakatāne and Rotorua, where I
		immediately felt a restorative, regenerative energy. I can see why New Zealanders cherish the
		place they call home. I'm excited to become a true member of this community—and maybe catch a
		little sun while I'm at it.
	</p>
</article>
