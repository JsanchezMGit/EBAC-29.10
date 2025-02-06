export const formatSummary = (summaryText: string | null) => {
    let summary = 'No summary';
    if (summaryText) {
        summary = summaryText
            .replaceAll('<p>', '').replaceAll('</p>', '')
            .replaceAll('<b>', '').replaceAll('</b>', '')
            .replaceAll('<i>', '').replaceAll('</i>', '');
    }
    return summary;
  };