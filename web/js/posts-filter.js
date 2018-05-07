function filterPostsUsingTags(posts, tags) {
  const filtered_for_tags = [];
  posts.forEach((post) => {
    const metadata = JSON.parse(post.json_metadata);

    let match = 0;
    tags.forEach(inputTag => {
      if (metadata.tags.includes(inputTag)) {
        match++;
      };
    });

    let containsTags = false;
    if ($('#contains-all-tags').is(':checked')) {
      if (match === tags.length) containsTags = true;
    } else {
      if (match) containsTags = true;
    }

    if (containsTags) {
      filtered_for_tags.push(post);
    }
  });

  return filtered_for_tags;
}