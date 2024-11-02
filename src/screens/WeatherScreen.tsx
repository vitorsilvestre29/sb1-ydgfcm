import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function WeatherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá User,</Text>
          <Text style={styles.subtitle}>Descubra o clima</Text>
        </View>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>🌐</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Ao redor do mundo</Text>

      {[1, 2, 3].map((index) => (
        <View key={index} style={styles.weatherCard}>
          <View style={styles.weatherInfo}>
            <Text style={styles.countryLabel}>País</Text>
            <Text style={styles.cityLabel}>Cidade</Text>
            <Text style={styles.weatherStatus}>Clear</Text>
          </View>
          <Text style={styles.temperature}>x°C</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  languageButton: {
    padding: 10,
  },
  languageButtonText: {
    fontSize: 24,
  },
  searchButton: {
    backgroundColor: '#6B4EE6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 16,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  weatherCard: {
    backgroundColor: '#6B4EE6',
    borderRadius: 15,
    padding: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherInfo: {
    gap: 5,
  },
  countryLabel: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  cityLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  weatherStatus: {
    color: 'white',
    fontSize: 16,
  },
  temperature: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});