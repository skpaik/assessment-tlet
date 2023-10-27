def get_page_limit(query_params):
    limit = query_params.get("limit", None)

    if limit:
        if isinstance(limit, str):
            if limit == "":
                limit = 5
            else:
                try:
                    limit = int(limit)
                except (ValueError, TypeError):
                    limit = 5
        else:
            limit = 5
    else:
        limit = 5

    if limit > 5:
        limit = 5

    return limit
